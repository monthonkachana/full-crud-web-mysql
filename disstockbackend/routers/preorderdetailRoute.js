import express from "express";

import {
    getAllPreOrderDetail,
    getAllPreOrderDetailById
} from "./../controllers/preorderdetailController.js";

const router = express.Router();

router.get("/", getAllPreOrderDetail);
router.get("/:id", getAllPreOrderDetailById);

export default router;
