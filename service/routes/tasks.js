import { Router } from 'express'
import { postTasks } from '../controller/tasksController'
const router = Router()

router.post("/", postTasks)


module.exports = router