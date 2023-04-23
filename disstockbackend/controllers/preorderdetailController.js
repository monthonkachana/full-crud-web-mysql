import PrePreorderDetail from "../models/preorderdetailModel.js";
import { where } from "sequelize";

export const getAllPreOrderDetail = async (req, res) => {
  try {
    const preorderdetail = await PrePreorderDetail.findAll();
    res.json(preorderdetail);
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const getAllPreOrderDetailById = async (req, res) => {
  try {
    const preorderdetail = await PrePreorderDetail.findAll({
      where: {
        id:req.params.id,
      },
    });
    res.json(preorderdetail[0]);
  } catch (err) {
    res.json({ message: err.message });
  }
};
