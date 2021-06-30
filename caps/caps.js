'use strict';

const io = require('socket.io');
// const events = require('../events/events.js');
require('../models/drivers.js');
require('../models/vendors.js');

const server = io(3000);

server.on('connection', (socket) => {

  socket.on('pickup', (payLoad) => {
    console.log(payLoad);
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
})


