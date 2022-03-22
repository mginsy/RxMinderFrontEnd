import mongoose from 'mongoose'

const schema = mongoose.Schema(
    {
        device: { type: mongoose.Schema.Types.ObjectId, ref: 'Device' },
        point: Number,
    },
    {
        timestamps: true,
    }
)

export default mongoose.model('Data', schema)
