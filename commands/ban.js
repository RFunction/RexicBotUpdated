const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");


module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission(["BAN_MEMBERS"])) return message.channel.send("You don't have permission to use this command.")

    let banMember = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!banMember) return message.channel.send("Please provide a user to ban.")

    let reason = args.slice(1).join(" ")
    if(!reason) reason = "No reason given."

    if(!message.guild.me.hasPermission(["BAN_MEMBERS"])) return message.channel.send("I don't have permission to use this command.")

    banMember.send(`Hello, you have been banned from ${message.guild.name} for: ${reason}.`).then(() => 
    banMember.ban()).catch(err => console.log(err))

    message.channel.send(`***${banMember.user.tag} was successfully banned.***`).then(m => m.delete(5000))

    let embed = new Discord.RichEmbed()
    .setColor(colors.pinkred)
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Moderation:", "Ban")
    .addField("Banned Member:", banMember.user.username)
    .addField("Moderator:", message.author.username)
    .addField ("Reason:", reason)
    .addField("Date:", message.createdAt.toLocaleString())
    
        let sChannel = message.guild.channels.find(c => c.name === "bot")
        sChannel.send(embed)
}

module.exports.config = {
    name: "ban",
    description: "Ban a member in the Discord!",
    usage: ";ban <@user> <reason>",
    accessableby: "Administrators",
    aliases: []
}