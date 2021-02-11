const Discord = require('discord.js');
const fetch = require('node-fetch');
const noblox = require("noblox.js");
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

        async function getidfromname() {
            await noblox.getIdFromUsername(args[1])
            .then((re) => {
                getAvatar(re, args[1])
            }).catch((er) => {
                message.reply("Error: User not found")
            });
        }

        async function getnamefromid() {
            await noblox.getUsernameFromId(args[1])
            .then((re) => {
                getAvatar(args[1], re)
            }).catch((er) => {
                message.reply("Error: Id not found")
            });
        }

        async function findserver(avatar, name) {
            locations.forEach(async (e) => {
                let a = 0
                while (a>=0) {
                    await noblox.http(`https://www.roblox.com/games/getgameinstancesjson?placeId=${e.ID}&startIndex=${a}`, { 
                    method: "GET",
                    headers: {
                        cookie: `.ROBLOSECURITY=${process.env.COOKIE}`
                    }}).then((re) => {
                        var pee = JSON.parse(re)
                        if (pee.Collection.length === 0) {
                            a = -1
                        } else {
                            pee.Collection[0].CurrentPlayers.forEach(async (plr) => {
                                if(plr.Thumbnail.Url == avatar) {
                                    message.reply(`plr ${name} found in ${e.Name} at server ${a+1}`)
                                }
                            })
                            a = a + 1
                        }
                    }).catch((er) => {
                        console.log(er)
                    }) 
                }
            });
        }

        async function getAvatar(id, name) {
            await fetch(`https://www.roblox.com/headshot-thumbnail/image?userId=${id}&width=48&height=48&format=png`)
            .then((result) => {
                findserver(result.url, name)
            }).catch((err) => {
                console.log(err)
            });
        }

        async function Start() {
            if (args[0] == "name"){
                getidfromname()
            }else if (args[0] == "id"){    
                getnamefromid()
            }
        }

        if (args[0] == "name" || args[0] == "id") {
            Start()
        }else {
            message.reply(">lookfor [name/id] [name/id]")
        }
    }
}