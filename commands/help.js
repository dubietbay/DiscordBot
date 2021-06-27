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
        embed.addField('>lookat [region name]','give region info')
        embed.addField(`>lookfor [name/id] [player's name/player's id]`, `ex: >lookfor name dubietbay`)
        embed.addField('>craft [item name] [amount]','ex: >craft soshukatana 1')
        //embed.addField('>info [Equipment]', 'gib equipment info (no weapon yet) (delayed)')
        embed.addField('Bring timmy home (to ur server)','[click](https://discord.com/oauth2/authorize?client_id=750371529015165009&scope=bot&permissions=326720)')
        embed.addField('need help ?','[my house](https://discord.gg/Zkjb55q3RK)')
        message.channel.send(embed);
    }
}