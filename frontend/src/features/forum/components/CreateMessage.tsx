import { useState } from "react";
import { createMessage } from "../api/createMessage";

function CreateMessage() {
  const [newMessageContent, setNewMessageContent] = useState<string>("");

  return (
    <>
      <input
        type="text"
        value={newMessageContent}
        onChange={(e) => {
          setNewMessageContent(e.target.value);
        }}
      />
      <button
        onClick={async () => {
          await createMessage(newMessageContent);
          setNewMessageContent("");
        }}
      >
        Send
      </button>
    </>
  );
}

export default CreateMessage;
