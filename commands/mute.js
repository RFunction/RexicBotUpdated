const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");


module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("You don't have permission to use this command.")

    let mMember = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!mMember) return message.channel.send("Please provide a user to mute.")

    let mRole = message.guild.roles.find(r => r.name === "Muted")

    if(!message.guild.me.hasPermission(["ADMINISTRATOR"])) return message.channel.send("I don't have permission to use this command.")

    message.channel.send(`***${mMember.user.tag} was successfully muted!***`)

    mMember.addRole(mRole.id)

    mMember.send(`You have been muted in: ${message.guild.name}`)
}

module.exports.config = {
    name: "mute",
    description: "Mutes a member in the Discord!",
    usage: ";mute <@user>",
    accessableby: "Administrators",
    aliases: []
}