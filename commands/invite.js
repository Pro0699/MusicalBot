const emotes = require("../config/emojis.json");

exports.run = async (client, message) => {

    message.channel.send(`https://bit.ly/musicalbot ${emotes.success}`)

};
