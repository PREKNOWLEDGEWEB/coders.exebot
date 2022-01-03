module.exports = {
	cmd: {
		name: "avatar",
		run: (message, args, client) => {
			let user;
			user = message.mentions.users.first() ? message.mentions.users.first() : message.author

      const embed = {
        title: `${user.username}'s Avatar`,
        image: {url: user.avatarURL()},
      }

      message.channel.send({embeds: [embed]});
			// hi hi the bot is not going online
		}
	}
}