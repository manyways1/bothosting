
exports.run = async (client, message, args) => {
    if (message.author.id !== '308273977875234816') {
        return message.channel.send(`You cannot use this command!`)
    }
    await message.channel.send(`Restarting bot...`)
    process.exit();
}
