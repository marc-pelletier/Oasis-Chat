const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const cors = require('cors')
const server = require('http').createServer(app)
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST']
  }
})

app.use(express.json())
app.use(cors({ origin: true }))

io.on('connection', () => {
  console.log('Socket.io connected')
})

server.listen(PORT, () => {
  console.log(`Express App running on ${PORT}`)
})