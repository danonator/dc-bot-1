const Discord = require("discord.js")
require("dotenv").config()
const client = new Discord.Client ({
  intents: ['GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'GUILDS']
})

let bot = {
  client,
  prefix: "n.",
  owners: ["719220179502104626"]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)

module.exports = bot

// client.on("ready", () => {
//     console.log(`Logged in as ${client.user.tag}`)
// })

// client.on('messageCreate', (message) => {
//   if(message.content.toUpperCase() == 'HI' || message.content.toUpperCase() == 'HELLO'){
//     message.reply(`Hey there, ${message.author.username}!`);
//     message.react('👋');
//   }
// })

client.login(process.env.TOKEN);
