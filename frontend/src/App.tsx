import { useEffect, useState } from "react";
import { getMessagesApi, postSendMessageApi } from "./utils/endpoints";

interface Message {
  id: number;
  content: string;
}

async function getMessages(): Promise<Message[]> {
  const response = await fetch(getMessagesApi);
  return await response.json();
}

async function sendMessage(newMessageContent: string) {
  const response = await fetch(postSendMessageApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messageContent: newMessageContent,
    }),
  });
  if (response.ok) {
    return;
  } else {
    throw new Error("Error sending message");
  }
}

function App() {
  const [newMessageContent, setNewMessageContent] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const timerId = setInterval(async () => {
      setMessages(await getMessages());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.content}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newMessageContent}
        onChange={(e) => {
          setNewMessageContent(e.target.value);
        }}
      />
      <button
        onClick={async () => {
          await sendMessage(newMessageContent);
          setNewMessageContent("");
        }}
      >
        Send
      </button>
    </>
  );
}

export default App;
