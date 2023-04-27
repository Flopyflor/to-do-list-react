import Category from '../models/Category'

export const createCateries = async () => {

    try {
        const count = await Category.estimatedDocumentCount()
        if (count > 0) return
        const values = await Promise.all([
            new Category({ name: "Rojo" }).save(),
            new Category({ name: "Verde" }).save(),
            new Category({ name: "Amarillo" }).save()

        ])

        console.log(values)
    } catch (error) {
        console.log(error)
    }

} 
