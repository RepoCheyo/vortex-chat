const { Client, LocalAuth } = require('whatsapp-web.js');

const wwebVersion = '2.2412.54';

const client = new Client({
  authStrategy: new LocalAuth({
    clientId: 'main',
    dataPath: '../../sessions/session-main',
  }),
  puppeteer: {
    args: ['--no-sandbox'],
  },
  webVersionCache: {
    type: 'remote',
    remotePath: `https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/${wwebVersion}.html`,
  },
});

module.exports = {
  client,
};
