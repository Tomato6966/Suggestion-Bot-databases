//Here the command starts
const config = require("../../config.json");
const Discord = require("discord.js")
module.exports = {
   //definition
	name: "setup", //the name of the command 
	category: "setup", //the category this will be listed at, for the help cmd
	aliases: [""], //every parameter can be an alias
	cooldown: 2, //this will set it to a 2 second cooldown
	usage: "setup", //this is for the help command for EACH cmd
  	description: "Setups the channel setup of the current channel", //the description of the command

	//running the command with the parameters: client, message, args, user, text, prefix
  run: async (client, message, args, user, text, prefix) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("NOT ENOUGH PERMISSIONS!");

            let  channel  = message.channel;
            if(!channel) return message.reply("This channel doesn't seem to exist!")          

            message.reply( 
                new Discord.MessageEmbed()
                    .setTitle("<:suggest:778599541812363276> Setup Complete for Suggestions!")
                    .setColor("#ff712e")
                    .setDescription(`Bound to Channel: \`${channel.name}\``)
                    .setFooter(client.user.username, config.AVATARURL)  
                )
                
                client.settings.set(message.guild.id, channel.id, `channel`);
                client.settings.set(message.guild.id, message.guild.id, `guild`);
    }
}
