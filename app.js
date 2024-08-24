const express = require("express")
const app = express()

app.set("view engines", "ejs")
app.set("Views", "myViews")

app.listen(3000)
app.get('/', (request, response)=> {
    response.sendFile("./views/index.html",{root :__dirname})
})

app.get("/about", (request, response) => {
    response.sendFile("./views/about.html", {root: __dirname})

})

app.get("/about-us", (request,response) => {
    response.redirect("/about")
})

app.use((request, response) => {
    response.status(404).sendFile("./views/404.html", {root: __dirname})
})