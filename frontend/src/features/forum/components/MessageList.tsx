import { useEffect, useState } from "react";
import { Message } from "../types";
import { getAllMessages } from "../api/getAllMessages";

function MessageList() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const timerId = setInterval(async () => {
      setMessages(await getAllMessages());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <ul>
      {messages.map((message) => (
        <li key={message.id}>{message.content}</li>
      ))}
    </ul>
  );
}

export default MessageList;
