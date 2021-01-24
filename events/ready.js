//here the event starts
const config = require("../config.json")
module.exports = client => {
    console.log(`Discord Bot  /--/ ${client.user.tag} /--/  is online!`); //log when ready aka the bot usable
    
    console.log(` :: Bot has started as : ${client.user.tag}`);
    client.user.setPresence({status: "online"}); //change to online
    var i = 0;
    setInterval(() => {
        i+=1;
        if(i === 1) client.user.setActivity(`${config.PREFIX}help | su.musicium.eu`, { type: "PLAYING" });
        if(i === 2) client.user.setActivity(`Suggestions`, { type: "PLAYING" });
        if(i > 3) { i = 0; client.user.setActivity(`${client.guilds.cache.reduce((c, g) => c + g.memberCount, 0)} Users`, { type: "PLAYING" });}
       
    }, 7500); //7.5 second delay  
}