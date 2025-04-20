import express from "express";
import {
  createGig,
  deleteGig,
  getGig,
  getGigs
} from "../controllers/gig.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newGig = new Gig(req.body); // using userId from frontend
    const savedGig = await newGig.save();
    res.status(201).send(savedGig);
  } catch (err) {
    console.error("POST /gigs error:", err); // 👈 log it
    res.status(500).send(err);
  }
});

router.delete("/:id", verifyToken, deleteGig);
router.get("/single/:id", getGig);
router.get("/", getGigs);

export default router;
