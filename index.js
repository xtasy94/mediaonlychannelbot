const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () =>{
client.user.setStatus('fuck you')
console.log('Connected!')
})


client.on("messageCreate", msg => {
    if (msg.channel.id !== "channel id") { 
      return;
    }

    
    if (msg.author.bot) {
        return false;
    }

    
    if (msg.attachments.size == 0) {
        msg.delete();
    }
});


client.login('your bot token')
