const config = require("../config/bot.json");

exports.run = async (client, message) => {

    message.channel.send({
        embed: {
            color: 'ORANGE',
            author: { name: 'Help info' },
            footer: { text: 'Many-chan ~ Many Ways © 2020' },
            fields: [
                { name: 'Fun', value: '`meme`, `coin`, `8ball`'},
                { name: 'Info', value: '`ping`, `help`, `covid`, `imdb`,`instagram`, `totalbans`, `serverinfo`, `userinfo`,`botinfo`'},
                { name: 'Music', value: '`play`, `pause`, `resume`, `queue`, `clear-queue`, `shuffle`, `np`, `loop`, `volume`, `skip`, `stop`, `filter`, `w-filters`' },
                { name: 'Filters', value: '`bassboost`, `8D`, `vaporwave`, `nightcore`, `phaser`, `tremolo`, `vibrato`, `reverse`, `treble`, `normalizer`, `surrounding`, `pulsator`, `subboost`, `karaoke`, `flanger`, `gate`, `haas`, `mcompand`' },
            ],
            timestamp: new Date(),
            description: 'Cara menggunakan `filters` Contoh : ` filter bassboost `  ',
        },
    });

};
