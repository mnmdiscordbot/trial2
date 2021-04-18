const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');

module.exports = class PollCommand extends BaseCommand {
  constructor() {
    super('poll', 'Tool', []);
  }

    async run (bot, message, args) {
      let channelID = message.mentions.channels.first();
      let theDescription = args.slice(1).join(" ");

      if (!channelID) return message.reply("state the channel you want the poll to be in.");
      if (!theDescription) return message.reply("specify the question for your poll.");

      const embed = new MessageEmbed()
        .setColor("#FF0000")
        .setTitle("🗳️")
        .setDescription(theDescription)
        .setFooter("Poll created by:"+ message.author.username +'#'+ message.author.discriminator)

        let msgEmbed = await channelID.send(embed);
        await msgEmbed.react('🟢')
        await msgEmbed.react('🔴')


    }
}