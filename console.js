"use strict";

const theword = require("./theword.js");

const io = require("socket.io-client");

const socket = io.connect('http://socketdemo-env.ke93y4czed.us-east-2.elasticbeanstalk.com/');

socket.on('the-bird', theword);

socket.on("the-bird", theword);
