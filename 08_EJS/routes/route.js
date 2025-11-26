import express from "express";
import homePageRender from "../controller/homeController.js";
import aboutPageRender from "../controller/aboutController.js";

const router = express.Router();
router.get("/", homePageRender);
router.get("/about", aboutPageRender);

export default router;