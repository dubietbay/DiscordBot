const Discord = require('discord.js');
const fetch = require('node-fetch');
const nbx = require("noblox.js");
module.exports = {
    name: 'lookfor',
    description: "this is a lookfor command!",
    execute(message, args){ 
        const itemin = args[0].toLowerCase();
        const locations = [
            {Name: 'Kansai/Kyoto', ID: '561872248'},
            {Name: 'Chubu', ID: '554670851'},
            {Name: 'Tohoku', ID: '903142964'},
            {Name: 'Kanto', ID: '1469503587'},
            {Name: 'Chugoku', ID: '2329809976'},          
            {Name: 'Mura', ID: '2763010111'},
            {Name: 'Kyushu', ID: '1251162439'},
            {Name: 'Shikoku', ID: '4620197176'},
            {Name: 'Menu Screen', ID: '554664625'},
        ];
        const embed = new Discord.MessageEmbed();
        embed.setTitle(`User: ${args[0]}`);
        embed.setColor('#f4c871');
        embed.setAuthor('made by Dub', 'https://i.imgur.com/Rn9muMO.png', 'https://www.roblox.com/users/93839005/profile');
        embed.setThumbnail('https://t1.rbxcdn.com/1194a83cefa36aae9055f96b0165858e');
        var first = true
        function a(a, b) {
            if (first) {
                first = false
                embed.addField(a, b)
                message.channel.send(embed)
            }
        }

        function finder(id) {
            locations.forEach(el => {
                fetch(`https://games.roblox.com/v1/games/${el.ID}/servers/Public?limit=100&sortOrder=Asc`)
                    .then(r => {
                        if(!r.ok) throw 'invalid response!';
                        return r.json()
                    })
                    .then(e => {
                        e.data.forEach(server => {
                            server.playerIds.forEach(ids => {
                                if (id == ids) {
                                    a(`${itemin} FOUND AT: ${el.Name} :face_with_monocle:`, `${itemin} is in server  have ${server.playing} players and ${server.ping} avg ping`) 
                                }else if (el.Name == 'menu' && server.playerIds.length == server.playerIds.indexOf(ids) + 1) {
                                    a('plr not found on lotrs',`gl next time`)
                                }
                            });
                        });
                    }).catch(er => console.error)
            });
        }
        
        function startApp () {
            nbx.getIdFromUsername(args[0])
                .then(r => {
                    if(!r) throw message.channel.send('user not exist! (wrong name prob)')
                    finder(r)
                })
        }
        startApp()
    }
}