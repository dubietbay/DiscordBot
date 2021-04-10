const Discord = require('discord.js');
const fetch = require('node-fetch');
const noblox = require("noblox.js");
const MongoClient = require('mongodb').MongoClient;
module.exports = {
    name: 'checkplr',
    description: "this is a check command!",
    execute(Dclient){
        const id = ['29266804','92916701','331776088','52698609','8412597','749327','282009961'];
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
        async function getnamefromid(id) {
            await noblox.getUsernameFromId(id)
            .then((re) => {
                return re
            }).catch((er) => {
                console.log(er)
            });
        }

        async function findserver(avatar, id) {
            locations.forEach(async (e) => {
                let a = 0
                while (a>=0) {
                    await noblox.http(`https://www.roblox.com/games/getgameinstancesjson?placeId=${e.ID}&startIndex=${a}`, { 
                    method: "GET",
                    headers: {
                        cookie: `.ROBLOSECURITY=${process.env.COOKIE}`
                    }}).then((re) => {
                        var pee = JSON.parse(re)
                            pee.Collection[0].CurrentPlayers.forEach(async (plr) => {
                                if(plr.Thumbnail.Url == avatar) {
                                    Dclient.channels.cache.get("799919434998743060").send(`player ${getnamefromid(id)} found in ${e.Name} at server ${a+1}.`)
                                }
                            })
                            a = a + 1
                    }).catch((er) => {
                        console.log(er)
                    }) 
                }
            });
        }

        async function getAvatar(id) {
            await fetch(`https://www.roblox.com/headshot-thumbnail/image?userId=${id}&width=48&height=48&format=png`)
            .then((result) => {
                findserver(result.url, id)
            }).catch((err) => {
                console.log(err)
            });
        }

        id.forEach(async (e)=>{
            await fetch(`https://api.roblox.com/users/${e}/onlinestatus/`)
            .then((result) => {
               if(result.IsOnline){
                   getAvatar(e)
               }
            }).catch((err) => {
                console.log(err)
            });
        })
    }
}