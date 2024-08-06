const { containsGreet } = require('./greet');
const { containsIncoterm } = require('./incotermTest');
const { containsLocation } = require('./location');
const { containsSchedule } = require('./schedule');
const { containsSocial } = require('./social');

module.exports = {
  containsIncoterm,
  containsGreet,
  containsSchedule,
  containsSocial,
  containsLocation,
};
