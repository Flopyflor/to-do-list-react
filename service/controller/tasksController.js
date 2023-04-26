import Tasks from "../models/Tasks"


export const postTasks = async (req, res) => {
  try {
    const product = req.body
    const newProduct = await Tasks.create(product)

    if (!newProduct) return res.json({ msg: "no se a podido crear el producto" });


    res.json({ msg: "se a agregado el producto correctamente" });

  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error");
  }
}

export const getTasks = async (req, res) => {

  try {

    const tasks = await Tasks.find({})
    res.json({ tasks });
  } catch (error) {
    res.status(500).send("hubo un error");
  }
};

export const deleteTasks = async (req, res) => {
  try {
    const _id = req.params.tanksId
    const task = await Tasks.find({ _id });
    //si el producto existe o no
    if (!task[0]) {
      return res.status(404).json({ msg: "no existe esa tarea" });
    }
    const deletedTask = await Tasks.findByIdAndDelete(_id)
    if (!deletedTask) {
      return res.status(404).json({ msg: "no se a podido eliminar la tarea" });
    }

    res.json({ msg: "se a eliminado la tarea correctamente" });

  } catch (error) {
    res.status(500).send("hubo un error");
  }

};