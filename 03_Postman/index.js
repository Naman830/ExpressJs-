import express from "express";
const app = express();

// UGLY CODE
// app.get("/student", (req, res) => {
//   res.send("All Students are Here!!!");
// });

// app.post("/student", (req, res) => {
//   res.send("Add New Student");
// });

// app.put("/student", (req, res) => {
//   res.send("Update Student");
// });

// app.delete("/student", (req, res) => {
//   res.send("Delete Student");
// });

// REFACTOR
// APP.ROUTE()

app
  .route("/student")
  .get((req, res) => {
    res.send("All Students Here!!!");
  })
  .post((req, res) => {
    res.send("Add New Student");
  })
  .put((req, res) => {
    res.send("Update Student");
  })
  .delete((req, res) => {
    res.send("Delete Student");
  });

app.listen(3000, () => console.log("Server Up..."));
