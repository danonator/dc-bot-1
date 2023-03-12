const Discord = require("discord.js")
require("dotenv").config()
const generateImage = require("./generateImage")
const welcomeChannelID = "1084467479641858138"

const client = new Discord.Client ({
  intents: [
    'GUILD_MESSAGES', 
    'GUILD_MESSAGE_REACTIONS',
    'GUILDS',
    'GUILD_MEMBERS'
  ]
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

client.on("guildMemberAdd", async (member) => {
  const img = await generateImage(member)
  member.guild.channels.cache.get(welcomeChannelID).send({
    content: `<@${member.id}> Welcome to the server!`,
    files: [img]
  })
})

client.login(process.env.TOKEN);
