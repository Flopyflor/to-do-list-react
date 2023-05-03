import { Schema, model } from 'mongoose'
export const CATEGORIES = ["Green", "Red", "Yellow"]

const categorySchema = new Schema(
    {
        name: String,
    },
    {
        versionKey: false,
    }
)

export default model("Category", categorySchema)