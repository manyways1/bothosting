const discord = require("discord.js");

exports.run = async (client, message) => {
    const target = message.mentions.users.first();
    if (target) {
        let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');

        let memberTarget = message.guild.members.cache.get(target.id);

        memberTarget.roles.remove(muteRole.id);
        message.channel.send(`<@${memberTarget.user.id}> telah di unmuted`);
    } else {
        message.channel.send('Hmmm aku gak bisa menemukannya!');
    }
}

