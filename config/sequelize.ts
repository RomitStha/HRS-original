import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize({
  database: "hrs",
  dialect: "mysql",
  username: "root",
  password: "password",
  host: "localhost",
  port: 3306,
  models: [__dirname + "/../models/*.model.js"],
  modelMatch: (filename, member) => {
    return (
      filename.substring(0, filename.indexOf(".model")).toLowerCase() ===
      member.toLowerCase()
    );
  },
  dialectOptions: {
    options: {
      requestTimeout: 60000,
    },
  },
});
