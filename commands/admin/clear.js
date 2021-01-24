const Discord = require("discord.js");
const config = require("../../config.json")
module.exports = {
    name: "purge",
    aliases: ["clear"],
    category: "admin",
    description: "Deletes messages in a text channel or specified number of messages in a text channel.",
    usage: "purge + <Amount of messages>",
    run: async (client, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR"))
        return message.reply(`You are not allowed to run this command`)
        let clearamount = Number(args[0]);
        if(!args[0]) return message.reply("Please add the amount of messages you want to remove");

        if(clearamount >= 1 && clearamount<= 100){
            message.channel.bulkDelete(clearamount);
            let embed = new Discord.MessageEmbed()
            .setColor("#ff712e").setFooter(client.user.username, config.AVATARURL)
            .setDescription(`✅ ${clearamount} messages successfully deleted!`)
            message.reply(embed).then(msg => msg.delete({ timeout: 5000 }));
        }
        else{
            message.reply("The value must be between `1` and `100`!");
        }
        
    }
}
