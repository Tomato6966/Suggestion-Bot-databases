const { Client, Collection, MessageEmbed } = require(`discord.js`);
module.exports = (client) => {

  client.on('message', async (message) => {
    if (message.author.bot) return;
    if (!message.guild) return;
    if (message.partial) await message.fetch();
  
    //////////////////////////////////////////
    //////////////////////////////////////////
    /////////////FEEDBACK SYSTEM//////////////
    //////////////////////////////////////////
    //////////////////////////////////////////
    client.settings.ensure(message.guild.id, {
      prefix: ">>",
      channel: "",
      command: "feedback",
      approvemsg: "✅ Accepted Idea! Expect this soon.",
      denymsg: "❌ Thank you for the feedback, but we are not interested in this idea at this time.",
      maybemsg: "<:suggest:778599541812363276> We are thinking about this idea!",
      statustext: "<:suggest:778599541812363276> Waiting for Community Feedback, please vote!",
      footertext: "Want to suggest / Feedback something? Simply type in this channel!",
      approveemoji: "776018311259488276",
      denyemoji: "❌",
      role: "",
      });
    let PREFIX = client.settings.get(message.guild.id, "prefix");
    let approveemoji = client.settings.get(message.guild.id, "approveemoji");
    let denyemoji = client.settings.get(message.guild.id, "denyemoji");
    let approvetext = client.settings.get(message.guild.id, "approvemsg");
    let denytext = client.settings.get(message.guild.id, "denymsg");
    let maybetext = client.settings.get(message.guild.id, "maybemsg");
    let footertext = client.settings.get(message.guild.id, "footertext");
    let statustext = client.settings.get(message.guild.id, "statustext")
    let role; 
    try{
      role = message.guild.roles.cache.get(client.settings.get(message.guild.id, "role"))
    }catch{
      role = "null";
    }
    const feedbackchannel = client.settings.get(message.guild.id, "channel");
    if(!feedbackchannel) return;
    if (message.channel.id === feedbackchannel) {
      message.delete({ timeout: 500 });
      message.channel.send(
        new MessageEmbed()
          .setColor("YELLOW")
          .setAuthor(message.author.tag, message.member.user.displayAvatarURL({ dynamic: true }))
          .setDescription("\n" + message.content + "\n")
          .setFooter(footertext)
          .addField("Status", statustext)
      ).then(message => {
        message.react(approveemoji);
        message.react(denyemoji)
      })
    }
    if (message.content.startsWith(`${PREFIX}suggest`) || message.content.startsWith(`${PREFIX}${client.settings.get(message.guild.id, "command")}`)) {
      if(!role || role === "null") {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Not enough permissions")
      }
      else{
        if(!message.member.roles.cache.has(role.id) &&!message.member.hasPermission("ADMINISTRATOR")) {console.log("F");return message.reply("Not enough permissions")}
      }
      const args = message.content.split(" ");
      let reason = "No reason";
      if(!args) return message.reply("Useage: \`suggest <approve / deny / maybe> <suggest_id>\`")
      //wenn kein grund
      if (!args[1]) return message.reply("Please add a method:  `approve` / `deny` / `maybe`\nUseage: \`suggest <approve / deny / maybe> <suggest_id>\`");
      //wenn keine nachrichts id
      if (!args[2]) return message.reply("Please add a suggestions message id Example Command: `>>suggest approve 778600880403644426 Good idea!`\nUseage: \`suggest <approve / deny / maybe> <suggest_id>\`");
      //wenn kein grund dann nix
      if(args[2].length !== 18) return message.reply("It seems that the suggestion doesnt exist! An ID is 18 letters big.\nUseage: \`suggest <approve / deny / maybe> <suggest_id>\`");
      if(!args[3]) reason = "No reason";
      //wenn grund dann setze ihn
      else reason = args.slice(3).join(" ");
      //finde feedbackchannel
      const channel = message.guild.channels.cache.get(feedbackchannel)
      if (!channel) {
        return message.reply("It seems that the suggestions channel doesnt exists!");
      } 
      //finde die nachricht
      const targetMessage = await channel.messages.fetch(args[2], false, true)
      if (!targetMessage) {
        return message.reply("It seems that the suggestion doesnt exist!");
      }
      //altes embed
      const oldEmbed = targetMessage.embeds[0]
      if(!oldEmbed) return message.reply("NOT A EMBED, == NOT A SUGGESTION")
      //bekomme was er machen will
      let color;
      let statustext;

      switch(args[1]){
        case "approve":
          console.log("APPROVE")
          color = "GREEN";
          statustext = `${approvetext}\n\n**Reason:**\n ${reason}`;  
          await message.channel.send(
            new MessageEmbed()
              .setColor("GREEN")
              .setTitle(`**✅ | Suggestion got approved!**`)
              .setDescription(`${channel}`)
          );
          break;

        case "deny":
          console.log("deny")
          color = "RED";
          statustext = `${denytext}\n\n**Reason:**\n ${reason}`;  
          await message.channel.send(
            new MessageEmbed()
              .setColor("RED")
              .setTitle(`**✅ | Suggestion got declined!**`)
              .setDescription(`${channel}`)
          );
        break;

        case "maybe":
          console.log("maybe")
          color = "ORANGE";
          statustext = `${maybetext}\n\n**Reason:**\n ${reason}`;  
          await message.channel.send(
            new MessageEmbed()
              .setColor("#ff712e")
              .setTitle(`**✅ | Suggestion got "maybed"!**`)
              .setDescription(`${channel}`)
          );
          break;

        default:
          message.reply("Please add a method:  `approve` / `deny` / `maybe`");
        break;
      }
     
      const embed = new MessageEmbed()
          .setAuthor(oldEmbed.author.name, oldEmbed.author.iconURL)
          .setDescription(oldEmbed.description)
          .setColor(color)
          .setFooter('Want to suggest something? Simply type it in this channel')
        if (oldEmbed.fields.length === 2) {
          embed.addFields(oldEmbed.fields[0], {
            name: 'Status',
            value: statustext,
          })
        } else {
          embed.addFields({
            name: 'Status',
            value: statustext,
          })
        }
        targetMessage.edit(embed)
    }
  })
}
