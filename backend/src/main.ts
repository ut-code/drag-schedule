import express from "express";
const app = express();

app.get("/", (request:any, response:any) => {
  response.send("Hello World!");
});

app.listen(3000);
