const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class EightCommand extends BaseCommand {
  constructor() {
    super('ball', 'Fun', []);
  }

  async run (bot, message, args) {
    if(!args[0]) return message.reply('what are you asking the 8ball?');
    let replies = ["Yes.", "What the fuck? No!", "Duh, you idiot", "Do you think I care lol", "Don't ask me loser", "Course.", "No shit lmao", "Uhhh... I guess?", "Ask yo mama", "Yes dad", "No father", "Ask again later you piece of shit"];

    let result = Math.floor(Math.random() * replies.length);
    let question = args.slice().join(" ");

    let ballEmbed = new Discord.MessageEmbed()
    .setAuthor(`🎱${message.author.username}`)
    .setColor("#FF0000")
    .addField("Question", question)
    .addField("Answer", replies[result]);

    message.channel.send(ballEmbed);
  }
}
