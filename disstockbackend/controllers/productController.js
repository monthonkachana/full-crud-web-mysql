import Product from "../models/productModel.js";
import { where } from "sequelize";

export const getAllProduct = async (req, res) => {
  try {
    const product = await Product.findAll();
    res.json(product);
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const getAllProductById = async (req, res) => {
  try {
    const product = await Product.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(product[0]);
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    await Product.create(req.body);
    res.json({ message: "Product created successfully" });
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: "Product updated successfully" });
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.json({ message: err.message });
  }
};
