import { Router } from 'express'
import { postTasks, getTasks, deleteTasks } from '../controller/tasksController'
const router = Router()

router.post("/", postTasks)
router.get("/", getTasks)
router.delete("/:tanksId", deleteTasks)


module.exports = router