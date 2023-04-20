import app from "./app"
import './config/db'

app.listen(app.get("port"), () => {
    console.log("funcionando en el puerto", app.get("port"))
})