import express from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../utils/cloudinary.js";

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "researchkaro", // You can name this folder anything
    allowed_formats: ["jpg", "png", "jpeg", "heic"],
  },
});

const upload = multer({ storage });

router.post("/", upload.single("file"), async (req, res) => {
  try {
    res.status(200).json(req.file.path); // This gives back the image URL
  } catch (err) {
    res.status(500).json("Upload failed");
  }
});

export default router;
