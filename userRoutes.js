import express from "express";
import { getUsers, blockUser, deleteUser } from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/", protect, admin, getUsers);
router.put("/block/:id", protect, admin, blockUser);
router.delete("/:id", protect, admin, deleteUser);

export default router;
