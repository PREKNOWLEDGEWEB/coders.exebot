module.exports = {
	cmd: {
		name: "say",
		description: "Make me say whatever you tell me",
		run: (message, args, client) => {
			if (!args || !args.length) return message.reply({ content: "You need to introduce what you want me to say as arguments" });
			else {
				const trustedId =  '922779392671887370'// Role Id? user i
        // It should be role id for every one with Truested Person role or above
        const toNotSay = ['@'] // Will not say any mentions o
				message.delete();
				if (args.join(" ").includes(toNotSay)) {
          console.log(message.author)
          let myRole = message.guild.roles.cache.find(role => role.id === trustedId);
          members = []
          console.log(myRole.members.map(member => members.push(member)))
          if (!message.member.id === message.author.id) {
          return message.channel.send({content: "Sorry, I can't say that"})
          }
        }
				if (!args.join(" ").includes(toNotSay)) 
        {
          message.channel.send(args.join(" "))
        } else {
          message.channel.send(args.join(" ") + "\n" + `Message by: ${message.author.username}#${message.author.discriminator}`)
        }
			}
		}
	}
}
// WHat about an announce feature where members with Trusted People Role can announce things and the message will include that person's name? 

// wait bot isn't connecting
// Bot isn't able to refresh Slash Commands