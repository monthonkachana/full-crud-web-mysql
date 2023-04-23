
import { where } from "sequelize";
import Member from "../models/memberModel.js";

export const getAllMember = async (req, res) => {
  try {
    const member = await Member.findAll();
    res.json(member);
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const getAllMemberById = async (req, res) => {
  try {
    const member = await Member.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(member[0]);
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const createMember = async (req, res) => {
  try {
    await Member.create(req.body);
    res.json({ message: "Member created successfully" });
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const updateMember = async (req, res) => {
  try {
    await Member.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: "Member updated successfully" });
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const deleteMember = async (req, res) => {
  try {
    await Member.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: "Member deleted successfully" });
  } catch (err) {
    res.json({ message: err.message });
  }
};
