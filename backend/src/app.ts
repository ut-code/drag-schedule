import express from "express";
import cors from "cors";
import messageRoute from "./routes/messageRoute";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: process.env.WEB_ORIGIN }));
app.use(express.json());

app.use("/message", messageRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
