import express from "express";
const app = express();

// Http Methods
// Get    --> Retrive data
// Post   --> create/insert Data
// Put    --> Completly Update Data
// PATCH  --> Partially update data
// Delete --> Delete data
// ALl    --> Any http request method

// GET ROUTING METHODS
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
// PASSING MULTIPLE CALLPBACK FUNCTONS
// app.get('/double-cb', 
//   (req, res, next) => {
//     console.log("First callback");
//     next();
//   },
//   (req, res, next) => {
//     console.log("Second callback");
//     next();
//   },
//   (req, res) => {
//     res.send("Final response from third callback");
//   }
// );



// ARRAY CALL BACK FUNCTION 
const cb1 = (req, res, next) => {
    console.log("First Callback");
    next()
}

const cb2 = (req, res, next) => {
    console.log("Second Callback");
    next()
}
const cb3 = (req, res) => {
    console.log("Third Callback");
    res.send("Third Callback");
}

app.get('/array-cb', [cb1, cb2, cb3])



app.listen(3000, () => console.log("Server Stareted..."));
