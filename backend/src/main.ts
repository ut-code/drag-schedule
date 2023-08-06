import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const client = new PrismaClient();

app.use(cors({ origin: process.env.WEB_ORIGIN }));
app.use(express.json());

app.get("/messages", async (request, response) => {
  const messages = await client.message.findMany();
  response.json(messages);
});

app.post("/send", async (request, response) => {
  const newMessageContent = request.body.messageContent;
  await client.message.create({
    data: {
      content: newMessageContent,
    },
  });
  response.json({ message: "Message sent!" });
});

app.listen(3000);
