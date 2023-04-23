import Supplier from "../models/supplierModel.js";
import { where } from "sequelize";

export const getAllSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findAll();
    res.json(supplier);
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const getAllSupplierBySupplierId = async (req, res) => {
  try {
    const supplier = await Supplier.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(supplier[0]);
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const createSupplier = async (req, res) => {
  try {
    await Supplier.create(req.body);
    res.json({ message: "Supplier created successfully" });
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const updateSupplier = async (req, res) => {
  try {
    await Supplier.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: "Supplier updated successfully" });
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const deleteSupplier = async (req, res) => {
  try {
    await Supplier.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: "Supplier deleted successfully" });
  } catch (err) {
    res.json({ message: err.message });
  }
};
