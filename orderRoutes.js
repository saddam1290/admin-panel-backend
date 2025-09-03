import express from "express";
import { createOrder, getOrders, updateOrderStatus } from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/", protect, createOrder);
router.get("/", protect, admin, getOrders);
router.put("/:id", protect, admin, updateOrderStatus);

export default router;
