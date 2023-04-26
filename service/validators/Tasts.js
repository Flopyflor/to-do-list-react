import { check } from "express-validator"
import { validateResult } from "./validateResult"

export const ValidatePostProducts = [
    check("name").exists().notEmpty(),
    check("description").exists().notEmpty(),
    check("deadLimit").exists().notEmpty(),

    (req, res, next) => {
        validateResult(req, res, next);
    },
]


