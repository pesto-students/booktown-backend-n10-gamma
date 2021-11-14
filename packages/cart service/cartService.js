import express from "express";
require("dotenv").config();
import bodyParser from "body-parser";
import cors from "cors";
import routesHandler from "./src/routes";

const PORT = process.env.PORT;
const app = express();
app.use(cors());
routesHandler(app);

app.listen(PORT, () => {
  console.log(`app running on ${PORT} port`);
});
