import { Router } from 'express'
import { getCategories } from '../controller/CategoryController'
const router = Router()

router.get("/", getCategories)


module.exports = router