'use strict';

const io = require('socket.io-client');
const events = require('../events/events.js');
var faker = require('faker');
const client = io.connect('http://localhost:3000');


setInterval(() => { 
  const customerName = faker.name.findName();
  const address = faker.address.streetAddress();
  const orderId = faker.datatype.uuid();
  const storeId = faker.datatype.uuid();
  const storeName = 'SuperStore';
  client.emit('pickup', { customerName, address, orderId, storeName, storeId  });
}, 5000);

