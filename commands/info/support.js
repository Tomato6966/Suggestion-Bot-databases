//Here the command starts
const Discord = require("discord.js")
const config = require("../../config.json");
module.exports = {
   //definition
	name: "support", //the name of the command 
	category: "info", //the category this will be listed at, for the help cmd
	aliases: [""], //every parameter can be an alias
	cooldown: 2, //this will set it to a 2 second cooldown
	usage: "support", //this is for the help command for EACH cmd
  	description: "Gives you the link of the support Server", //the description of the command

	//running the command with the parameters: client, message, args, user, text, prefix
  run: async (client, message, args, user, text, prefix) => {
    message.reply(
      new Discord.MessageEmbed()
          .setColor("#ff712e")
          .setFooter(client.user.username, config.AVATARURL) 
          .setAuthor(""+client.user.username + " | Support", config.AVATARURL, "https://su.musicium.eu")
          .setDescription("[\`Server\`](https://discord.gg/fS6qBSm)")
      )
    }
}
