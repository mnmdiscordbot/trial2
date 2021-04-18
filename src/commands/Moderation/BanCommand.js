const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super('ban', 'Moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("you\'re not an admin dummy");
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("I need ban permission!");

    let reason = args.slice(1).join(" ");
    const mentionedMember = message.mentions.members.first();

    if (!reason) reason = 'No reason given';
    if (!args[0]) return message.channel.send("Who am I banning?");
    if (!mentionedMember) return message.channel.send("Who tf is that?");
    if (!mentionedMember.bannable) return message.channel.send('You can\'t ban them lmao');

    const banEmbed = new Discord.MessageEmbed()
      .setTitle(`You have been banned from ${message.guild.name}`)
      .setDescription(`Reason for being banned: ${reason}`)

    await mentionedMember.send(banEmbed).catch(err => console.log(err));
    await mentionedMember.ban({
      days: 0,
      reason: reason
    }).catch(err => console.log(err)).then(() => message.channel.send("Successfully banned the idiot."));
 
  }
}