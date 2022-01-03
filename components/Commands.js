
const cmdFiles = fs.readdirSync(path.join(__dirname, "..", "codersexebot/commands/")); //Done! great

client.commands = {}

// We'll need to set file's Data (Object) in the client.commands

/*cmdFiles.map((file) => {
  console.log(file)
  file.name = file.replaceAll('.js', '')
  data = require(`/home/runner/codersexebot/commands/${file.name}.js`)
	client.commands[file.name] = {
    name: file.name,
    data: data
  }; // No we'll use `data` in the execution
	console.log(`Registered command ${file}`)
	// is just to register files on collection
  // Ohk Will it work?
}) // forEach() has i but map() doesn't
*/

commandFiles = []

fs.readdirSync(path.join(__dirname, 'commands')).forEach((file, i) => {
  if (file.endsWith('.js')) {
    commandFiles.push({
      file: file,
      cmd: file.replaceAll('.js', ''),
      run: (message, args, client) => {
        const {cmd} = require(path.join(__dirname, 'commands', file))
        cmd.run(message, args, client)
      }
    })
  }
})

commandFiles.forEach((cmd, i) => {
  console.log(clc.blue(`Registered: ${cmd.cmd} (${cmd.file})`))
})

 // If cmdFiles an Array, why not to use .map() or .forEach()? yeah good idea
 // I think the file isn't even opened

client.on("messageCreate", (message) => {
	const p = process.env['prefix'];
	if (!message.content.startsWith(p)) return;
	const args = message.content.slice(p.length).split(/ +/);
	const command = args.shift(); // from the message yes
  const commandFound = []
  commandFiles.forEach((cmd, i) => {
    if (cmd.cmd.toLowerCase() == command.toLowerCase()) {
      commandFound.push(cmd);
    }
  })
  return (() => {
    if (!commandFound.length) {
      return console.log(`Command not found: ${command}`)
    } else {
      return commandFound[0].run(message, args, client)
    }
  })()
  /*commandFiles.forEach((file, i) => {
    if (file.cmd.toLowerCase() == command.toLowerCase()) {
      commandFound.push(file)
      console.log(file)
    }
  })*/
  /*if (commandFound.length == 0) {
    return console.err('No such command found!')
  } else {
    console.log(commandFound[0])
    return commandFound[0].run(message, args, client)
  }*/
	
	// if (!client.commands[command]) return;
	// if (!client.commands.get(command)) return message.reply({ content: "This command doesn't seem to exist!" });
  //if (client.commands.get(command)) {
   // console.log(`Command Executed: ${command}`);
	// .get() is for Objects
  // .has() is also for objects
  
  // Async/Await? Is it Async function? no async is not required. Then why try/catch? just for sending errors instead of crashing the bot. Ok
// 	try {
// 		client.commands[command].run(message, args, client)
// 	} catch (err) {
// 		console.error(err);
// 		message.reply({ content: `Oops an error occured! ${err}` });
// 	}
});


//discordjs not required its already required in index.js and define packages in index.js ok fs is undefined
// Sotest it it'll work now? yes
// What are you doing with files?
// I'm making a command file system for file separated commands like ping.js for ping command
// Ok
// What about a logo for the bot? yea it will be good
// You're using regex in split? yes
// Are there enough commands available in files?