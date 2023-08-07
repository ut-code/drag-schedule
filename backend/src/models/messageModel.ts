import prisma from "./prismaClient";

async function createMessage(messageContent: string) {
  return await prisma.message.create({
    data: {
      content: messageContent,
    },
  });
}

async function getAllMessages() {
  return await prisma.message.findMany();
}

async function updateMessage(id: number, messageContent: string) {
  return await prisma.message.update({
    where: {
      id: id,
    },
    data: {
      content: messageContent,
    },
  });
}

async function deleteMessage(id: number) {
  return await prisma.message.delete({
    where: {
      id: id,
    },
  });
}

const messageModel = {
  getAllMessages,
  createMessage,
  updateMessage,
  deleteMessage,
};

export default messageModel;
