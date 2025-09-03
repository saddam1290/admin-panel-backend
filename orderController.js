import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  const order = new Order(req.body);
  const createdOrder = await order.save();
  res.status(201).json(createdOrder);
};

export const getOrders = async (req, res) => {
  const orders = await Order.find().populate("user").populate("products.product");
  res.json(orders);
};

export const updateOrderStatus = async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.status = req.body.status || order.status;
    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404).json({ message: "Order not found" });
  }
};
