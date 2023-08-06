import express from "express";
import cors from "cors";
const app = express();

app.use(cors());

app.get("/message", (request:any, response:any) => {
  response.send("Hello World!");
});

app.listen(3000);
