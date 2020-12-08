
module.exports = async (client) => {

    console.log(`Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);

    client.user.setPresence({
        activity: {
            name: 'Discord.gg/manyways || `help',
            type: 'WATCHING'
        },
        activity: {
            name: 'MERRY CHRISMAST EVERYONE ^_^',
            type: 'LISTENING'
        },
        status: 'online'
    })
        .catch(console.error);

}