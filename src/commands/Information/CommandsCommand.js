const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class HelpCommand extends BaseCommand {
   constructor() {
      super('commands', 'Information', []);
   }

   async run(bot, message, args) {
      const help = new Discord.MessageEmbed()
         .setColor("RANDOM")
         .setTitle('Prefix: $')
         .setAuthor('Command List', message.author.displayAvatarURL())

         .addFields({
            name: 'Information',
            value: '`test` | `help`',
         },
            {
               name: 'Fun',
               value: '`avatar` | `ball` | `meme` | `rps` | `say` | `snipe`',
            },

            {
               name: 'Moderation',
               value: '`ban` | `kick` | `nick` | `purge` | `mute` | `warn` | `lock` | `unlock` | `nuke`',
            },
            {
               name: 'Tool',
               value: '`calc` | `verify` | `poll`'
            })
      message.channel.send(help)
   }
}