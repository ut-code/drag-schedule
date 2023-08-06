import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const messageContents: string[] = ["Hello, world!", "Goodbye, world!"];

async function main() {
  // Seed message contents
  for (const messageContent of messageContents) {
    const createdMessage = await prisma.message.create({
      data: { content: messageContent },
    });
    console.log(createdMessage);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
