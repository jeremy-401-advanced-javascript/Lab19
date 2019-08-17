'use strict';

const faker = require('faker');

module.exports = (theWord) => {
  console.log("This is the payload -", faker.hacker.phrase() );
};
