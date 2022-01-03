const { Client, Intents, MessageMentions: { USERS_PATTERN }, Collection, MessageEmbed } = require('discord.js');
const SerpApi = require('google-search-results-nodejs')
const { SlashCommandBuilder } = require('@discordjs/builders');
let search = new SerpApi.GoogleSearch()
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const clc = require("cli-color");
const fs = require('fs');
const path = require("path");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const p = process.env['prefix'];
const weatherjs = require("weather-js");
//const { Routes } = require('discord-api-types/v9');

// client.commands = new Collection() // maybe defining it here will make it work
// Why not client.commands = {} oh {} is a collection/Object

// api is down but discord won't display it until hours later
// Why other bots are working?
// Logged In as <Coders.exe/>#**** is missing in logs so it'll be logging API problem

const activities = ["const help = require('@coders.exe/help');", "from Coders.exe import help", "#include coders.exe/help", "import { help } from 'coders.exe'", 'import "coders.exe/help"', 'import coders.exe.help']

client.on('ready', () => {
  console.log(clc.blue(`Logged in as ${client.user.tag}!`));
  /*const guild = client.guilds.cache.get("922779334933098497");
  client.user
    .setAvatar(guild.iconURL())*/
  client.user
    .setPresence({ status: 'online' })
  // run every 10 seconds
  setInterval(() => {
    // generate random number between 1 and list length.
    const randomIndex = Math.floor(Math.random() * (activities.length - 1) + 1);
    const newActivity = activities[randomIndex];

    client.user.setActivity(newActivity);
  }, 5000);
});

function isSendMessage(command_name,message){
  if(message.content.startsWith(`${p} ${command_name}`)){
    return true;
  }else{
    return false;
  }
}

let filesArray = []

const componentFiles = fs.readdirSync("./components");

componentFiles.map(function (file) {
	console.log(clc.green(`<> Loaded ${file} component`));
	const component = fs.readFileSync(`./components/${file}`).toString();
	eval(component)
});


// bye i'll go for now it's1:27 am her
// Ohk bye!

function getUserFromMention(mention) {
	const matches = mention.match(USERS_PATTERN);
	if (!matches) return;
	const id = matches[1];
	return client.users.cache.get(id);
}

function talk(message){
  if(message.content.includes('hi')){
    return(`Hello ! ${message.author.username}`);
  }else if(message.content.includes('how are you')){
    return(`i'm good \n Wbu?`);
  }
  else if(message.content.includes('wtt bot')){
    return(`wttbot is my gf`);
  }
  else if(message.content.startsWith('A')){
    return(`i hate you`);
  }
  else if(message.content.startsWith('no')){
    return(`why???? just why?????`);
  }
  else if(message.content.includes('gay?')){
    return(`bruhhhh nope`);
  }
  else if(message.content.includes('ded')){
    return(`you know you are undead`);
  }
  else if(message.content.includes('DED')){
    return(`you know you are undead`);
  }
  else if(message.content.includes('booooo')){
    return(`hehe ill never scare`);
  }
  else if(message.content.includes('lag')){
    return(`oh noo i'm lagging tooooooo`);
  }
  else if(message.content.startsWith('FUN')){
    return(`creeper`);
    setTimeout(function(){
      message.channel.send('aw man');
    },200);
  }
  else if(message.content.startsWith('a')){
    return(`i hate you`);
  }
  else if(message.content.includes('wtt')){
    return(`wtt server's bot is my ||gf|| ngl invite link : https://discord.gg/8zqxDEbf`);
  }
  else if(message.content.startsWith('wtf')){
    return(`the f`);
  }
  else if(message.content.startsWith('WTF')){
    return(`the f`);
  }
  else if(message.content.startsWith('i hate u')){
    return(`f you you are bad`);
  }
  else if(message.content.startsWith('war')){
    return(`yes i don't like this so thats why i don't like you go and die`);
  }
  else if(message.content.startsWith('i hate you')){
    return(`f you you are bad`);
  }
  else if(message.content.startsWith('what are you')){
    return(`My name is <Coders.exe/> \n my gender is male \n and what? i'm a bot`);
  }
  else if(message.content.includes('windows tech tips bot')){
    return(`wttbot is my gf! dont touch her`);
  }
  else if(message.content.includes(`i'm good`)){
    return(`Cool to hear`);
  }
  else if(message.content.includes(`what`)){
    return(`what`);
  }
  else if(message.content.includes(`<@`)){
    console.log(getUserFromMention(message.content));
    return(`you pinged some1`);
  }
  else if(message.content.includes(`we built this city`)){
    console.log(getUserFromMention(message.content));
    return(`with wood and stone a trillion views counting`);
  }
  else if(message.content.includes(`tl`)){
    return(`we are tl players`);
  }
  else if(message.content.includes(`11`)){
    return(`Windows 11`);
  }
  else if(message.content.includes(`never gonna`)){
    return(`oh no dammm im starting a war`);
  }
  else if(message.content.includes(`bruh`)){
    return(`E`);
  }
  else if(message.content.includes(`cmw`)){
    return(`Come on Windows`);
  }
  else if(message.content.includes(`villager`)){
    return(`mumbles`);
  }
  else if(message.content.includes(`mumbles`)){
    return(`villager hurts`);
  }
  else if(message.content.startsWith(`e`)){
    return(`eeeeeeeeeeeeeeeeeeeeeee \n aaaaaaaaaaaaaaaaaa`);
  }
  else if(message.content.includes(`lel`)){
    return(`Lol`);
  }
  else if(message.content.includes(`welcome`)){
    return(`welll -come`);
  }
  else if(message.content.includes(`i'm a creeper`)){
    return(`minecraft's grim reeper ill leave you perterifed boom boom i can't stop singing this blody tune tune`);
  }
  else if(message.content.includes(`my name is`)){
    return(`idc`);
  }
  else if(message.content.includes(`fff`)){
    return(`Press F to praise to bedrock players for cant hold anything in their off-hand`);
  }
  else if(message.content.includes(`linux`)){
    return(`ubuntu is best!`);
  }
  else if(message.content.includes(`windows`)){
    return(`dammm sh88`);
  }
  else if(message.content.includes(`started`)){
    return(`ready steady go?`);
  }
  else{
    return(`hi eh>`);
  }
}

client.login(process.env['token']);