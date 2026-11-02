const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

// Create a new client instance with necessary intents
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

// A list of random things your Kogane bot can say
const randomStuffs = [
    "Hmm, I'm not entirely sure about that.",
    "That's a profound question...",
    "Ask me again when I've had my coffee.",
    "The stars say: absolutely maybe.",
    "Why are you asking me?!",
    "Outer space noises...",
    "That's top secret information."
];

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
    // Ignore messages sent by bots to avoid infinite loops
    if (message.author.bot) return;

    // Check if the message is a question (ends with a question mark)
    if (message.content.trim().endsWith('?')) {
        // Pick a random phrase from the array
        const randomIndex = Math.floor(Math.random() * randomStuffs.length);
        const reply = randomStuffs[randomIndex];

        // Send the random reply back to the chat
        message.channel.send(reply);
    }
});

// Log in your bot using your environment token
client.login(process.env.DISCORD_TOKEN);