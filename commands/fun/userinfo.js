    const Discord = require("discord.js")
    const config = require("../../config.json")
    module.exports = {
    name: "userinfo",
	aliases: ["uinfo"],
    category: "fun",
    description: "Get information about a user",
    usage: "userinfo [@USER]",
    run: async (client, message, args) => {
    
{
    const user = message.mentions.users.first() || message.author;
    if(!user)
        return message.reply('Please mention the user who you want info about.');
    
    var playing = ("[ " + user.presence.activities + " ]")
    
    const who = new Discord.MessageEmbed()
          .setTitle("User Info:")
          .addField("Full Username", `\`${user.tag}\``)
          .addField("ID", "\`"+user.id+"\`")
          .addField("Playing","\`"+playing+"\`", true)
          .addField("Status", `\`${user.presence.status}\``, true)
          .addField("Joined Discord At", "\`"+user.createdAt+"\`")
          .setColor("#ff712e").setFooter(client.user.username+ " | Bittmax.de | Code: x10 == 5%", config.AVATARURL)
          .setThumbnail(user.displayAvatarURL({dynamic: true}))  
      message.channel.send(who)
    };
    }    
    };