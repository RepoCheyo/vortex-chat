const { resp } = require('../templates/repMVP');
const { containsIncoterm } = require('./incotermTest');
const { client } = require('../utils/wwebClient');

const msgListener = (msg) => {
  client.on('message_create', (message) => {
    if (message.fromMe && message.to === '5212299408879@c.us') {
      if (containsIncoterm(msg)) {
        console.log(resp.DEFAULT_RES);
      }
    }
  });
};

module.exports = { msgListener };
