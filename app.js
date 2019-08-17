'use strict';

const io = require('socket.io-client');


const socket = io.connect('http://socketdemo-env.ke93y4czed.us-east-2.elasticbeanstalk.com/');

const faker = require('faker');

setInterval( () => {
  socket.emit('speak', faker.hacker.phrase());
},1000);
