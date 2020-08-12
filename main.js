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
        if(hours > 12) hours = hours - 12;
        const embed = new Discord.MessageEmbed();
        embed.setTitle('Current lotrs raids:');
        embed.setColor('#f4c871');
        embed.setAuthor('made by Dub', 'https://i.imgur.com/Rn9muMO.png', 'https://www.roblox.com/users/93839005/profile');
        embed.setThumbnail('https://t1.rbxcdn.com/1194a83cefa36aae9055f96b0165858e');
        switch (hours) {
            case 2:
            case 3:
            case 8:
            case 9:
                embed.addField("Tohoku","[Servers](https://www.roblox.com/games/903142964/Tohoku-Region#!/game-instances)",true)
                embed.addField("Kansai","[Servers](https://www.roblox.com/games/561872248/Kansai-Region#!/game-instances)",true)
                embed.addField("Upcomming raids","\u200B")
                embed.addField("Kanto","[Servers](https://www.roblox.com/games/1469503587/Kanto-Region#!/game-instances)",true)
                embed.addField("Chugoku","[Servers](https://www.roblox.com/games/2329809976/Chugoku-Region#!/game-instances)",true)
                embed.addField("Shikoku","[Servers](https://www.roblox.com/games/4620197176/Shikoku-Region#!/game-instances)",true)
                break;
            case 4:
            case 5:
            case 10:
            case 11:
                embed.addField("Kanto","[Servers](https://www.roblox.com/games/1469503587/Kanto-Region#!/game-instances)",true)
                embed.addField("Chugoku","[Servers](https://www.roblox.com/games/2329809976/Chugoku-Region#!/game-instances)",true)
                embed.addField("Shikoku","[Servers](https://www.roblox.com/games/4620197176/Shikoku-Region#!/game-instances)",true)
                embed.addField("Upcomming raids","\u200B")
                embed.addField("Chubu","[Servers](https://www.roblox.com/games/554670851/Chubu-Region#!/game-instances)",true)
                embed.addField("Kyushu","[Servers](https://www.roblox.com/games/1251162439/Kyushu-Region#!/game-instances)",true)
                break;
            case 6:
            case 7:
            case 12:
            case 1:
                embed.addField("Chubu","[Servers](https://www.roblox.com/games/554670851/Chubu-Region#!/game-instances)",true)
                embed.addField("Kyushu","[Servers](https://www.roblox.com/games/1251162439/Kyushu-Region#!/game-instances)",true)
                embed.addField("Upcomming raids","\u200B")
                embed.addField("Tohoku","[Servers](https://www.roblox.com/games/903142964/Tohoku-Region#!/game-instances)",true)
                embed.addField("Kansai","[Servers](https://www.roblox.com/games/561872248/Kansai-Region#!/game-instances)",true)
                break;
            default:
                embed.addField("error")
        }
        message.channel.send(embed);
    }
});

client.login(process.env.token);