
var bot = require('./botConfig').init();

bot.dialog('/', function (session) {
    session.send(`You said: ${session.message.text}`)
});

// END OF LINE
