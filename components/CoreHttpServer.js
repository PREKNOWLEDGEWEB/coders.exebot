var express = require('express')
var axios = require('axios')
var app = express()
var port = process.env.PORT || 80;
app.get('/', function (req, res) {
  res.send('Coders.exe Bot')
})

app.listen(port);
console.log("@ Repit chosen port " + port)

setInterval(function(){
  axios.get('https://codersexebot.preknowledgeweb.repl.co')
  .catch(function (error) {
    console.log("Zombie dies");
  });
},800);