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
app.get(/x/, (req, res) => {
    res.send("If the path includes the letter (x) it will work")
})

app.listen(3000, () => console.log("Server Stareted..."));
