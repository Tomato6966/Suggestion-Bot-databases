const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../config.json");

//Here the command starts
module.exports = {
    //definition
     name: "help", //the name of the command 
     category: "info", //the category this will be listed at, for the help cmd
     aliases: ["h", "commandinfo"], //every parameter can be an alias or empty for no aliases
     cooldown: 5, //this will set it to a 5 second cooldown
     usage: "help [Command]", //this is for the help command for EACH cmd
     description: "Returns all Commmands, or one specific command", //the description of the command
 
     //running the command with the parameters: client, message, args, user, text, prefix
   run: async (client, message, args, user, text, prefix) => {
        if(args[0]){ //if there are arguments then get the command help
            return getCMD(client,message,args[0]);
        }
        else{ //if not get all commands
            return getAll(client, message);
        }

        //function for getting all commands
        function getAll(client,message){
        const embed = new MessageEmbed() //defining the Embed
            .setColor("#ff712e")
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle("HELP MENU")
        .addField("***Tutorial:***",`
        >>> [\`Click here\`](https://youtu.be/KQXUEJgV5s0)
        `)
        .addField("***BOT BY:***",`
        >>> <@442355791412854784> \`Tomato#6966\` [\`Website\`](https://avatix.eu/tomato/index.html)
        `)
        .addField("***SUPPORT:***",`
        >>> [\`Server\`](https://discord.gg/fS6qBSm) | [\`Musicium - Website\`](https://musicium.eu) | [\`Invite\`](https://su.musicium.eu)
        `)
            .setFooter(`To see command descriptions and inforamtion, type: ${config.prefix}help [CMD NAME]`, client.user.displayAvatarURL())
            const commands = (category) => { //finding all commands and listing them into a string with filter and map
                return client.commands.filter(cmd => cmd.category === category)
                        .map(cmd => `\`${cmd.name}\``).join(", ")
            }
            //get the command infostring
            const info = client.categories.map(cat => stripIndents`**__${cat[0].toUpperCase() + cat.slice(1)}__**\n> ${commands(cat)}`)
            .reduce((string, category) => string + "\n" + category);
            //sending the embed with the description
            return message.channel.send(embed.setDescription(`<:suggest:778599541812363276>
            This is a Suggestion Bot. Simply do \`${prefix}setup\` while beeing in your wished Suggestion Text Channel, and the Bot will bound the setup to that channel.
            
            You want to resetup? Well then just do it again somewhere else.


            [\`CLICK HERE TO INVITE ${client.user.username}\`](https://su.musicium.eu)
            
            <:suggest:778599541812363276>`+info))
        }
        //function for all commands
        function getCMD(client,message,input){
            const embed = new MessageEmbed() //creating a new Embed

            const cmd = client.commands.get(input.toLowerCase()) || client.commands.get(client.aliases.get(input.toLowerCase())) //getting the command by name/alias
            if(!cmd){ //if no cmd found return info no infos!
                return message.channel.send(embed.setColor("#ff0000").setDescription(`No Information found for command **${input.toLowerCase()}**`));
            }
            if(cmd.name) embed.addField("**Command name**", `\`${cmd.name}\``)
            if(cmd.name) embed.setTitle(`Detailed Information about: \`${cmd.name}\``)
            if(cmd.description) embed.addField("**Description**", `\`${cmd.description}\``);

            if(cmd.aliases) embed.addField("**Aliases**", `\`${cmd.aliases.map(a => `${a}`).join("\`, \`")}\``)
            if(cmd.cooldown) embed.addField("**Cooldown**", `\`${cmd.cooldown} Seconds\``)
                else embed.addField("**Cooldown**", `\`1 Second\``)
            if(cmd.usage){
                embed.addField("**Usage**", `\`${config.prefix}${cmd.usage}\``);
                embed.setFooter("Syntax: <> = required, [] = optional"); 
            }
            if(cmd.useage){
                embed.addField("**Useage**", `\`${config.prefix}${cmd.useage}\``);
                embed.setFooter("Syntax: <> = required, [] = optional"); 
            }
            //send the new Embed
            return message.channel.send(embed.setColor("#ff712e"))
        }
    }
}