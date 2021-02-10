const Discord = require('discord.js');
const fetch = require('node-fetch');
const noblox = require("noblox.js");
const fs = require('fs');
const Jimp = require('jimp');
const { waitForDebugger } = require('inspector');
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

        async function Imager(list) {
            const image = await Jimp.read('./temp/background.png')
            const lol = await Jimp.read(`${list[0]}`)
                image.composite(lol, 0, 0);
                const idk = await image.getBuffer(Jimp.MIME_PNG);
                //image.writeAsync(`./temp/${message.author.id}.png`);
                //const savedimg = fs.readFileSync(`./temp/${message.author.id}.png`)
                const attachment = new Discord.MessageAttachment(idk)
                message.reply('here bitch', attachment)
                //fs.unlinkSync(`./temp/${message.author.id}.png`)
        }

        async function getserverinfo(ID) {
            await noblox.http(`https://www.roblox.com/games/getgameinstancesjson?placeId=${ID}&startIndex=${args[1]-1}`, { 
                method: "GET",
                headers: {
                    cookie: `.ROBLOSECURITY=${process.env.COOKIE}`
                }
            }).then(e => {
                var pee = JSON.parse(e)
                var list = [];
                pee.Collection[args[1]-1].CurrentPlayers.forEach(plr => {
                    list.push(plr.Thumbnail.Url) 
                })
                Imager(list)
            }).catch(er => {
                console.log(er)
            })
        }

        if (args[1]) {
            if (isNaN(parseInt(args[1]))) {
                return message.reply('that doesn\'t seem to be a valid number.');
            }
            locations.forEach((el) => {
                if (el.Name == itemin) {
                    getserverinfo(el.ID)
                }
            });
        }else {
            getregioninfo()
        }
    }
}
