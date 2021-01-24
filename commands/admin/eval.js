const Discord = require("discord.js");
const { inspect } = require('util');
module.exports = {
    name: "eval",
    category: "admin",
    description: "evaling stuff",
    usage: "eval <CMD>",
    run: async (client, message, args) => {
        //Allowed user:
        if (message.author.id !== '442355791412854784')
        return message.reply(`You are not allowed to run this command, only Tomato#6966`)
        let evaled;

        try {
            if(args.join(' ').includes("token")) return console.log("ERROR NO TOKEN GRABBING ;)");
            evaled = await eval(args.join(' '));
            if(evaled.toString().includes(client.token)) return console.log("ERROR NO TOKEN GRABBING ;)"); //just to be 100% sure
            return message.channel.send("\`\`\`" + inspect(evaled) + "\`\`\`");
        }
        catch (error) {
            console.error(error);
            return message.reply('there was an error during evaluation.');
        }
    }
}
