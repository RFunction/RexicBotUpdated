const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");


module.exports.run = async (bot, message, args) => {
    let greplies = ["is 0% gay", "is 10% gay", "is 20% gay", "is 30% gay", "is 40% gay", "is 50% gay", "is 60% gay", "is 70% gay", "is 80% gay", "is 90% gay", "is 100% gay", "is 17% gay", "is 13% gay", "is 3% gay", "is 7% gay", "is 23% gay", "is 27% gay", "is 43% gay", "is 37% gay", "is 97% gay"];

    let gmember = message.mentions.members.first() || message.guild.members.get(args[0])

    let gresult = Math.floor((Math.random() * greplies.length));

    let ballembed = new Discord.RichEmbed()
    .setAuthor("Rexic Bot")
    .setColor(colors.red)
    .setDescription(`${gmember} ${greplies[gresult]}`)
    .setFooter(`ID - ${message.author.id} • ${message.author.username}`);
    message.channel.send(ballembed)
}

module.exports.config = {
    name: "gay",
    description: "Are you gay?",
    usage: ";gay",
    accessableby: "Members",
    aliases: []
}