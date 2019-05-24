const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");


module.exports.run = async (bot, message, args) => {
    let smbed = new Discord.RichEmbed()
    .setColor(colors.red)
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.guild.name} Commands`, message.guild.iconURL)
    .addField("**Guild Name:**", `${message.guild.name}`, true)
    .addField("**Guild Owner:**", `${message.guild.owner}`, true)
    .addField(";serverinfo", "Shows server info")
    .addField(";userinfo", "Shows user info")
    .addField(";kick", "Kicks a user")
    .addField(";ban", "Bans a user")
    .addField(";warn", "Warns a user")
    .addField(";mute", "Mutes a user")
    .addField(";unmute", "Unmutes a user")
    .addField(";8ball", "Ask things, it's magical")
    .addField(";pp", "Is it small?")
    .addField(";gay", "Are they gay?")
    .addField(";exploits", "Recommended Exploits")
    .setFooter(`Aserus | Commands`, bot.user.displayAvatarURL);
    message.channel.send({embed: smbed});
}


module.exports.config = {
    name: "help",
    aliases: []
}