import app from "./app"


app.listen(app.get("port"), () => {
    console.log("funcionando en el puerto", app.get("port"))
})