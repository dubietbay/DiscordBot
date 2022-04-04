const { MessageEmbed, Client} = require("discord.js");
module.exports = {
    name: "help",
    description: "Displays commands.",
    async execute(interaction, client) {
        const embed = new MessageEmbed();
        embed.setTitle('Commands:');
        embed.setColor('#f4c871');
        embed.setAuthor({ name: 'made by Dub', iconURL: 'https://i.imgur.com/Rn9muMO.png', url: 'https://www.roblox.com/users/93839005/profile' });
        embed.setThumbnail('https://tr.rbxcdn.com/b70af9a2cc32a6fa307f7dd046c5b4f7/150/150/Image/Png');
        embed.addField('/raid','give raids info');
        embed.addField('/craft [item name] [amount]','give recipe')
        embed.addField('Bring timmy home (to ur server)','[click](https://discord.com/api/oauth2/authorize?client_id=750371529015165009&permissions=59392&scope=applications.commands%20bot)')
        embed.addField('need help ?','[my house](https://discord.gg/Zkjb55q3RK)')
        interaction.reply({embeds: [embed]});
    }
}