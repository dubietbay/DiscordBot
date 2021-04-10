const Discord = require('discord.js');
const fs = require('fs') 
module.exports = {
    name: 'link',
    description: "this is a link command!",
    execute(message, args){
        let data = message.channel.id
        fs.writeFile('./temp/servers.txt', data, (err) => { 
            if (err) throw err; 
        }) 
        message.reply("Linked!")
    }
}