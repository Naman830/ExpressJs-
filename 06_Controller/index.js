import express from "express";
const app = express();
import products from './product.js'
// import students from './routes/student.js'
// app.use('/students', students)

// Query String

// app.get('/product', (req, res) => {
//     res.send(`response Okay ${req.query.category}`)
// })
// answer http://localhost:3000/product?category=anything


// Geting frontend to backend data controlling in query string
// app.get("/product", (req, res) => {
//   const { category } = req.query;
//   res.send(`Product Category: ${category}`);
// });


// Multiple query string
// app.get("/product", (req, res) => {
//   const { category , id } = req.query;
//   res.send(`Product Category: ${category}, product id: ${id}`);
// });



// Now sending data from backend to frontend through JSON

app.get('/product', (req, res) => {
    res.json(products)
})


app.listen(3000, () => console.log("Server Up Baby"));
