'use strict';

const events = require('../events/events.js');
var faker = require('faker');



setInterval(() => { 
  const customerName = faker.name.findName();
  const address = faker.address.streetAddress();
  const orderId = faker.datatype.uuid();
  const storeName = 'SuperStore';
  events.emit('order', { customerName, address, orderId, storeName  });
}, 5000);


// module.exports = () => {
//   console.log('beginning to vend');
//   events.emit('vend');
// }