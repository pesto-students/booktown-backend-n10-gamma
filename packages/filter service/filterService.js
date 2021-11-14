import express from "express";
require("dotenv").config();
import bodyParser from "body-parser";
import cors from "cors";

const PORT = process.env.PORT;
const server = express();
server.use(cors());

server.listen(PORT, () => {
  console.log(`server running on ${PORT} port`);
});
