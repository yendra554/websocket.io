const WebSocket = require('ws');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const server = app.listen(8080, () => {
  console.log('Server started on port 8080');
});

const wsServer = new WebSocket.Server({ server });

wsServer.on('connection', (socket) => {
           
  console.log('New WebSocket connection');

  socket.on('message', (message) => {
    console.log(`Received message: ${message}`);
    socket.send(`You said: ${message}`);
  });

  socket.on('close', () => {
    console.log('WebSocket connection closed');
  });
});