const {MessageEmbed} =require("discord.js")
const config = require("../../config.json")
module.exports = {
	name: "embed",
	category: "admin",
  aliases: [""],
  description: "Resends the message as an embed",
  useage: "embed <Title> + <Description>",
  run: async (client, message, args) => {
	if (!message.member.hasPermission("ADMINISTRATOR"))
	return message.reply(`You are not allowed to run this command`)
	const argsneu = message.content.slice(5+config.PREFIX.length).split("+");
	if(!argsneu) return message.reply("Useage: `embed <Title> + <Description>`");
	const TITEL = argsneu[0];
	const BESCHREIBUNG = argsneu.slice(1).join(" ");
	const embed = new MessageEmbed()
	.setColor("#ff712e").setFooter(client.user.username, config.AVATARURL)
	.setTimestamp()
	.setTitle(TITEL)
	.setDescription(BESCHREIBUNG)
	message.channel.send(embed).catch(error => console.log(error));
}
}