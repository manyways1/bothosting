const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

exports.run = async (client, message, args) => {
    const subReddits = ["meme", "me_irl", "dankmeme"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
    .setImage(img)
    .setTitle(`From /r/${random}`)
    .setURL(`http://reddit.com/${random}`)
    .setFooter('Many-chan ~ Many Ways © 2020')

    message.channel.send(embed);

}