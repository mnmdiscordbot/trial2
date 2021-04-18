const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class PurgeCommand extends BaseCommand {
  constructor() {
    super('purge', 'Moderation', []);
  }

 async run(client, message, args) {
   if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('you\'re not an admin dummy');
   if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I do not have \'MANAGE_MESSAGES\' permission.");
   if (!args[0]) return message.channel.send("How many do I delete?");
   const amountToDelete = Number(args[0], 10);

  
   if (!Number.isInteger(amountToDelete)) return message.channel.send("That's not a whole number...");
   if (!amountToDelete || amountToDelete < 2 || amountToDelete > 100) return message.channel.send("Choose a number between 2 and 100.");
   const fetched = await message.channel.messages.fetch({
    limit: amountToDelete

   });
   try {
    await message.channel.bulkDelete(fetched)
      .then(messages => message.channel.send(`Deleted ${amountToDelete} messages.`));
   } catch (err) {
     message.channel.send('I was unable to delete the amount stated.');
   }
  }
}