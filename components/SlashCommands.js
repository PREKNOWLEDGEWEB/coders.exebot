// Add commands dynamically from the folder in the docs its not properly documated
// We can load find commands from folder and register them here as well as we can use functions in the file
// Just like prefix commands Okay!
// Use 
/*const SlashCommands = fs.readdirSync(path.join(__dirname, 'slash_commands'))

commands = []

SlashCommands.map(command => {
  if (command.endsWith('.js')) {
    commands.push({
      file: command,
      name: command.replace('.js', ''),
      description: require(path.join(__dirname, 'slash_commands', command)).data.description,
      run: (interaction) => {require(path.join(__dirname, 'slash_commands', command)).data.run(interaction)}
    })*/
    //wait ill add addStringOption to it so it can maybe registered in all commads if we do like this
    // no no do module.exports in slash_commands cuz if i add addStringOption in builder it will be added in all commands
    // SlashCommands files needs to export name, run and description with module.exports = {data: {name: 'name', description: 'desc', run: function}} ohk
    //.addStringOption(option => option.setName('input').setDescription('Enter a string'))
    // What's it? it adds input option to the command like /say [a text here]
    // You means arguments? yes
    // https://discordjs.guide/interactions/replying-to-slash-commands.html#command-options

    //TypeError: fs.readdirsync is not a function
  //}
//})
// How to register the commands? i dont know that too the documation had not included how to register from array
// I can forEach
// How you registered the ping command?

// Wait

/*commands.map(command => {
  const guildId = '922779334933098497';
  const userGuild = '923061413818277919';
  
  const data = new SlashCommandBuilder()
	.setName(command.name)
	.setDescription(command.description)
  //client.api.applications(userGuild).guilds(guildId).commands.post(data); // Maybe I got data needs to be object
  // /still
  await rest.put(
		Routes.applicationGuildCommands(userGuild, guildId), // It needs to be put instead of post yes
			{ body: commands },
	);
})*/
// Use Basic DiscordJS API
// Where's the error?
// The trace
 // isnDiscordAPIError: Invalid Form Body'
 // Main error is Inavlid Content-Type < then the bot wouldnot start
// Error above ik
// Let me read docs
// SlashCommandBuilder
//https://discordjs.guide/interactions/registering-slash-commands.html#registering-slash-commands
// SlashCommandBuilder requires @discordjs/builders
// https://discordjs.guide/interactions/registering-slash-commands.html#options

//TypeError: fs.readdirsync is not a function

/*
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

  foundCommands = []

	commands.map(command => {
    if (command.name == interaction.name) {
      foundCommands.push(command)
    }
  })
  return (() => {
    if (!foundCommands.length) {
      interaction.reply('No such command found')
    } else {
      foundCommands[0].run(interaction)
    }
  })
});*/

// What should be interaction.reply() ? Object String or Object?

const commands = [];
const commandFiles = fs.readdirSync(path.join(__dirname, 'slash_commands')).filter(file => file.endsWith('.js'));

// Place your client and guild ids here
const guildId = '922779334933098497';
const clientId = '923061413818277919';

for (const file of commandFiles) {
	const command = require(path.join(__dirname, 'slash_commands', file));
  console.log(command.data)
	commands.push(command.data);
}

const rest = new REST({ version: '9' }).setToken(process.env.token);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);
		// maybe discord rest api is down
    // That's possible
    // Then temporarily comment out this file to skip the refresh and disable slash commands
		// nope the entire api is down

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})()
//this interaction failed
// nope
// its recieving command but not sending reply
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;
  // console.log(interaction.commandName);
  foundCommands = []

	commands.map(command => {
    if (command.name == interaction.commandName) {
      foundCommands.push(command)
    }
  });
  return (() => {
    if (!foundCommands.length) {
      interaction.reply('No such command found')
    } else {
      foundCommands[0].run(interaction)
    }
  })();
	// you forgot to execute it
}); // Interaction failed
// Oh
// now works but interaction is not defined
// What about optional arguments?
// What do you think?