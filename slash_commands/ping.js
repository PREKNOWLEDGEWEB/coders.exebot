const run = (interaction) => {
		// Is running but not passing interaction
		// TYPO
    interaction.reply(`Pong!\nMessage Ping: ${Date.now() - interaction.createdTimestamp}ms\nAPI Ping: ${interaction.client.ws.ping}ms`);
}

module.exports = {
  data: {
    name: 'ping',
    description: 'Ping Pong!',
    run: run
  }
}