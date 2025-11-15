import express from "express";
const app = express();

// Route Params
// ecom/product/iphone/:abcdefghijklmnopqrstuvw

// Example-1 single params
// app.get('/ecom/product/iphone/:mode1', (req, res) => {
//     const {mode1} = req.params;
//     res.send(`Iphone ${mode1} pro max`)
// })


// Example-2 multiple params
// app.get('/product/:category/:id', (req, res) => {
//     const { category, id} = req.params;
//     res.send(`Product Categreory (${category}) & Product Id (${id})`)
// })


// Example-3 multiple params 
// app.get('/product/order/:day/:month/:year', (req, res) => {
//     const { day, month, year} = req.params;
//     res.send(`Product Orderd on: ${day}/${month}/${year}`);
// })


// app.param()
// app.param("year", (req, res, next, id) => {
//     console.log(`id : ${id}`);
//     next()
// })

// app.get('/user/:id', (req, res) => {
//     console.log("This is user Id Path");
//     res.send("Response OKay")
// })



app.listen(3000, () => console.log("Server Up babe"));

