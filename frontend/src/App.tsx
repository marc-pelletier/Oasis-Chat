import io from "socket.io-client"
import { useState } from 'react'
import './App.css'

import AuthPage from "./AuthPage.tsx"
import ChatPage from "./ChatPage"

const socket = io.connect("http://localhost:3001")

export default function App() {
  const [user, setUser] = useState(undefined)
  
  function setUserState(newUser) {
    setUser(newUser)
  }
  if (!user) {
    return <AuthPage setUserState={setUserState} />
  } else {
    return <ChatPage user={user} />
  }
}