const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");


module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.channel.send("You don't have permission to use this command.")

    let blacklistMember = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!blacklistMember) return message.channel.send("Please provide a user to blacklist.")

    let blacklistRole = message.guild.roles.find(r => r.name === "Blacklisted")

    if(!message.guild.me.hasPermission(["ADMINISTRATOR"])) return message.channel.send("I don't have permission to use this command.")

    message.channel.send(`***${blacklistMember.user.tag} was successfully blacklisted!***`)

    blacklistMember.addRole(blacklistRole.id)

    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor(colors.red)
    .addField("Info:", "We have recently suspended your key due to recent suspicious activity. If this is false pleas message the owner.")

    blacklistMember.send(ballembed)
}

module.exports.config = {
    name: "blacklist",
    description: "Blacklists a member in the Discord!",
    usage: ";blacklist <@user>",
    accessableby: "Administrators",
    aliases: []
}