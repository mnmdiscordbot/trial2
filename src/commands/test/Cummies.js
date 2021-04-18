const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('cummies', 'cum', []);
  }

  async run(client, message, args) {
    message.channel.send('BAL BAB BAL BAL B BA BA B BAL BALLS BALLS BALLS HAHA BALLS HA BALLS AHAHHA');
  }
}