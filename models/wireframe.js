import mongoose, { Schema } from 'mongoose';

//did not know what else to put here lol
const basicSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    }
}, {toJSON: { virtuals: true }})

//EXPORT
const Basic = mongoose.model('Basic', basicSchema)
module.exports = Basic