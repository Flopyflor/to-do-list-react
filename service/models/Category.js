import { Schema, model } from 'mongoose'
export const CATEGORIES = ["Verde", "Rojo", "Amarillo"]

const categorySchema = new Schema(
    {
        name: String,
    },
    {
        versionKey: false,
    }
)

export default model("Category", categorySchema)