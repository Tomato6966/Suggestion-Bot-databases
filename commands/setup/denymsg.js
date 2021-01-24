//Here the command starts
const config = require("../../config.json");
const Discord = require("discord.js")
module.exports = {
   //definition
	name: "denymsg", //the name of the command 
	category: "setup", //the category this will be listed at, for the help cmd
	aliases: [""], //every parameter can be an alias
	cooldown: 2, //this will set it to a 2 second cooldown
	usage: "denymsg <text>", //this is for the help command for EACH cmd
  	description: "Changes the denymsg of this Server", //the description of the command

	//running the command with the parameters: client, message, args, user, text, prefix
  run: async (client, message, args, user, text, prefix) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("NOT ENOUGH PERMISSIONS!");    
     let txt = args.join(" ");
    if (!txt) return message.channel.send(new Discord.MessageEmbed()
      .setTitle("❌ Please add an Text!")
      .setColor("RED")
      .setDescription("CURRENT TEXT: \n"+client.settings.get(message.guild.id, "denymsg"))
      .setFooter(client.user.username, config.AVATARURL)  
      .setTimestamp());

    message.reply( 
        new Discord.MessageEmbed()
            .setTitle("<:suggest:778599541812363276> denymsg for Suggestions!")
            .setColor("#ff712e")
            .setDescription(`Deny msg changed to:  ${txt}`)
            .setFooter(client.user.username + " Bot by: Tomato#6966", config.AVATARURL)  
        )
        client.settings.set(message.guild.id, txt, `denymsg`);
return; 
    }
}
