import express from 'express'
import devices from './devices'
import users from './users'

import Data from '@app/models/data'

import authenticate from '@app/libs/authentication-middleware'

let router = express.Router()

router.use('/users', users)

// Post data to device
router.post('/devices/:id', async (req, res) => {
    const data = await new Data({
        ...req.body,
        device: req.params.id,
    }).save()

    res.json({
        status: 'success',
        data: data,
    })
})

router.use(authenticate)
router.use('/devices', devices)

export default router
