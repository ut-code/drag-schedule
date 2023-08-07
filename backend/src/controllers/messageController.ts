import { Request, Response } from "express";
import messageModel from "../models/messageModel";

async function createMessage(request: Request, response: Response) {
  const newMessageContent = request.body.messageContent;
  await messageModel.createMessage(newMessageContent);
  response.json({ message: "Message sent!" });
}

async function getAllMessages(request: Request, response: Response) {
  const messages = await messageModel.getAllMessages();
  response.json(messages);
}

async function updateMessage(request: Request, response: Response) {
  const id = parseInt(request.params.id);
  const newMessageContent = request.body.messageContent;
  await messageModel.updateMessage(id, newMessageContent);
  response.json({ message: "Message updated!" });
}

async function deleteMessage(request: Request, response: Response) {
  const id = parseInt(request.params.id);
  await messageModel.deleteMessage(id);
  response.json({ message: "Message deleted!" });
}

const messageController = {
  getAllMessages,
  createMessage,
  updateMessage,
  deleteMessage,
};

export default messageController;
