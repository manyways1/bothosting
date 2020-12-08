const discord = require("discord.js");
const ms = require("ms")

exports.run = async (client, message) => {
    const target = message.mentions.users.first();
    if(target){
        let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');
        
        let memberTarget = message.guild.members.cache.get(target.id);

        if (!args[1]) {
         memberTarget.roles.add(muteRole.id);
         message.channel.send(`<@${memberTarget.user.id}> telah di muted`);
         return 
        }
        memberTarget.roles.add(muteRole.id);
        message.channel.send(`<@${memberTarget.user.id}> telah di muted selama ${ms(ms(args[1]))}`);

        setTimeout(function () {
         memberTarget.roles.add(muteRole.id);
         memberTarget.roles.remove(muteRole.id)
         message.channel.send(`<@${memberTarget.user.id}> telah di unmuted`);
        }, ms(args[1]));
    } else{
        message.channel.send('Hmmm aku gak bisa menemukannya!');
    }    
 }


