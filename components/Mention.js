client.on("messageCreate", function (message) {
	if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
	
	if (message.mentions.has(message.client.user)) {
		return message.reply({
			embeds: [
				{				
					title: "Hey there!", 
					description: "My prefix is **code/**. Have a good one", 
					color: 0xff0000
				}
			]
		});
	}
});

// but all is fine, why is throwing syntax error oh i get it now
