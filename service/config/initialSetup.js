import Category from '../models/Category'

export const createCateries = async () => {

    try {
        const count = await Category.estimatedDocumentCount()
        if (count > 0) return
        const values = await Promise.all([
            new Category({ name: "Red" }).save(),
            new Category({ name: "Green" }).save(),
            new Category({ name: "Yellow" }).save()

        ])

        console.log(values)
    } catch (error) {
        console.log(error)
    }

} 
