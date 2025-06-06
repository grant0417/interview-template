import express from "express";
import emojis from "./emojis";

const router = express.Router();

router.use("/emojis", emojis);

export default router;
