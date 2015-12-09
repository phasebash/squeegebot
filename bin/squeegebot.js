var Bot = require('../lib/squeegebot');

var bot = new Bot({
    token: process.env.SLACK_API_KEY,
    name: 'squeegebot'
});


bot.run();


