const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");


module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.channel.send("You don't have permission to use this command.")

    let warnMember = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!warnMember) return message.channel.send("Please provide a user to warn.")

    let reason = args.slice(1).join(" ")
    if(!reason) reason = "No reason given."

    if(!message.guild.me.hasPermission(["ADMINISTRATOR"])) return message.channel.send("I don't have permission to use this command.")

    warnMember.send(`Hello, you have been warned for: ${reason}.`).then(() => 
    warnMember()).catch(err => console.log(err))

    message.channel.send(`***${warnMember.user.tag} was successfully warned.***`).then(m => m.delete(5000))

    let embed = new Discord.RichEmbed()
    .setColor(colors.red)
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Moderation:", "Warned")
    .addField("Warned Member:", warnMember.user.username)
    .addField("Moderator:", message.author.username)
    .addField ("Reason:", reason)
    .addField("Date:", message.createdAt.toLocaleString())
    
        let sChannel = message.guild.channels.find(c => c.name === "bot")
        sChannel.send(embed)
}

module.exports.config = {
    name: "warn",
    description: "Warns a member in the Discord!",
    usage: ";warn <@user> <reason>",
    accessableby: "Administrators",
    aliases: []
}