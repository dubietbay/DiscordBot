const Discord = require('discord.js');
const fetch = require('node-fetch');
const nbx = require("noblox.js");
module.exports = {
    name: 'lookat',
    description: "this is a lookat command!",
    execute(message, args){
        const itemin = args[0].toLowerCase();
        const locations = [
            {Name: 'kyoto', ID: '561872248'},
            {Name: 'kansai', ID: '561872248'},
            {Name: 'chubu', ID: '554670851'},
            {Name: 'tohoku', ID: '903142964'},
            {Name: 'kanto', ID: '1469503587'},
            {Name: 'chugoku', ID: '2329809976'},          
            {Name: 'mura', ID: '2763010111'},
            {Name: 'kyushu', ID: '1251162439'},
            {Name: 'shikoku', ID: '4620197176'},
            {Name: 'menu', ID: '554664625'},
        ];
        function findname(id, callback, length, output) {
            nbx.getUsernameFromId(id)
            .then(name => {
                combiner(name, callback, length, output)  
            }).catch(console.error)
        }

        function combiner(input, cb, length, plrlist) {
            plrlist.push(input)
            if (plrlist.length == length) {
                cb(plrlist)
            }
        }

        function getplr(ids, callback, output) { 
            ids.forEach(e => {
                findname(e, callback, ids.length, output)
            });
        }

        function tostring(input) {
            list = ""
            input.forEach(e => {
                list = list + e + "\n"
            })
            return list
        }

        function sleep(milliseconds) {
            var start = new Date().getTime();
            for (var i = 0; i < 1e7; i++) {
              if ((new Date().getTime() - start) > milliseconds){
                break;
              }
            }
          }

        async function dostuff(id) {
            await fetch(`https://games.roblox.com/v1/games/${id}/servers/Public?limit=100&sortOrder=Asc`)
                .then(r => {
                    if(!r.ok) throw 'Invalid response!';
                    return r.json()
                })
                .then(e => {
                    if (e.data.length < 1) throw message.channel.send('no server found')
                    e.data.forEach(async server => {
                        const plrlist = []
                        let servernumber =  await e.data.indexOf(server) + 1
                        let cb = (r) => {
                            const embed = new Discord.MessageEmbed();
                            embed.setTitle(`${itemin}`);
                            embed.setColor('#f4c871');
                            embed.setAuthor('made by Dub', 'https://i.imgur.com/Rn9muMO.png', 'https://www.roblox.com/users/93839005/profile');
                            embed.setThumbnail('https://t1.rbxcdn.com/1194a83cefa36aae9055f96b0165858e');
                            embed.setTimestamp()
                            embed.addField(`Average player's ping in server:`,`${server.ping}`)
                            embed.addField(`Server ${servernumber} have ${server.playing} players:`,tostring(r));
                            message.channel.send(embed)
                        }
                            getplr(server.playerIds, cb, plrlist) 
                    })
                })
        }

        function starter() {
            locations.forEach(e => {
                if (e.Name == itemin) {
                    dostuff(e.ID)
                }
            });
        }
        starter()
    }
}
