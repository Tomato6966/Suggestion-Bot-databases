//Here the command starts
const Discord = require("discord.js")
const config = require("../../config.json");
module.exports = {
   //definition
	name: "invite", //the name of the command 
	category: "info", //the category this will be listed at, for the help cmd
	aliases: ["add"], //every parameter can be an alias
	cooldown: 2, //this will set it to a 2 second cooldown
	usage: "invite", //this is for the help command for EACH cmd
  	description: "Invite this Bot", //the description of the command

	//running the command with the parameters: client, message, args, user, text, prefix
  run: async (client, message, args, user, text, prefix) => {
    return message.reply(
      new Discord.MessageEmbed()
          .setAuthor(`Invite the Bot`, config.AVATARURL, "https://su.musicium.eu")
          .setColor("#ff712e")
          .setFooter(client.user.username, config.AVATARURL)  
          .setDescription(`[\`CLICK HERE\`](https://su.musicium.eu)`)
  )
    }
}
