import { useEffect, useState } from "react"
import { getMessageEndpoint } from "./utils/endpoints"

function App() {
  const [message, setMessage] = useState<string>("");
  useEffect(() => {
    async function fetchMessage() {
      const response = await fetch(getMessageEndpoint);
      const message = await response.text();
      setMessage(message);
    }
    fetchMessage();
  }, [])


  return (
    <>
      {message}
    </>
  )
}

export default App
