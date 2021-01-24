
const config = require("../../config.json")
module.exports = {
	name: "react",
	category: "admin",
	aliases: ["delete"],
  description: "Closes the ticket",
  useage: "react <msgid> <Emoji>",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply(`You are not allowed to run this command`)
      try{
        if(!args[0]) return message.reply("Please enter the ID of the message! Useage: `react <msgid> <Emoji>`")
        if(!args[1]) return message.reply("Please enter the EMOJI for the reaction! Useage: `react <msgid> <Emoji>`")
        message.channel.messages.fetch(args[0]).then(msg=>msg.react(args[1]));
      }catch{
      }    
	}
}