const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const port = process.env.PORT || 3000;
// server listening for client connection
io.on('connection', (socket) => {
  console.log(`New websocket connection : ${socket.id}`);

  socket.on('disconnect', ()=> {
    console.log('websocket disconnect')
  })

  // socket.on('excute', (data)=> {
  //   console.log('websocket excute', data)
  //   io.emit('excute4001', '123456')
  //   io.emit('excute4002', '789012')
  // })
});
server.listen(port, () => console.log(`Server is listening on port ${port}`));