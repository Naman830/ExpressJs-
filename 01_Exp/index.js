// 1. Create folder
// 2. npm init -y and change add type(module)
// 3. npm i express
// 4. import express
// 5. Create instance express
// 6. Provide port
// 7. Basic route

import express from "express";
const app = express();

// Basic routing
// app.get("/", (req, res) => {
//   res.send("<h1> Welcome to HomePage </h1>");
// });

// app.get("/about", (req, res) => {
//   res.send("<h1> This is About Section </h1>");
// });

// app.get("/contact", (req, res) => {
//     res.send("<h1>This is Contact Section</h1>")
// })


app.listen(3000, () => console.log("Server Stareted..."));
