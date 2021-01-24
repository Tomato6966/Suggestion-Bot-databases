//Here the command starts
const Discord = require("discord.js")
module.exports = {
   //definition
	name: "info", //the name of the command 
	category: "info", //the category this will be listed at, for the help cmd
	aliases: [""], //every parameter can be an alias
	cooldown: 2, //this will set it to a 2 second cooldown
	usage: "info", //this is for the help command for EACH cmd
  	description: "Gives you information of the Bot", //the description of the command

	//running the command with the parameters: client, message, args, user, text, prefix
  run: async (client, message, args, user, text, prefix) => {
    let totalMembers = client.guilds.cache.reduce((c, g) => c + g.memberCount, 0);
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
    const embed = new Discord.MessageEmbed()
      .setAuthor(
        `Information about the ${client.user.username} Bot`,
        client.user.displayAvatarURL(), "https://su.musicium.eu"
      )
      .setColor("#ff712e")
      .addFields(
        {
          name: 'Bot tag',
          value: `**\`${client.user.tag}\`**`,
        },
        {
          name: 'Version',
          value: `**\`3.0.0\`**`,
        },
        {
          name: "Command prefix",
          value: `**\`${prefix}\`**`,
        },
        {
          name: 'Time since last restart',
          value: `**\`${process.uptime().toFixed(2)}s\`**`,
        },
        {
          name: 'Uptime',
          value: `**\`${days}d\` \`${hours}h\` \`${minutes}m\` \`${seconds}s\`**`,
        },
        {
          name: 'Server count',
          value: `**\`${client.guilds.cache.size}\`**`,
        },
        {
          name: 'Total members',
          value: `**\`${totalMembers}\`**`,
        }
      ) 
      .addField("***BOT BY:***",`
      >>> <@442355791412854784> \`Tomato#6966\`[\`Website\`](https://x10-gaming.eu)
      `)
      .addField("***SUPPORT:***",`
      >>> [\`Server\`](https://discord.gg/fS6qBSm) | [\`Musicium - Website\`](https://musicium.eu) | [\`Invite\`](https://su.musicium.eu/)
      `)

    
    return message.channel.send(embed); 
    }
}
