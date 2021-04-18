const { MessageManager } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SayCommand extends BaseCommand {
  constructor() {
    super('say', 'fun', []);
  }

  run(client, message, args) {
    const sayMessage = args.join(" ");
    message.delete().catch(err => console.log(err));
    message.channel.send(sayMessage);
  }
}