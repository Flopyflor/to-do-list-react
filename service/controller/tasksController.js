import Taks from "../models/Tasks"


export const postTasks = async (req, res) => {
  try {
    const product = req.body
    const newProduct = await Taks.create(product)

    if (!newProduct) return res.json({ msg: "no se a podido crear el producto" });


    res.json({ msg: "se a agregado el producto correctamente" });

    

  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error");
  }
}

export const getTasks = async (req, res) => {

  try {

    const tasks = await Taks.find({})
    res.json({ tasks });
  } catch (error) {
    res.status(500).send("hubo un error");
  }
};