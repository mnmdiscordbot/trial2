const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class NukeCommand extends BaseCommand {
  constructor() {
    super('nuke', 'Moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('You\'re not an admin dummy');
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send('I need manage channels permissions!');
    
    let reason = args.join(" ");
    const nukeChannel = message.channel;
    if (!reason) reason = 'No reason given';
    if (!nukeChannel.deletable) return message.channel.send('This channel is not deletable.');

    await nukeChannel.clone().catch(err => console.log(err));
    await nukeChannel.delete(reason).catch(err => console.log(err));

  }
}