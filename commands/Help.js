// Help command
commands = []
commandFiles.map(command => {
  commands.push(command.cmd)
})
module.exports = {
  cmd: {
    name: 'help',
    run: (message, args, client) => {
      const help = {
        color: 0x0099ff,
        title: 'Help Page',
        url: 'https://discord.gg/vDHSH8xqjN',
        description: 'See what you can do with the bot',
        fields: [
          {
            name: 'Commands',
            value: commands.join(', '),
          },
        ],
        timestamp: new Date(),
      };
      return message.reply({ embeds: [help] });
    }
  }
}