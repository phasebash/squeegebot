var Bot = require('slackbots');

var bot = new Bot({
    token: process.env.SLACK_API_KEY,
    name: 'squeegebot'
});

bot.on('start', function() {
    bot.postMessageToChannel('general', 'Hello!');
});

