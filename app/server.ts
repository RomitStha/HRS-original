import * as express from "express";

const app = express();

import { sequelize } from "../app/config";
sequelize.sync({ force: false }).then(() => {
  console.log(" yes re-sync");
});
const port = 9000;

app.listen(port, () => {
  console.log("server is running on port " + port);
});
