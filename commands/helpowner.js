const config = require("../config/bot.json");

exports.run = async (client, message) => {

    message.channel.send({
        embed: {
            color: 'BLACK',
            author: { name: 'Owner Help' },
            footer: { text: 'halooo daddyyyy ^_^ ~ Many-chan ~ Many Ways © 2020' },
            fields: [
                { name: 'Owner Command', value: '`eval`, `restart`' },
            ],
            timestamp: new Date(),
            description: 'Command buat daddy ^_^~',
        },
    });

};
