import Category from "../models/Category"

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find({})

        res.json({ categories })
    } catch (error) {
        console.log(error)
    }
}