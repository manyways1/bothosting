const config = require("../config/bot.json");

exports.run = async (client, message) => {

    message.channel.send({
        embed: {
            color: 'ORANGE',
            author: { name: 'Admin Help' },
            footer: { text: 'Many-chan ~ Many Ways © 2020' },
            fields: [
                { name: 'Moderation', value: '`ban`, `unban`, `kick`, `mute`, `unmute`, `clear`, `slowmode`, `giveroles`' },
            ],
            timestamp: new Date(),
            description: 'Command ini hanya untuk admin',
        },
    });

};
