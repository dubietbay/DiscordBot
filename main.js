const Discord = require('discord.js')
const client = new Discord.Client();
const prefix = '?';


client.once('ready', () => {
    console.log('checker is online!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'raid'){
        let date_ob = new Date();
        let hours = date_ob.getUTCHours();
        let minutes = date_ob.getUTCMinutes();
        var content
        if(hours > 12) hours = hours - 12;
        const embed = new Discord.MessageEmbed();
        embed.setTitle('Current lotrs raids:');
        embed.setColor('#f4c871');
        embed.setAuthor('made by Dub', 'https://i.imgur.com/Rn9muMO.png', 'https://www.roblox.com/users/93839005/profile');
        embed.setThumbnail('https://t1.rbxcdn.com/1194a83cefa36aae9055f96b0165858e');
        switch (hours) {
            case 1:
            case 2:
                content = "Tohoku,Kansai"
                break;
            case 3:
            case 4:
                content = "Kanto,Chugoku,Shikoku"
                break;
            case 5:
            case 6:
                content = "Chubu,Kyushu"
                break;
            case 7:
            case 8:
                content = "Tohoku,Kansai"
                break;
            case 9:
            case 10:
                content = "Kanto,Chugoku,Shikoku"
                break;
            case 11:
            case 12:
                content = "Chubu,Kyushu"
                break;
            default:
                content = "error"
        }
        embed.addField(content)
        message.channel.send(embed);
    }
});

client.login(process.env.token);