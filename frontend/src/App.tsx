import io from "socket.io-client"
import { useState } from 'react'
import './App.css'

import AuthPage from "./AuthPage"
import ChatPage from "./ChatPage"

const socket = io.connect("http://localhost:3001")

export default function App() {
  const [user, setUser] = useState(undefined)

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />
  } else {
    return <ChatPage user={user} />
  }
}