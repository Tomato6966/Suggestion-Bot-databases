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
	let prefix = client.settings.get(message.guild.id, `prefix`);
	const argsneu = message.content.slice(5 + prefix.length).split("+");
	if(!argsneu || !args[0]) {
		message.channel.send(new MessageEmbed()
		.setColor("#ff712e").setFooter(client.user.username, config.AVATARURL)
		.setTimestamp()
		.setTitle("THIS IS THE `TITLE`")
		.setDescription("THIS IS THE `DESCRIPTION`"))
		return message.reply("Useage: `embed <Title> + <Description>`");
	}
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
