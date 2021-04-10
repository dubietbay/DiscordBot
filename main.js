const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '>';
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
const noblox = require("noblox.js");
noblox.setCookie(process.env.COOKIE).then(function() {
    console.log("Logged in!")
}).catch(function(err) {
    console.log("Unable to log in!", err)
})

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command)
}


client.once('ready', () => {
    console.log('checker is online!');
    client.user.setActivity('Prefix: >')
});

//setInterval (function () {client.commands.get('checkcrowd').execute(message, args)}, 600000); 

client.on('message',async message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    if(message.channel.id == `748846480768630819` && message.guild.id == `595663296028475393`) return message.reply(`mommy will spank me if i talk here :sob:`)

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
        
    if(command === 'raid'){
        client.commands.get('raid').execute(message, args);
    }

    else if (command === 'help'){
        client.commands.get('help').execute(message, args);
    }
    
    else if (command === 'craft') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        client.commands.get('craft').execute(message, args)
    }

    else if (command === 'lookat') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        client.commands.get('lookat').execute(message, args)
    }

    else if (command === 'lookfor') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        client.commands.get('lookfor').execute(message, args)        
    }

    else if (command === 'link') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        client.commands.get('link').execute(message, args) 
    }

    else if (command === 'c') {
        client.commands.get('checkcrowd').execute(message, args, client) 
    }

    //else if (command === 'info') {
    //    if (!args.length) {
    //        return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    //    }
    //    client.commands.get('info').execute(message, args)        
    //}

});


client.login(process.env.token);

