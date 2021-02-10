const Discord = require("discord.js");
const config = require("../../config.json")
module.exports = {
    name: "suggest",
    aliases: ["feedback"],
    category: "admin",
    description: "Approves, denies or maybies a suggestion",
    usage: "suggest <approve / deny / maybe> <suggest_id>",
    run: async (client, message, args) => {
       //FROM THE MODULE
    }
}
