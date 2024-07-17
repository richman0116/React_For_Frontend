import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [message, setMessage] = useState("")

  const fetchMessage = async () => {
    const res = await fetch("https://go-for-backend.vercel.app/message")
    const messageObj = await res.json()
    setMessage(messageObj.message)
  }

  useEffect(() => {
    fetchMessage()
  }, [])

  return (
    <div className="App">
      <p>{message}</p>
    </div>
  );
}

export default App;
