const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'Information', []);
  }

  run(client, message, args) {
    const sectionEmbed = new Discord.MessageEmbed()
    .setTitle('Bot Help Sections')
    .addField('Fun Commands', 'Commands that all users can user that are for fun and have no purpose.')
    .addField('Information commands', 'Commands that return some form of important imformation.')
    .addField('Moderation commands', 'Commands that are for moderation purposes within a server.')
    .addField('Tool commands', 'Commands that add features to a server.')
    .setFooter(client.user.tag, client.user.displayAvatarURL());
 
const infoEmbed = new Discord.MessageEmbed()  
   .setTitle('Information Commands.')
   .addField('Commands', '**$commands** - This commands shows the user all the commands possable.')
 
const funEmbed = new Discord.MessageEmbed()
   .setTitle('Fun Commands.')
   .addField('Avatar Command', '**$avatar** - Returns a users avatar.')
   .addField('Meme Command', '**$meme** - Returns a Meme to the channel.')
   .addField('Say Command', '**$say [content]** - Make the bot say a message to the channel.')
   .addField('Snipe Command', '**$snipe** - Returns the last deleted message within a channel.')
   .addField('Level Command', '**$level** - Check your server level.')
   .addField('Leaderboard Command', '**$leaderboard** - Check the servers leaderboard.')
   .addField('AFK Command', '**$afk [reason]** - To set your status as AFK')
   .addField('8Ball Command', '**$ball [question]** - Ask the 8Ball a question and receive an answer... maybe.')
   .addField('Rock, Paper, Scissors Command', '**$rps [rock] [paper] or [scissors]** - Starts a friendly gave of Rock, Paper, Scissors with the bot.');
 
const moderationEmbed = new Discord.MessageEmbed()
   .setTitle('Moderation Commands.')
   .addField('Ban Command', '**$ban [member] [reason]** - Bans mentioned member from the server.')
   .addField('Kick Command', '**$kick [member] [reason]** - Kicks mentioned member from the server.')
   .addField('Nickname Command', '**$nick [member] [nickname]** - Changes mentioned members nickname in a server.')
   .addField('Mute Command', '**$mute [member] [time]** - Mutes mentined member for mentioned amount of time.')
   .addField('Purge Command', '**$purge [amount]** - Purges amount mentioned within a channel.')
   .addField('Warn Command', '**$warn [member] [reason]** - Warns mentioned member.')
   .addField('Lock & Unlock Command', '**$lock / $unlock** - Locks or unlocks the channel.')
   .addField('Nuke Command', '**nuke** - Completely deletes a channel and creates a duplicate.')

const toolEmbed = new Discord.MessageEmbed()
   .setTitle('Tool Commands.')
   .addField('Poll Command', '**$poll [channel] [question]** - Create a poll.')
   .addField('Verify Command', '**$verify** - Gives the user the member role for the server.')
   .addField('Calculator Command', '**$calc** - Allows you to add, substract, multiply, or divide a series of two numbers.')
   
if (!args[0]) return message.channel.send(sectionEmbed);
if (args[0] == 'information') return message.channel.send(infoEmbed);
else if (args[0] == 'fun') return message.channel.send(funEmbed);
else if (args[0] == 'tool') return message.channel.send(toolEmbed);
else if (args[0] == 'moderation') return message.channel.send(moderationEmbed);
  }
}