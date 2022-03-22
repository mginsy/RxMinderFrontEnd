import mongoose from 'mongoose'

const schema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        status: {
            type: String,
            enum: ['ON', 'OFF'],
            default: 'OFF',
        },
    },
    {
        timestamps: true,
    }
)

export default mongoose.model('Device', schema)
