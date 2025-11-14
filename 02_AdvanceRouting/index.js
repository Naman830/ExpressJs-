import express from "express";
const app = express();

// Http Methods
// Get    --> Retrive data
// Post   --> create/insert Data
// Put    --> Completly Update Data
// PATCH  --> Partially update data
// Delete --> Delete data
// ALl    --> Any http request method

// String Pattern Path
// app.get("/abcd", (req, res) => {
//   res.send("If the user hit /acd or /abcd then this will run...");
// });

// Regex 
// app.get(/^\/users\/[0-9]{4}$/, (req, res) => {
//     res.send("If the path includes the letter (x) it will work")
// })


// Nested Routes
// app.get('/products/product/product-details', (req, res) => {
//     res.send("This code will run if you provide /products/iphone")
// })


// Advance callback functions
app.get('/double-cb', (req, res, next) => {
    // res.send("Single callback function")
    console.log("First callback function");
    next()
    
}, (req, res) => {
    res.send("second callback")
})

app.listen(3000, () => console.log("Server Stareted..."));
