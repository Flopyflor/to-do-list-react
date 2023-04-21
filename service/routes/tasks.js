import { Router } from 'express'
import { postTasks, getTasks } from '../controller/tasksController'
const router = Router()

router.post("/", postTasks)
router.get("/", getTasks)


module.exports = router