// Ping command
module.exports = {
  cmd: {
    name: "ping",
    run: (message, args, client) => {
      message.reply({ content: "Pong" });
    }
  }
}