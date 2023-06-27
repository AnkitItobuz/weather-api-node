import http from "http";
import fs from "fs/promises";
import { PORT } from "./config.js";
import { getData } from "./routes.js";

const server = http.createServer((req, res) => {
  try {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(getData(req));
  } catch (error) {
    console.log(error);
  }
});

server.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
