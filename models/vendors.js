'use strict';

const events = require('./events.js');



module.exports = () => {
  console.log('beginning to vend');
  events.emit('vend');
}