import express from "express";

import {
  getAllSupplier,
  getAllSupplierBySupplierId,
  createSupplier,
  updateSupplier,
  deleteSupplier,
} from "./../controllers/supplierController.js";

const router = express.Router();

router.get("/", getAllSupplier);
router.get("/:id", getAllSupplierBySupplierId);
router.post("/", createSupplier);
router.put("/:id", updateSupplier);
router.delete("/:id", deleteSupplier);

export default router;
