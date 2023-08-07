import { API_BASE_ENDPOINT } from "../../../utils/endpoints";
import { Message } from "../types";

export async function getAllMessages(): Promise<Message[]> {
  const response = await fetch(`${API_BASE_ENDPOINT}/message`);
  return await response.json();
}
