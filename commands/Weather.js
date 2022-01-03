const weatherjs = require("weather-js")
module.exports = {
	cmd: {
		name: "weather",
		run: (message, args, client) => {
			if (!args.length) return message.reply({ content: "You need to enter a city, zip code or airport location to show weather!" })
			const weather = weatherjs.find({ search: args.join(" "), degreeType: "C" }, function (err, result) {
					if (err) console.log(err);
					
					try {
						message.reply({ embeds: [{
							title: `Weather for ${result[0].location.name}`,
							description: "This information may be not accurate", 
							color: 0xff2020,
							fields: [{
								name: "Date",
								value: `${result[0].current.date}`,
								inline: true
							}, {
								name: "Current Temperature",
								value: `${result[0].current.temperature}°C`,
								inline: true
							}, {
								name: "Sky",
								value: `${result[0].current.skytext}`,
								inline: true
							}, {
								name: "Wind",
								value: `${result[0].current.winddisplay}`,
								inline: true
							}, {
								name: "Humidity",
								value: `${result[0].current.humidity}%`,
								inline: true
							}, {
								name: "Observation Time",
								value: `${result[0].current.observationtime}`,
								inline: true
							}, {
								name: "Feels Like",
								value: `${result[0].current.feelslike}°C`,
								inline: true
							}, {
								name: "Highest Temperature",
								value: `${result[0].forecast[0].high}°C`,
								inline: true
							}, {
								name: "Lowest Temperature",
								value: `${result[0].forecast[0].low}°C`,
								inline: true
							}],
							thumbnail: {
								url: result[0].current.imageUrl
							}
						}] });
					} catch (err) {
						return message.reply({ content: `Sorry, but I can't display weather :(\n\`${err}\`` })
					}
			});
		}
	}
}