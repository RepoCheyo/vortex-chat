// wwebjs libs to work
const { client } = require('./src/utils/wwebClient');
const qrcode = require('qrcode-terminal');
const { Location } = require('whatsapp-web.js');

// pattern match
const {
  containsIncoterm,
  containsGreet,
  containsSchedule,
  containsSocial,
  containsLocation,
} = require('./src/funcs/index');

// responses templates
const {
  incoRep,
  greetRep,
  scheduleRep,
  socialRep,
  locationRep,
} = require('./src/templates/index');

// func to get arr element for response
const { arrElement } = require('./src/utils/arrElement');

client.on('ready', () => {
  console.log('Client 200');
});

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('message_create', (message) => {
  if (message.fromMe && message.from === '5212299408879@c.us') {
    if (containsGreet(message.body)) {
      let res = arrElement(greetRep);
      message.reply(res);
    } else if (containsIncoterm(message.body)) {
      let res = arrElement(incoRep);
      message.reply(res);
    } else if (containsSchedule(message.body)) {
      let res = arrElement(scheduleRep);
      message.reply(res);
    } else if (containsSocial(message.body)) {
      let res = arrElement(socialRep);
      message.reply(res);
    } else if (containsLocation(message.body)) {
      let res = arrElement(locationRep);
      const location = new Location(19.190277777778, -96.153333333333);
      message.reply(location);
      message.reply(res);
    } else {
      message.reply(
        'No he podido entender tu mensaje puedo ayudarte con horario, nuestras redes sociales, asi como nuestra ubicacion'
      );
    }
  }
});

client.initialize();
