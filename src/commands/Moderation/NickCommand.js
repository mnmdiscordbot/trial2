const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class NickCommand extends BaseCommand {
  constructor() {
    super('nick', 'Moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("CHANGE_NICKNAME")) return message.reply("you\'re not an admin dummy");
    if (!message.guild.me.hasPermission("MANAGE_NICKNAMES")) return message.reply("I need permissions to change nicknames!");

    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const nickName = args.slice(1).join(" ");

    if (!args[0]) return message.reply("Who\'s nickname am I changing?");
    if (!mentionedMember) return message.reply("Who tf is that?");
    if (!nickName) return message.reply("What do you want their nickname to be?");
    if (!mentionedMember.kickable) return message.reply("Can't change nickname, my developer sucks");

    await mentionedMember.setNickname(nickName).catch(err => console.log(err).then(message.channel.send("I can't add that nickname due to an error.")));

  }
}