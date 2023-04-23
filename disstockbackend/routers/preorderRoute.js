import express from "express";

import {
    getAllPreOrder,
    getAllPreOrderById
} from "./../controllers/preorderController.js";

const router = express.Router();

router.get("/", getAllPreOrder);
router.get("/:id", getAllPreOrderById);

export default router;
