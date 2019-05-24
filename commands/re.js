const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");


module.exports.run = async (bot, message, args) => {
    let ballembed = new Discord.RichEmbed()
    .setColor(colors.blue)
    .setAuthor(`${message.guild.name} Recommended Exploits`, message.guild.iconURL)
    .addField("Synapse:", "Stable and easy to use exploit. Only downside is the amount of time to get your whitelist key. Website: https://x.synapse.to/")
    .addField("Protosmasher:", "Protosmasher has a fast whitelist system and is really stable. One of the exploits on the market! Website: https://protosmasher.net/")
    .addField("Sentinel:", "Sentinel is made by the creators of Hexus and Vashta. It's pretty good overall but it can break if you don't have a good pc. Website: Unavailable")
    .addField ("Yoink:", "Yoink is made by Immortal Donkey and it is by far the most advanced free roblox exploit. Recommended 10/10. Website: https://immortaldonkeyhacks.weebly.com/free-lua-executor.html")
    .addField("Date:", message.createdAt.toLocaleString())

    message.channel.send(ballembed);
}

module.exports.config = {
    name: "exploits",
    description: "Shows a lists of recommended exploits",
    usage: ";exploits",
    accessableby: "Members",
    aliases: []
}