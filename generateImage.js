const Canvas = require('canvas')
const Discord = require('discord.js')

const background = "https://media.istockphoto.com/id/113494458/photo/fire-isolated-over-black-background.jpg?s=612x612&w=0&k=20&c=u6STGsSpJAyBN8kDeqnVUla4-0SnLpdaTsehFsey2p0="

const dim = {
  height: 408,
  width: 612,
  margin: 75
}

const av = {
  size: 256,
  x: 100,
  y: 10
}

const generateImg = async (member) => {
  let username = member.user.username
  let discrim = member.user.discriminator
  let avatarURL = member.user.avatarURL({format: "png", dynamic: true, size: av.size})

  const canvas = Canvas.createCanvas(dim.width, dim.height)
  const ctx = canvas.getContext("2d")
  const backimage = await Canvas.loadImage(background)

  ctx.drawImage(backimage, 0, 0)
  ctx.fillStyle = "rgba(0,0,0,0.8)"
  ctx.fillRect(dim.margin, dim.margin, dim.width - 2 * dim.margin, dim.height - 2 * dim.margin)

  const avimg = await Canvas.loadImage(avatarURL)
  ctx.save()

  ctx.beginPath()
  ctx.arc(av.x + av.size / 2 , av.y + av.size / 2, av.size / 2, 0 , Math.PI*2, true)
  ctx.closePath()
  ctx.clip()

  ctx.drawImage(avimg, av.x, av.y)
  ctx.restore()

  ctx.fillStyle = "white"
  ctx.textAlign = "center"

  ctx.font = "20px Arial"
  ctx.fillText("Welcome", dim.width / 2, dim.margin + 70)

  ctx.font = "30px Arial"
  ctx.fillText(username + "#" + discrim, dim.width/2, dim.height - dim.margin - 125)

  ctx.font = "10px Arial"
  ctx.fillText("to the server", dim.width/2, dim.heigh - dim.margin - 50)

  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'Welcome.png')
  return attachment
}

module.exports = generateImg