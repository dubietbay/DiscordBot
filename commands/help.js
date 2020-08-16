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
        embed.addField('?raid','give raids info');
        message.channel.send(embed);
    }
}