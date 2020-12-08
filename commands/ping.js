const emotes = require("../config/emojis.json");

exports.run = async (client, message) => {
    try {
        const msg = await message.channel.send("Ping! 🏓");
        msg.edit(`Pong! 🏓\nMessage roundtrip took: \`${msg.createdTimestamp - message.createdTimestamp}ms\`.`);
    } catch (error) {
        console.error(`${timestamp} ${error}`);
    }
};

