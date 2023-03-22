const app = require('express')();
const http = require('http').createServer(app);
const port=process.env.PORT||3000
const io = require('socket.io')(http, {
  cors: {
    origins:'https://demonodeweb.herokuapp.com'
  }
});

app.get('/', (req, res) => {
  res.send('<h1>Hey Socket.io</h1>');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.listen(process.env.PORT||3000, () => {
  console.log('listening on *:3000');
});

