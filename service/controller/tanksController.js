import Tanks from "../models/Tanks"


export const postTank = async(req, res) => {
    try {
        const product = req.body
        const newProduct = await Tanks.create(product)

        if (!newProduct) return res.json({ msg: "no se a podido crear el producto" });
    
    
        res.json({ msg: "se a agregado el producto correctamente" });

    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error");
    }
}