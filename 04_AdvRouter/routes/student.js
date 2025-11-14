import express from 'express'
const router = express.Router()

router.get("/all", (req, res) => {
  res.send("All Students are Here!!!");
});

router.post("/create", (req, res) => {
  res.send("Add New Student");
});

router.put("/update", (req, res) => {
  res.send("Update Student Id");
});

router.delete("/delete", (req, res) => {
  res.send("Delete Student");
});

export default router;