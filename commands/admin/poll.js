const Discord = require("discord.js");
const config = require("../../config.json")
module.exports = {
    name: "poll",
    category: "admin",
    description: "Creates a poll",
    usage: "poll <POLLTEXT>",
    run: async (client, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR"))
        return message.reply(`You are not allowed to run this command`)
         if (!args[0]) return message.reply('Enter a question for the poll!');
        //trime slice join
        let msg = args.join(' ');
        //poll embed
        let embed = new Discord.MessageEmbed()
        .setColor("#ff712e").setFooter(client.user.username, config.AVATARURL).setAuthor(`📋 ${message.guild.name}`)
        .addField("\u200b", msg)
         .setFooter(`From: ${message.author.username}`, message.member.user.displayAvatarURL({ dynamic: true }));
        //temp message
        let tempmsg = await message.channel.send(new Discord.MessageEmbed()
        .setColor("#ff712e")
        .setFooter(client.user.username, config.AVATARURL));
        //Command löschen
        await message.delete();
        //mit yes reagieren
        await tempmsg.react("✅");
        //mit no reagieren
        await tempmsg.react("❌");
        //Poll erstellen
        await tempmsg.edit(embed);
    }
}
