const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class EightCommand extends BaseCommand {
  constructor() {
    super('toast', 'Fun', []);
  }

  async run (bot, message, args) {
    let replies = ["*die*", "*kys*", "*choke*", "*ur gay*", "*trip*", "*i hope your mask falls in the toilet*", "*stupid dummy*"];

    let result = Math.floor(Math.random() * replies.length);

    let toastEmbed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .addField("Dear Toast...", replies[result]);

    message.channel.send(toastEmbed);
  }
}
