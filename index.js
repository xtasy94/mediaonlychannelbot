const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.once('ready', () => {
    client.user.setPresence({
        activities: [{ name: 'Monitoring messages', type: 'WATCHING' }],
        status: 'online',
    });
    console.log('Bot is online and connected!');
});

client.on('messageCreate', (msg) => {
    const targetChannelId = 'your-channel-id'; // Replace with your actual channel ID

    if (msg.channel.id !== targetChannelId || msg.author.bot) return;

    if (msg.attachments.size === 0) {
        msg.delete()
            .then(() => console.log(`Deleted a message from ${msg.author.tag} without attachments.`))
            .catch((err) => console.error('Failed to delete message:', err));
    }
});

client.login('your-bot-token'); // Replace with your actual bot token