import express from "express";
import actorsRouter from "./actors.js";
import showsRouter from "./shows.js";

const router = express.Router();

// Mount the routers
router.use("/actors", actorsRouter);
router.use("/shows", showsRouter);

export default router;
