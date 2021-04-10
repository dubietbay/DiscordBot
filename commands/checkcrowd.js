const Discord = require('discord.js');
const fetch = require('node-fetch');
module.exports = {
    name: 'checkcrowd',
    description: "this is a check command!",
    execute(message, args){
        const embed = new Discord.MessageEmbed();
        let info = []
        embed.setTitle(`BREAKING NEWS!`);
        embed.setColor('#f4c871');
        embed.setAuthor('made by Dub', 'https://i.imgur.com/Rn9muMO.png', 'https://www.roblox.com/users/93839005/profile');
        embed.setThumbnail('https://t1.rbxcdn.com/1194a83cefa36aae9055f96b0165858e');
        embed.setTimestamp()
        const locations = [
            {Name: 'Kansai', ID: '561872248'},
            {Name: 'Chubu', ID: '554670851'},
            {Name: 'Tohoku', ID: '903142964'},
            {Name: 'Kanto', ID: '1469503587'},
            {Name: 'Chugoku', ID: '2329809976'},          
            {Name: 'Mura', ID: '2763010111'},
            {Name: 'Kyushu', ID: '1251162439'},
            {Name: 'Shikoku', ID: '4620197176'},
        ];

        async function one() {
            locations.forEach(async (el) =>  {
                await fetch(`https://games.roblox.com/v1/games/${el.ID}/servers/Public?limit=100&sortOrder=Asc`)
                    .then(r => {
                        if(!r.ok) throw 'Invalid response!';
                        return r.json()
                    })
                    .then(e => {
                        if (e.data.length >= 1){
                            e.data.forEach(server => {
                                let servernumber =  e.data.indexOf(server) + 1
                                let PlrCount = server.playing 
                                let Ping = server.ping
                                let Place = el.Name
                                if (PlrCount >= 5){
                                    var object = {Head: `Server ${servernumber} in ${Place}`, Tail: `Players count: ${PlrCount} \n Average player's ping: ${Ping}`}
                                    info.push(object)
                                }
                            });
                        }   
                    }).catch(er => console.error)
            });
        };
        async function two() {
            await one()
            info.forEach(item => {
                embed.addField(item.Head, item.Tail)
            })
            console.log (info)
            message.channel.send(embed)
        }
        two()
    }
}