//Here the command starts
const config = require("../../config.json");
const Discord = require("discord.js")
module.exports = {
   //definition
	name: "rolesetup", //the name of the command 
	category: "setup", //the category this will be listed at, for the help cmd
	aliases: [""], //every parameter can be an alias
	cooldown: 2, //this will set it to a 2 second cooldown
	usage: "rolesetup <@Role>", //this is for the help command for EACH cmd
  	description: "Adds an administrator Role", //the description of the command

	//running the command with the parameters: client, message, args, user, text, prefix
  run: async (client, message, args, user, text, prefix) => {
       
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("NOT ENOUGH PERMISSIONS!");

    let role  = message.mentions.roles.first();
    try{
      message.guild.roles.cache.get(role.id);
    }catch{
      return message.reply("This role doesn't seem to exist!")      
    }
    if(!role) return message.reply("This role doesn't seem to exist!")          

    message.reply( 
        new Discord.MessageEmbed()
            .setTitle("<:suggest:778599541812363276> Admin Role for Suggestions!")
            .setColor("#ff712e")
            .setDescription(`Admin Role added: \`${role.name}\` <@&${role.id}>`)
            .setFooter(client.user.username, config.AVATARURL)  
        )
        client.settings.set(message.guild.id, role.id, `role`);
return; 
    }
}
