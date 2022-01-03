// When the bot is invited to the server
client.on("guildCreate", (guild) => {
	const channel = guild.systemChannel;
	
	channel.send({
		embeds: [{
			title: "Hello World!", description: "My purpose is to serve your codes but also give you some fun! To start use **!code** or explore my slash commands by typing **/**.", color: 0xff0000
		}]
	})
});