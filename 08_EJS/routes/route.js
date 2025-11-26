import express from "express";
import {
    homePageRender,
    aboutPageRender,
} from "../controller/homeController.js";

const router = express.Router();
router.get("/", homePageRender);
router.get("/about", aboutPageRender);

export default router;