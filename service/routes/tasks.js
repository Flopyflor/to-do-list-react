import { Router } from 'express'
import { postTasks, getTasks, deleteTasks } from '../controller/tasksController'
import { ValidatePostProducts } from '../validators/tasts'
const router = Router()

router.post("/",ValidatePostProducts,  postTasks)
router.get("/", getTasks)
router.delete("/:tanksId", deleteTasks)


module.exports = router