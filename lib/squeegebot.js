'use strict';

var Bot = require('slackbots');
var util = require('util');

function SqueegeBot(settings) {
    this._settings = {
        token: settings.token,
        name: settings.name
    };
};

util.inherits(SqueegeBot, Bot);

SqueegeBot.prototype.run =  function() {
    SqueegeBot.super_.call(this, this._settings);

    this.on('start', this._onStart);
    this.on('message', this._onMessage);
};

SqueegeBot.prototype._onStart =  function() {
    console.info('logged in and joined "general".');
};

SqueegeBot.prototype._onMessage =  function(data) {
    if (data.type === 'message') {
        console.info('message:', data);
    }
};


module.exports = SqueegeBot;
