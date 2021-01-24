const Discord = require("discord.js");
const config = require("../../config.json")
module.exports = {
    name: "suggest",
    aliases: ["feedback"],
    category: "admin",
    description: "Approves, denies or maybies a suggestion",
    usage: "suggest <suggest_id> <approve / deny / maybe>",
    run: async (client, message, args) => {
       //FROM THE MODULE
    }
}
