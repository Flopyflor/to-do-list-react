import Tasks from "../models/Tasks"
import CategoryModel from '../models/Category'

export const postTasks = async (req, res) => {
  try {
    const { category } = req.body
    let task = req.body
    if (category) {
      const foundCategory = await CategoryModel.find({ name: { $in: category } })
      task.category = foundCategory[0]
    } else {
      const categoryNew = await CategoryModel.find({ name: "Red" })
      console.log(categoryNew)
      task.category = categoryNew[0]._id
    }
    const newTask = await Tasks.create(task)

    if (!newTask) return res.json({ msg: "no se a podido crear la tarea" });
// 
    res.json({ msg: "se a agregado la tarea correctamente" });

  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error");
  }
}

export const getTasks = async (req, res) => {

  try {

    const tasks = await Tasks.find({}).populate({ path: "category", model: "Category" })
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