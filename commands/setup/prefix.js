//Here the command starts
const config = require("../../config.json");
const Discord = require("discord.js")
module.exports = {
   //definition
	name: "prefix", //the name of the command 
	category: "setup", //the category this will be listed at, for the help cmd
	aliases: [""], //every parameter can be an alias
	cooldown: 2, //this will set it to a 2 second cooldown
	usage: "prefix <NewPrefix>", //this is for the help command for EACH cmd
  	description: "Changes the Server wide Prefix", //the description of the command

	//running the command with the parameters: client, message, args, user, text, prefix
  run: async (client, message, args, user, text, prefix) => {
    if (!args[0]) return message.reply(`Current Prefix: \`${prefix}\` \nPlease provide a new prefix`)
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`❌ You don\'t have permission for this Command!`)
        if (args[1]) return message.reply('❌ The prefix can\'t have two spaces')
        if(args.join(" ").length > 4) return message.reply("Thats too long! Maximum lenght is 4");
        client.settings.set(message.guild.id, args[0], `prefix`);
        return message.reply(`✅ Successfully set new prefix to **\`${args[0]}\`**`)

    }
}
