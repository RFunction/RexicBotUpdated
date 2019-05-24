const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");


module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission(["KICK_MEMBERS"])) return message.channel.send("You don't have permission to use this command.")

    let kickMember = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!kickMember) return message.channel.send("Please provide a user to kick.")

    let reason = args.slice(1).join(" ")
    if(!reason) reason = "No reason given."

    if(!message.guild.me.hasPermission(["ADMINISTRATOR" || "BAN_MEMBERS"])) return message.channel.send("I don't have permission to use this command.")

    kickMember.send(`Hello, you have been kicked from ${message.guild.name} for: ${reason}.`).then(() => 
    kickMember.kick()).catch(err => console.log(err))

    message.channel.send(`***${kickMember.user.tag} was successfully kicked.***`).then(m => m.delete(5000))

    let embed = new Discord.RichEmbed()
    .setColor(colors.blue)
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Moderation:", "Kick")
    .addField("Kicked Member:", kickMember.user.username)
    .addField("Moderator:", message.author.username)
    .addField ("Reason:", reason)
    .addField("Date:", message.createdAt.toLocaleString())
    
        let sChannel = message.guild.channels.find(c => c.name === "bot")
        sChannel.send(embed)
}

module.exports.config = {
    name: "kick",
    description: "Kick a member in the Discord!",
    usage: ";kick  <@user> <reason>",
    accessableby: "Administrators",
    aliases: []
}