import userCredentials from "./middlewares/logs.js";
import express from "express";
const app = express();

// Request
// Middleware
// Response

app.use(userCredentials)

app.get("/", (req, res) => {
   res.send("<h1>Hello Admin</h1>")
})

app.get("/about", (req, res) => {
   res.send("<h1>About Page</h1>")
})


app.get("/contact", (req, res) => {
   res.send("<h1>Contact Page</h1>")
})

app.listen(3000, () => console.log("Sever Started..."));
