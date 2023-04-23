import { Sequelize } from "sequelize";
import dbconnect from "../config/dbconnect.js";

const { DataTypes } = Sequelize;

const Member = dbconnect.define(
  "member_tb",
  {
    memberName: {
      type: DataTypes.STRING,
    },
    memberUsername: {
      type: DataTypes.STRING,
    },
    memberPassword: {
      type: DataTypes.STRING,
    },
    memberPhone: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Member;

(async () => {
  await dbconnect.sync();
})();
