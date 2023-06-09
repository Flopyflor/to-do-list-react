import {Schema, model} from 'mongoose'

const tasksSchema = Schema({
    name: {
        type: 'string',
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: Date,
        default: Date.now()
    },
}, {
    timestamps: true,
    versionKey: false
})

export default model('tanks', tasksSchema)
