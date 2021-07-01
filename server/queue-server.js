'use strict';


const io = require('socket.io-client');
const client = io.connect('http://localhost:3000');
const uuid = require('uuid').v4;


class MessageQueue{
  constructor() {
    this.messages = {};
  }

  add(value) {
    let key = uuid();
    this.messages[key] = value;
  }

  get() {
    return Object.keys(this.messages).map(id => {
      return { id, value: this.messages[id] };
    });
  }

  received(id) {
    delete this.messages[id];
  }
}

// client.on(MessageQueue, (messages) => {
//     console.log('Thank You', messages);
//   });
//   client.on(MessageQueue, messages) 

  module.exports = MessageQueue;