import express from "express";

import {
    getAllProduct,
    getAllProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    
} from "./../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProduct);
router.get("/:id", getAllProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;


