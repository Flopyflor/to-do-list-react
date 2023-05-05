import { check } from "express-validator"
import { validateResult } from "./validateResult"

export const ValidatePostProducts = [
    check("name").exists().notEmpty().isLength({ min: 3 }).isString(),
    check("description").exists().notEmpty().isString(),
    
    // MM-DD-YYYY
    check("deadLine").exists().notEmpty().toDate(),
    check("category").isIn(['red', 'green', 'yellow', null]),

    (req, res, next) => {
        validateResult(req, res, next);
    },
]



