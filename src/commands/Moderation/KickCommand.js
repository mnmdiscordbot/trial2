const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require ('discord.js')

module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('kick', 'Moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("you\'re not an admin dummy");
    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send("I need kick permission!");

    let reason = args.slice(1).join(" ");
    const mentionedMember = message.mentions.members.first();

    if (!reason) reason = 'No reason given';
    if (!args[0]) return message.channel.send("Who am I kicking?");
    if (!mentionedMember) return message.channel.send("Who tf is that?");
    

    const banEmbed = new Discord.MessageEmbed()
      .setTitle(`You have been kicked from ${message.guild.name}`)
      .setDescription(`Reason for being kicked: ${reason}`)

    await mentionedMember.send(banEmbed).catch(err => console.log(err));
    await mentionedMember.kick({
      days: 0,
      reason: reason
    }).catch(err => console.log(err)).then(() => message.channel.send("Successfully kicked the idiot."));

  }
}