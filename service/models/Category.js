import { Schema, model } from 'mongoose'
export const CATEGORIES = ["green", "red", "yellow"]

const categorySchema = new Schema(
    {
        name: String,
    },
    {
        versionKey: false,
    }
)

export default model("Category", categorySchema)