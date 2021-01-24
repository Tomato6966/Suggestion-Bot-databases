const Discord = require("discord.js");
const config = require("../../config.json")
module.exports = {
    name: "slowmode",
    category: "admin",
    description: "Sets a SLOWMODE for this server",
    usage: "[COMMAND] + [USER]",
    run: async (client, message, args) => {

        if (!message.member.hasPermission("ADMINISTRATOR"))
        return message.reply(`You are not allowed to run this command`)
        
        if (!isNaN(args[0]) || parseInt(args[0]) < 0) {
            let embed = new Discord.MessageEmbed()
            .setColor("#ff712e").setFooter(client.user.username, config.AVATARURL)
                .setDescription(`✅ Slowmode successfully set to ${args[0]}!`)
            message.reply(embed)
            message.channel.setRateLimitPerUser(args[0])
        } else {
            let embed2 = new Discord.MessageEmbed()
            .setColor("#ff712e").setFooter(client.user.username, config.AVATARURL)
                .setDescription(`Thats not an number!`)
            message.reply(embed2)
        }

    }
}
