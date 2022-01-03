client.on('messageCreate', message => {
  if(message.author.bot) return ;
  if(message.channel.id == 923073389424427099){
    message.channel.send(talk(message));
  }
});