import express from 'express'
import Device from '@app/models/device'
import Data from '@app/models/data'

let router = express.Router()

// Get list of devices
router.get('/', async (req, res) => {
    const devices = await Device.find({ user: req.user._id }, '-data')
    res.json({
        status: 'success',
        data: devices,
    })
})

// Create a new device
router.post('/', async (req, res) => {
    const device = await new Device({
        user: req.user._id,
    }).save()

    res.json({
        status: 'success',
        data: device,
    })
})

// TODO: make efficient and correct
router.get('/median', async (req, res) => {
    const oneDayAgo = new Date() - 1 * 60 * 60 * 24 * 1000
    const data = await Data.find({
        updatedAt: {
            $gte: new Date(oneDayAgo),
        },
    }).sort({ point: 'descending' })
    res.json({
        status: 'success',
        data: {
            median: data[parseInt(data.length / 2)].point,
        },
    })
})

// Get data from device
router.get('/:id', async (req, res) => {
    const oneWeekAgo = new Date() - 7 * 60 * 60 * 24 * 1000
    const data = await Data.find({
        device: req.params.id,
        updatedAt: {
            $gte: new Date(oneWeekAgo),
        },
    }).sort({ updatedAt: 'descending' })
    res.json({
        status: 'success',
        data: data,
    })
})

export default router
