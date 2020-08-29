const Discord = require('discord.js');
module.exports = {
    name: 'help',
    description: "this is a help command!",
    execute(message, args){
        const embed = new Discord.MessageEmbed();
        embed.setTitle('Commands:');
        embed.setColor('#f4c871');
        embed.setAuthor('made by Dub', 'https://i.imgur.com/Rn9muMO.png', 'https://www.roblox.com/users/93839005/profile');
        embed.setThumbnail('https://t1.rbxcdn.com/1194a83cefa36aae9055f96b0165858e');
        embed.addField('>raid','give raids info');
        embed.addField('>hheeggeell','pls dont use');
        embed.addField('>lookat [region name]','gib region info')
        embed.addField('>craft [item name] [amount]','ex: >craft soshukatana 1')
        embed.addField('Bring timmy home (to ur server)','[click](https://discord.com/oauth2/authorize?client_id=742196390683345014&scope=bot&permissions=318528)')
        embed.addField('need help ?','[my house](https://discord.gg/fB5UUjN)')
        message.channel.send(embed);
    }
}