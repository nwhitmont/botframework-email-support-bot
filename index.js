
var bot = require('./botConfig').init();

bot.dialog('/', function (session) {
    var foo =1;
    
    setInterval(() => {
        session.send(`${foo++}`);
    }, 1000);
});

// END OF LINE
