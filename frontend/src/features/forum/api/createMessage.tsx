import { API_BASE_ENDPOINT } from "../../../utils/endpoints";
import { Message } from "../types";

export async function createMessage(
  newMessageContent: string,
): Promise<Message> {
  const response = await fetch(`${API_BASE_ENDPOINT}/message`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messageContent: newMessageContent,
    }),
  });
  return await response.json();
}
