const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");


module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.channel.send("Error. You don't have a valid role!")

    let whitelistMember = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!whitelistMember) return message.channel.send("Please provide a user to whitelist.")

    let robloxID = args.slice(1).join(" ")
    if(!robloxID) return message.channel.send("Error. Invalid Syntax. Please enter your roblox ID!")

    let whitelistKey = ["39035235-325DD", "QWEASDFW_DDD94##", "OOOFS)()AAQQ", "LOKPOLO_OLOP", "EQERTY-90#@#"];
    let result = Math.floor((Math.random() * whitelistKey.length));

    let whitelistRole = message.guild.roles.find(wh => wh.name === "Whitelisted")

    if(!message.guild.me.hasPermission(["ADMINISTRATOR"])) return message.channel.send("I don't have permission to use this command.")

    message.channel.send(`***${whitelistMember.user.tag} was successfully whitelisted!***`).then(m => m.delete(5000))

    whitelistMember.addRole(whitelistRole.id)

    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor(colors.pinkred)
    .addField("Thank you for using Rexic! Here is your key:", whitelistKey[result])
    .addField("Please check over your roblox ID: ", robloxID)
    .addField("We are not responsible for anything you do, and please do not leak!", "We're serious!")

    whitelistMember.send(ballembed)
}

module.exports.config = {
    name: "whitelist",
    description: "Whitelists a member in the Discord!",
    usage: ";whitelist <@user>",
    accessableby: "Administrators",
    aliases: []
}