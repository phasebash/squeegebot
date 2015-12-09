var Bot = require('../lib/squeegebot');

describe('squeegebot', () => {

    var bot, settings;

    beforeEach(() => { 
        settings = { token: 'token', name: 'big j' };
    });

    describe('run the bot', () => {
        beforeEach(() => {
            bot = new Bot(settings);
            spyOn(bot, 'on').andCallFake(() => {});
        });

        it('should register "start" message handler', () => {
            bot.run();
            expect(bot.on).toHaveBeenCalledWith('start', bot._onStart);
        });

        it('should register "messsage" message handler', () => {
            bot.run();
            expect(bot.on).toHaveBeenCalledWith('message', bot._onMessage);
        });
    });

    describe('on start event', () => {
        beforeEach(() => {
            spyOn(console, 'info').andCallThrough();
        });

        it('should log to the console', () => {
            bot._onStart();

            expect(console.info).toHaveBeenCalledWith(jasmine.any(String));
        });
    });

    describe('on message event', () => {
        beforeEach(() => {
            spyOn(console, 'info').andCallThrough();
        });

        it('should not log to the console when no message present', () => {
            var data = {};

            bot._onMessage(data);

            expect(console.info).not.toHaveBeenCalled();
        });

        it('should log to the console when message present', () => {
            var data = {type: 'message'};

            bot._onMessage(data);

            expect(console.info).toHaveBeenCalledWith('message:', data);
        });
    });
    

});
