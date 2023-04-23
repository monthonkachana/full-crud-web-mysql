import PreOrder from "../models/preorderModel.js";
import { where } from "sequelize";

export const getAllPreOrder = async (req, res) => {
  try {
    const preorder = await PreOrder.findAll();
    res.json(preorder);
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const getAllPreOrderById = async (req, res) => {
  try {
    const preorder = await PreOrder.findAll({
      where: {
        id:req.params.id,
      },
    });
    res.json(preorder[0]);
  } catch (err) {
    res.json({ message: err.message });
  }
};
