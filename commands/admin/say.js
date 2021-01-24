//Here the command starts
const config = require("../../config.json")
module.exports = {
	//definition
	name: "say", //the name of the command 
	category: "admin", //the category this will be listed at, for the help cmd
	aliases: ["say", "sayit"], //every parameter can be an alias
	cooldown: 4, //this will set it to a 4 second cooldown
	usage: "say <Text>", //this is for the help command for EACH cmd
  	description: "Resends the message", //the description of the command

	//running the command with the parameters: client, message, args, user, text, prefix
  run: async (client, message, args, user, text, prefix) => {
	if (!message.member.hasPermission("ADMINISTRATOR"))
	return message.reply(`You are not allowed to run this command`)
	if(!args) return message.reply("Please add text you want to say")
		//EVERTHING in HERE CAN BE A PART OF THE COMMAND	
		message.channel.send(text) //you could also do:  message.channel.send(args.join(" "))
		//another example: message.channel.send(user + "send the message: " + text)
	}
}