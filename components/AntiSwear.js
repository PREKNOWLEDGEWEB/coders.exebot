client.on('messageCreate', message => {
  if(message.content.includes('fuck')){
    message.delete();
    message.channel.send(`<@${message.author.id}> Yo you just sweared`).then(message =>{
      setTimeout(function(){
        message.delete();
      },200);
    });
  }
  if(message.content.includes('f**k')){
    message.delete();
    message.channel.send(`<@${message.author.id}> Yo you just sweared`).then(message =>{
      setTimeout(function(){
        message.delete();
      },200);
    });
  }
  if(message.content.includes('fu*k')){
    message.delete();
    message.channel.send(`<@${message.author.id}> Yo you just sweared`).then(message =>{
      setTimeout(function(){
        message.delete();
      },200);
    });
  }
  if(message.content.includes('shit')){
    message.delete();
    message.channel.send(`<@${message.author.id}> Yo you just sweared`).then(message =>{
      setTimeout(function(){
        message.delete();
      },200);
    });
  }
  if(message.content.includes('shi8')){
    message.delete();
    message.channel.send(`<@${message.author.id}> Yo you just sweared`).then(message =>{
      setTimeout(function(){
        message.delete();
      },200);
    });
  }
	if(message.content.includes('bitch')){
    message.delete();
    message.channel.send(`<@${message.author.id}> Yo you just sweared`).then(message =>{
      setTimeout(function(){
        message.delete();
      },200);
    });
  }
});