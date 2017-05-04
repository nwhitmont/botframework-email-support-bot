module.exports = {
    init: function () {
        const bb = require('botbuilder');
        const server = require('restify').createServer();

        server.listen(process.env.port || process.env.PORT || 3978, function () {
            console.log('%s listening to %s', server.name, server.url);
        });

        // Create chat connector for communicating with the Bot Framework Service
        var connector = new bb.ChatConnector({
            appId: process.env.MICROSOFT_APP_ID,
            appPassword: process.env.MICROSOFT_APP_PASSWORD
        });

        // status route
        server.get('/', function (request, response, next) {
            response.send(200, { status: 'online'})
        });

        // Listen for messages from users 
        server.post('/api/messages', connector.listen());

        return new bb.UniversalBot(connector);
    }
};
