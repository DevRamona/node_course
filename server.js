const http = require("http")
const fs = require("fs")
const _ = require("lodash")
const server = http.createServer((request, response) => {

    response.setHeader("Content-Type" , "text/html")
    const num = _.random(0,20)
    console.log(num)
    
    const greet = _.once(() => {
        console.log("New")
    })
    
    greet()
    let path = "./views/"
    switch(request.url) {
        case "/" :
        path += "index.html";
        response.statusCode = 200
        break;
        case "/about" :
        path += "about.html";
        response.statusCode = 200
        case "/about-me" :
        response.statusCode = 301
        response.setHeader('Location', '/about')
        break;
        default :
        path += "404.html";
        response.statusCode = 301
        break;
    }
    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err)
            response.end()
        } else {
            response.write(data)
            response.end()
        }
    })
})




server.listen(3000, "localhost", () => {
    console.log("Listening for the requests on 3000 ")
})
