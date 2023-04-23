import { Sequelize } from "sequelize";
import dbconnect from "../config/dbconnect.js";

const { DataTypes } = Sequelize;

const PreOrder = dbconnect.define(
  "preorder_tb",
  {
    preorderPriceTotal: {
      type: DataTypes.DOUBLE,
    },
    supplierId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

export default PreOrder;

(async () => {
  await dbconnect.sync();
})();
