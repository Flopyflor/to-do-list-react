import cors from 'cors'
import morgan from "morgan"
import express from "express"
import routes from './routes'
const app = express()

app.use(cors())
app.set("port", 4000)
app.use(morgan("dev"))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api", routes)

export default app