import express from "express";
import { createCategory, getCategories, deleteCategory } from "../controllers/categoryController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/", protect, admin, createCategory);
router.get("/", getCategories);
router.delete("/:id", protect, admin, deleteCategory);

export default router;
