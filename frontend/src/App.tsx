import { useEffect, useState } from "react";
import { getMessagesApi, postSendMessageApi } from "./utils/endpoints";

interface Message {
  id: number;
  content: string;
}

function App() {
  const [newMessageContent, setNewMessageContent] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  async function fetchMessages(): Promise<Message[]> {
    const response = await fetch(getMessagesApi);
    return await response.json();
  }

  useEffect(() => {
    const timerId = setInterval(async () => {
      setMessages(await fetchMessages());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

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
      setNewMessageContent("");
    } else {
      throw new Error("Error sending message");
    }
  }

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
        }}
      >
        Send
      </button>
    </>
  );
}

export default App;
