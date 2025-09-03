import Category from "../models/Category.js";

export const createCategory = async (req, res) => {
  const category = new Category(req.body);
  const createdCategory = await category.save();
  res.status(201).json(createdCategory);
};

export const getCategories = async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
};

export const deleteCategory = async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (category) {
    await category.remove();
    res.json({ message: "Category deleted" });
  } else {
    res.status(404).json({ message: "Category not found" });
  }
};
