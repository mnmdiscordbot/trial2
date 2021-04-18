const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class UnlockCommand extends BaseCommand {
  constructor() {
    super('unlock', 'Moderation', []);
  }

  async run(client, message, args) {
    const unlockEmbed = new Discord.MessageEmbed()
    .setTitle('Channel unlocked.')
    .setColor('LIGHT_PINK')
    .addField("Y'all can talk now", "Don't let it happen again.")
    
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('You\'re not an admin dummy');
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send('I need manage channels role.');

    const role = message.guild.roles.cache.get('804246418167693363');
    let lockChannel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
    if (!lockChannel) lockChannel = message.channel;

    await lockChannel.updateOverwrite(role, {
      SEND_MESSAGES: true
    }).catch(err => console.log(err));
    if (!args[0]) return message.channel.send(unlockEmbed);
  }
}