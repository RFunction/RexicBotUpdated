const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");


module.exports.run = async (bot, message, args) => {
    let replies = ["Very small PP", "Small PP", "Average PP", "Big PP", "Very big PP"];

    let result = Math.floor((Math.random() * replies.length));

    let ballembed = new Discord.RichEmbed()
    .setAuthor("Rexic Bot")
    .setColor(colors.blue)
    .setDescription(replies[result])
    .setFooter(`ID - ${message.author.id} • ${message.author.username}`);
    message.channel.send(ballembed)
}

module.exports.config = {
    name: "pp",
    description: "Your size",
    usage: ";pp",
    accessableby: "Members",
    aliases: []
}