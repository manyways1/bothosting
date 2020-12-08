const discord = require("discord.js");

exports.run = async (client, message) => {
    const member = message.mentions.users.first();
    if (member) {
        const memberTarget = message.guild.members.cache.get(member.id);
        memberTarget.kick();
        message.channel.send("pengguna telah dikeluarkan!");
    } else {
        message.channel.send('Kamu harus tag orangnya duluuu hum..');
    }
} 
    

