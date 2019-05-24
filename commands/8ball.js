const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");


module.exports.run = async (bot, message, args) => {
    if(!args[2]) return message.reply("Seriously? Give me a full question!");
    let replies = ["Yes", "No", "Likely", "Unlikely", "Ask again later"];

    let result = Math.floor((Math.random() * replies.length));

    let ballembed = new Discord.RichEmbed()
    .setAuthor("Rexic Bot")
    .setColor(colors.orange)
    .setDescription(`${replies[result]}, ${message.author.username}`)
    .setFooter(`ID - ${message.author.id} • ${message.createdAt.toLocaleString()}`);
    message.channel.send(ballembed)
}

module.exports.config = {
    name: "8ball",
    description: "Very magical ball!",
    usage: ";8ball <question>",
    accessableby: "Members",
    aliases: []
}