import express from 'express'
import passport from 'passport'
import local from 'passport-local'
import authenticate from '@app/libs/authentication-middleware'
import stripeAPI from 'stripe'
import config from '@app/config'

import User from '@app/models/user'
import Device from '@app/models/device'
import Data from '@app/models/data'

const stripe = stripeAPI(config.STRIPE_SECRET_KEY)

let router = express.Router()

router.get('/', authenticate, (req, res) => {
    res.json({
        status: 'success',
        data: req.user,
    })
})

passport.use(
    new local.Strategy(
        {
            usernameField: 'email',
        },
        async (email, password, done) => {
            const user = await User.findOne({ email: email })
            if (!user) return done(null, false, { message: 'Email not found' })

            // TODO: update
            if (password !== user.password)
                return done(null, false, { message: 'Invalid credentials' })
            return done(null, user)
        }
    )
)

passport.serializeUser(function (user, done) {
    done(null, user._id)
})

passport.deserializeUser(async (id, done) => {
    User.findById(id, (err, user) => {
        done(err, user)
    })
})

// Login a user
router.post('/login', (req, res, next) =>
    passport.authenticate('local', (err, user, info) => {
        if (err) return next(err)
        if (!user)
            return res.status(401).json({
                status: 'failure',
                ...info,
            })

        req.logIn(user, (err) => {
            if (err) return next(err)

            res.json({
                status: 'success',
                data: user,
            })
        })
    })(req, res, next)
)

// Create a new user
router.post('/register', async (req, res, next) => {
    const { name, email, password } = req.body

    if (await User.findOne({ email: email })) return next()

    const user = await new User({
        name: name,
        email: email,
        password: password,
    }).save()

    req.login(user, (err) => {
        if (err) return next(err)

        res.json({
            status: 'success',
            data: user,
        })
    })
})

router.get('/logout', (req, res) => {
    req.logout()
    res.json({
        status: 'success',
    })
})

router.post('/pay', async (req, res, next) => {
    const devices = await Device.find({ user: req.user._id }, '-data')
    if (!devices.length) return next()
    const data = await Data.findOne({ device: devices[0] }).sort({
        updatedAt: 'descending',
    })

    const DOMAIN = 'http://localhost:3000'
    const session = await stripe.checkout.sessions.create({
        customer_email: req.user.email,
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Waste disposal',
                        images: [
                            'https://i1.sndcdn.com/artworks-000229109728-tl0iol-t500x500.jpg',
                        ],
                    },
                    unit_amount: data.point * 100,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${DOMAIN}?success=true`,
        cancel_url: `${DOMAIN}?canceled=true`,
    })
    res.json({ id: session.id })
})

export default router
