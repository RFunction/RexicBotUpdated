const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");


module.exports.run = async (bot, message, args) => {
    let umbed = new Discord.RichEmbed()
    .setColor(colors.pinkred)
    .setTitle("User Info")
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.author.username} Info`, message.author.displayAvatarURL)
    .addField("**Username:**", `${message.author.username}`, true)
    .addField("**Discriminator:**", `${message.author.discriminator}`, true)
    .addField("**ID:**", `${message.author.id}`, true)
    .addField("**Status:**", `${message.author.presence.status}`, true)
    .addField("**Date Created:**", `${message.author.createdAt}`, true)
    .setFooter(`Aserus | Footer`, bot.user.displayAvatarURL);
    message.channel.send({embed: umbed});
}


module.exports.config = {
    name: "userinfo",
    aliases: ["ui", "userdesc"]
}