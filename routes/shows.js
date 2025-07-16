import express from "express";
import { getAllShows, createShow } from "../controllers/showsControllers.js";

const router = express.Router();

// GET /shows - Retrieve all shows with actor names only
router.get("/", getAllShows);

// POST /shows - Create a new show
router.post("/", createShow);

export default router;
