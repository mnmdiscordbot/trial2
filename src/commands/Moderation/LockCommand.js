const Discord = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class LockCommand extends BaseCommand {
  constructor() {
    super('lock', 'Moderation', []);
  }

async run(client, message, args) {
  const lockEmbed = new Discord.MessageEmbed()
    .setTitle('Channel locked.')
    .setColor('#FF0000')
    .addField("Imagine not being able to talk lmao...", "Act right, losers")
  
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('you\'re not an admin dummy');
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send('I need manage channels role.');

    const role = message.guild.roles.cache.get('804246418167693363');
    let lockChannel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
    if (!lockChannel) lockChannel = message.channel;

    await lockChannel.updateOverwrite(role, {
      SEND_MESSAGES: false
    }).catch(err => console.log(err));
    if (!args[0]) return message.channel.send(lockEmbed);
  }
}