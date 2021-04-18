const BaseEvent = require('../../utils/structures/BaseEvent');
const Discord = require('discord.js');

module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {
    if (message.author.bot) return;
    
const mentionedMember = message.mentions.members.first();
const role = message.guild.roles.cache.get('829648160166903820');

if (mentionedMember) {
  if (mentionedMember.roles.cache.has(role.id)) {
    const noEmbed = new Discord.MessageEmbed()
      .setTitle(`Don't ping me.`)
      .setColor('RED')
      .setImage('https://i.makeagif.com/media/5-22-2016/zmLRkH.gif')
    await message.reply(noEmbed).catch(err => console.log(err));
  }
}


    if (message.content.startsWith(client.prefix)) {
      const [cmdName, ...cmdArgs] = message.content
      .slice(client.prefix.length)
      .trim()
      .split(/\s+/);
      const command = client.commands.get(cmdName);
      if (command) {
        command.run(client, message, cmdArgs);
      }
    }
  }
}