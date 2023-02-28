"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
exports.sequelize = new sequelize_typescript_1.Sequelize({
    database: "hrs",
    dialect: "mysql",
    username: "root",
    password: "password",
    host: "localhost",
    port: 3306,
    models: [__dirname + "/../models/*.model.js"],
    modelMatch: (filename, member) => {
        return (filename.substring(0, filename.indexOf(".model")).toLowerCase() ===
            member.toLowerCase());
    },
    dialectOptions: {
        options: {
            requestTimeout: 60000,
        },
    },
});
