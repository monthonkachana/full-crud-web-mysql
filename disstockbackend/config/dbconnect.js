import { Sequelize } from "sequelize";

const dbconnect = new Sequelize("dti_stock_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default dbconnect;
