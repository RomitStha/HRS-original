"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const config_1 = require("../config");
config_1.sequelize.sync({ force: false }).then(() => {
    console.log(" yes re-sync");
});
const port = 9000;
app.listen(port, () => {
    console.log("server is running on port " + port);
});
