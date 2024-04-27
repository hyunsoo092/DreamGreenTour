import express from "express";
import connect from "./connect.js";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./router.js";

const app = express();
const port = 8000;

app.use(bodyParser.json());

app.use(cors());

app.listen(port, () => {
  console.log(`server is on ${port}`);
});

connect();

app.use(router);
