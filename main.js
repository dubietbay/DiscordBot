const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '3=D';
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command)
}


client.once('ready', () => {
    console.log('checker is online!');
    client.user.setActivity('Prefix: 3=D')
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
        
    if(command === 'raid'){
        client.commands.get('raid').execute(message, args);
    }

    else if (command === 'help'){
        client.commands.get('help').execute(message, args);
    }

    else if (command === 'hheeggeell'){
        message.reply('DONT TOUCH MY WIFE >:(');
    }
    
    else if (command === 'craft') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
            client.commands.get('craft').execute(message, args)
    }

    else if (command === 'servers') {
       client.guilds.cache.forEach((guild) => {
        message.channel.send(
            `${guild.name} has a total of ${guild.memberCount} members`
          )
       }) 
    }

    else if (command === 'search') {

    }
});

client.login(process.env.token);