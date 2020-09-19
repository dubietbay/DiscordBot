const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '>';
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));


for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command)
}


client.once('ready', () => {
    console.log('checker is online!');
    client.user.setActivity('Prefix: >')
});

client.on('message',async message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    if(message.channel.id == `748846480768630819` && message.guild.id == `595663296028475393`) return message.reply(`mommy will spank me if i talk here :sob:`)
    if(message.author.id == `719591875723526178`) return 

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

    else if (command === 'info') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        client.commands.get('info').execute(message, args)        
    }

    else if (command === 'joblist') {
        client.commands.get('job').execute(message, args)
    }

    else if (command === 'serverss') {
        a = ""
        client.guilds.cache.forEach((guild) => {
              a = a + `${guild.name} has ${guild.memberCount} members` + '\n'
          })
        message.channel.send(a); 
    }
});

client.login(process.env.token);
//client.login('NzQ3Mjg1MjM4MDY5MDY3ODI2.X0MpnA.Vvq0qUNikCqZnFfq1kmW4lZ1tC4');
