const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");


module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.channel.send("You don't have permission to use this command.")

    let fMember = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!fMember) return message.channel.send("Please provide a user to fuck.")


    if(!message.guild.me.hasPermission(["ADMINISTRATOR"])) return message.channel.send("I don't have permission to use this command.")

    message.channel.send(`***${fMember.user.tag} was fucked.***`)

    let embed = new Discord.RichEmbed()
    .setColor(colors.red)
    .setAuthor(`${message.guild.name} Fucked`, message.guild.iconURL)
    .addField("Who:", `${fMember}`)
    .addField("Reaction:", `${fMember} suffered PTSD after he was fucked.`)
    .addField("Why:", "was his father")

    message.channel.send(embed)
}

module.exports.config = {
    name: "fuck",
    description: "Fucks a member in the Discord!",
    usage: ";fuck <@user>",
    accessableby: "Administrators",
    aliases: []
}