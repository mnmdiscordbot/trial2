const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const ms = require('ms');

module.exports = class TempmuteCommand extends BaseCommand {
  constructor() {
    super('mute', 'Moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("MUTE_MEMEBRS")) return message.reply('you\'re not an admin dummy');
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('I need manage roles permission!');

    const muteRole = message.guild.roles.cache.get('818309528704909334');
    const memberRole = message.guild.roles.cache.get('804246418167693363');
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    let time = args[1];
    let reason = args.slice(2).join(" ");
    const tempmuteEmbed = new Discord.MessageEmbed()
      .setTitle(`${mentionedMember.user.tag} has been muted for:`)
      .setColor("#FF0000")
      .addField(`${reason}`, `Duration: ${time}`)
      .setTimestamp();

    if (args[1]) message.channel.send(tempmuteEmbed);

    if (!args[0]) return message.reply('who am I muting?');
    if (!mentionedMember) return message.reply('That user isn\'t in the server.');
    if (!mentionedMember.roles.highest.position >= message.member.roles.highest.position) return message.reply('I can\'t mute this member... check roles.')
    if (!time) return message.reply('for how long?');
    if (!reason) reason = 'No reason given';

    await mentionedMember.roles.add(muteRole).catch(err => console.log(err));
    await mentionedMember.roles.remove(memberRole.id).catch(err => console.log(err));
    await mentionedMember.send(tempmuteEmbed).catch(err => console.log(err));
    

    setTimeout(async function () {
      await mentionedMember.roles.add(memberRole.id).catch(err => console.log(err));
      await mentionedMember.roles.remove(muteRole.id).catch(err => console.log(err));
      await mentionedMember.send('Your mute has been lifted. Don\'t let it happen again.').catch(err => console.log(err))
    }, ms(time))
  }
}