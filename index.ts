import { Client, Intents, Message } from 'discord.js';

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('Ready!');
});

client.login(process.env.BOT_TOKEN);
client.on('message', (message) => {
    if (message.author.username != 'Banha Counter')
        message.reply('Banha Counter is here!!!')
})
