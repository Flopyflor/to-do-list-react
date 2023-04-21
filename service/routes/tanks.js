import { Router } from 'express'
import { postTank } from '../controller/tanksController'
const router = Router()

router.post("/", postTank)


module.exports = router