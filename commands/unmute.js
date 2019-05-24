const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");


module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("You can't do that!")

    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("I don't have valid permissions to perform this action!")

    let muteM = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!muteM) return message.channel.send("Please enter a user to unmute!")

    let muterole = message.guild.roles.find(r => r.name === "Muted")
    if(!muterole) return message.channel.send("There isn't a role to be removed!")

    muteM.removeRole(muterole.id).then(() => {
        muteM.send(`You have been unmuted in ${message.guild.name}`).catch(err => console.log(err))
        message.channel.send(`✅ ***${muteM.user.username} was successfully unmuted!***`)
    })

    let embed = new Discord.RichEmbed()
    .setColor(colors.blue)
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Moderation:", "Unmute")
    .addField("Unmuted Member:", muteM.user.username)
    .addField("Moderator:", message.author.username)
    .addField("Date:", message.createdAt.toLocaleString())
    
        let sChannel = message.guild.channels.find(c => c.name === "bot")
        sChannel.send(embed)
}

module.exports.config = {
    name: "unmute",
    description: "Mutes a member in the discord server!",
    usage: ";unmute <@user>",
    accessableby: "Administrators",
    aliases: []
}