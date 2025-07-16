import express from "express";
import { getAllActors, createActor } from "../controllers/actorsControllers.js";

const router = express.Router();

// GET /actors - Get all actors (for home page)
router.get("/", getAllActors);

// POST /actors - Create a new actor
router.post("/", createActor);

export default router;
