import express from "express";

import {
    getAllMember,
    getAllMemberById,
    createMember,
    updateMember,
    deleteMember,
    
} from "./../controllers/memberController.js";

const router = express.Router();

router.get("/", getAllMember);
router.get("/:id", getAllMemberById);
router.post("/", createMember);
router.put("/:id", updateMember);
router.delete("/:id", deleteMember);

export default router;


