const Discord = require('discord.js');
const fetch = require('node-fetch');
const nbx = require("noblox.js");
module.exports = {
    name: 'lookat',
    description: "this is a lookat command!",
    execute(message, args){
        const embed = new Discord.MessageEmbed();
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

        function getregioninfo() {
            locations.forEach(el => {
                if (el.Name == itemin) {
                    fetch(`https://games.roblox.com/v1/games/${el.ID}/servers/Public?limit=100&sortOrder=Asc`)
                        .then(r => {
                            if(!r.ok) throw 'Invalid response!';
                            return r.json()
                        })
                        .then(e => {
                            if (e.data.length < 1) throw message.channel.send('region empty no server found')
                            embed.setTitle(`${itemin}`);
                            embed.setColor('#f4c871');
                            embed.setAuthor('made by Dub', 'https://i.imgur.com/Rn9muMO.png', 'https://www.roblox.com/users/93839005/profile');
                            embed.setThumbnail('https://t1.rbxcdn.com/1194a83cefa36aae9055f96b0165858e');
                            embed.setTimestamp()
                            e.data.forEach(server => {
                                let servernumber =  e.data.indexOf(server) + 1
                                embed.addField(`Server ${servernumber}`,`Players count: ${server.playing} \n Average player's ping: ${server.ping} \n ________ \n >lookat ${itemin} ${servernumber} (for more info)`)
                            });
                            message.channel.send(embed)
                        }).catch(er => console.error)
                }
            });
        }

        function getserverinfo()  {
            locations.forEach(el => {
                if (el.Name == itemin) {
                    fetch(`https://games.roblox.com/v1/games/${el.ID}/servers/Public?limit=100&sortOrder=Asc`)
                        .then(r => {
                            if(!r.ok) throw 'invalid response!';
                            return r.json()
                        })
                        .then(e => {
                            const plrlist = []
                            if (e.data.length < 1) throw message.channel.send('region empty no server found')
                            e.data.forEach(server => {
                                let cb = (r) => {
                                    embed.setTitle(`${itemin} Server ${servernumber}`);
                                    embed.setColor('#f4c871');
                                    embed.setAuthor('made by Dub', 'https://i.imgur.com/Rn9muMO.png', 'https://www.roblox.com/users/93839005/profile');
                                    embed.setThumbnail('https://t1.rbxcdn.com/1194a83cefa36aae9055f96b0165858e');
                                    embed.setTimestamp()
                                    embed.addField(`Average player's ping in server:`,`${server.ping}`)
                                    embed.addField(`Server ${servernumber} have ${server.playing} players:`,tostring(r));
                                    message.channel.send(embed)
                                }
                                let servernumber =  e.data.indexOf(server) + 1
                                if(servernumber == args[1]) {
                                    getplr(server.playerIds, cb, plrlist)
                                }
                            })
                        }).catch(er => console.error)
                }
            })
        }

        if (args[1]) {
            if (isNaN(parseInt(args[1]))) {
                return message.reply('that doesn\'t seem to be a valid number.');
            }
            message.channel.send("roblox removed the ability to see, why u blind my boy timmy :(")
        }else {
            getregioninfo()
        }
    }
}
