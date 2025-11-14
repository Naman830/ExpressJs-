import express from 'express'
const router = express.Router()

router.get("/all", (req, res) => {
  res.send("All teacher are Here!!!");
});

router.post("/create", (req, res) => {
  res.send("Add New teacher");
});

router.put("/update", (req, res) => {
  res.send("Update teacher Id");
});

router.delete("/delete", (req, res) => {
  res.send("Delete teacher");
});

export default router;