const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class CalcCommand extends BaseCommand {
  constructor() {
    super('calc', 'Tools', ['calculator', 'calculate']);
  }

  async run(client, message, args) {
    const firstValue = Number(args[0]);
    const secondValue = Number(args[2]);

    if (!args[0]) return message.reply('Please enter a full expression!');
    if (!firstValue) return message.reply('The first value stated is not a number.');
    if (!args[1]) return message.reply('What do you want to do with these numbers?');
    if (!['+', '-', 'x', '/'].includes(args[1])) return message.reply('Please finish the expression.');
    if (!secondValue) return message.reply('The second value stated is not a number.');

    if (args[1] == '+') {
      let result = firstValue + secondValue;
      message.channel.send(`${firstValue} + ${secondValue} = ${result}`);
    }
    if (args[1] == '-') {
      let result = firstValue - secondValue;
      message.channel.send(`${firstValue} - ${secondValue} = ${result}`);
    }
    if (args[1] == 'x') {
      let result = firstValue * secondValue;
      message.channel.send(`${firstValue} * ${secondValue} = ${result}`);
    }
    if (args[1] == '/') {
      let result = firstValue / secondValue;
      message.channel.send(`${firstValue} / ${secondValue} = ${result}`);
    }
  }
}