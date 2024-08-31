const express = require("express")
const app = express()

app.set("view engines", "ejs")
app.set("Views", "myViews")

app.listen(3000)
app.get('/', (request, response)=> {
    response.render('index')
})

app.get("/about", (request, response) => {
    response.sendFile("./views/about.html", {root: __dirname})

})

app.get("/about-us", (request,response) => {
    response.redirect("/about")
})

app.use((request, response) => {
    response.status(301).sendFile("./views/404.html", {root: __dirname})
})


// mongodb+srv://ringabire:LXN4wVpibI6P95wj@example-test.xn04s.mongodb.net/?retryWrites=true&w=majority&appName=example-test