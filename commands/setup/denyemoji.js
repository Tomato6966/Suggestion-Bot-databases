//Here the command starts
const config = require("../../config.json");
const Discord = require("discord.js")
module.exports = {
   //definition
	name: "denyemoji", //the name of the command 
	category: "setup", //the category this will be listed at, for the help cmd
	aliases: [""], //every parameter can be an alias
	cooldown: 2, //this will set it to a 2 second cooldown
	usage: "denyemoji <Emoji>", //this is for the help command for EACH cmd
  	description: "Changes the denyemoji of this Server", //the description of the command

	//running the command with the parameters: client, message, args, user, text, prefix
  run: async (client, message, args, user, text, prefix) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("NOT ENOUGH PERMISSIONS!");    
    let emoji = args[0];
    if (!emoji) return message.channel.send(new Discord.MessageEmbed()
      .setTitle("❌ Please add an emoji!")
      .setColor("RED")
      .setFooter(client.user.username, config.AVATARURL)  
      .setTimestamp());
    if(emoji.length == 18) emoji = message.guild.emojis.cache.get(args[0]);
    else{
      console.log(emoji)
    }
    message.reply( 
        new Discord.MessageEmbed()
            .setTitle("<:suggest:778599541812363276> Deny Emoji for Suggestions!")
            .setColor("#ff712e")
            .setDescription(`Deny emoji added: ${emoji}`)
            .setFooter(client.user.username + " Bot by: Tomato#6966", config.AVATARURL)  
        )
        client.settings.set(message.guild.id, emoji, `denyemoji`);
return; 
    }
}
