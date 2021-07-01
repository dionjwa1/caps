'use strict';
const MessageQueue = require('./queue-server.js')
const io = require('socket.io');
// const events = require('../events/events.js');
// require('../models/vendors.js');
// require('../models/drivers.js');
let sendMessage = new MessageQueue();


const server = io(3000);
const caps = server.of('/caps');

caps.on('connection', (socket) => {

  socket.on('pickup', (payLoad) => {
    console.log(payLoad);
    sendMessage.add(payLoad);
    server.emit('pickup', payLoad)
  });
  
  socket.on('delivered', (payLoad) => {
    console.log(payLoad);
    server.emit('delivered', payLoad)
  });
  
  socket.on('in-transit', (payLoad) => {
    console.log(payLoad);
    server.emit('in-transit', payLoad)
  });

  socket.on('received', (payLoad) => {
    console.log(payLoad);
    sendMessage.received(payLoad)
  });

  socket.on('getAll', () => {
    const obtain = sendMessage.get()
    for(let i = 0; i<obtain.length; i++){
      // socket.broadcast.emit[o]
      console.log(obtain[i], 'Got It');
    }
  });

  socket.on(MessageQueue, (messages) => {
    console.log(payLoad);
    server.emit(MessageQueue, messages)
  });

})


