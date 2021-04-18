const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class VerifyCommand extends BaseCommand {
  constructor() {
    super('verify', 'Tools', []);
  }

  async run(client, message, args) {
   if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("I need manage roles perms!");

   const role = message.guild.roles.cache.get('804246418167693363');

   await message.member.roles.add(role.id).catch(err => console.log(err));
  }
}