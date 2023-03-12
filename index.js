const Discord = require("discord.js")
const TOKEN = "MTA4NDMzMzUzMDI1NzA1MTcyOA.GBVeAg.pZ1GFAQ_AbzUg_v5by_wYQ-vKI_Rj2Fq1FvAH0"
require("dotenv").config()
const client = new Discord.Client ({
  intents: ['GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'GUILDS']
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on('messageCreate', (message) => {
  if(message.content.toUpperCase() == 'HI' || message.content.toUpperCase() == 'HELLO'){
    message.reply(`Hey there, ${message.author.username}!`);
    message.react('👋');
  }
})

client.login(process.env.TOKEN);
