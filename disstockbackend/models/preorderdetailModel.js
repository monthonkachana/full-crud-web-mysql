import { Sequelize } from "sequelize";
import dbconnect from "../config/dbconnect.js";

const { DataTypes } = Sequelize;

const PreorderDetail = dbconnect.define(
  "preorder_detail_tb",
  {
    preorderId: {
      type: DataTypes.INTEGER,
    },
    productId: {
      type: DataTypes.INTEGER,
    },
    preorderProductQuantity: {
      type: DataTypes.INTEGER,
    },
    productProductPrice: {
      type: DataTypes.DOUBLE,
    },
  },
  {
    freezeTableName: true,
  }
);

export default PreorderDetail;

(async () => {
  await dbconnect.sync();
})();
