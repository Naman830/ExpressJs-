// import userCredentials from "./middlewares/logs.js";
import express from "express";
const app = express();
import path from 'path'


// Middleware

//- Request
//- Middleware
//- Response

// app.use(userCredentials)
// app.get("/", (req, res) => {
//    res.send("<h1>Hello Admin</h1>")
// })

// app.get("/about", (req, res) => {
//    res.send("<h1>About Page</h1>")
// })

// app.get("/contact", (req, res) => {
//    res.send("<h1>Contact Page</h1>")
// })


// Static Files

// this is build-in middleware of express to server static files 
app.use(express.static('./public'))

app.get("/", (req, res) => {
   res.sendFile(path.join(process.cwd(), "./public/index.html"));
})



app.listen(3000, () => console.log("Sever Started..."));
