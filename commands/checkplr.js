const Discord = require('discord.js');
const fetch = require('node-fetch');
const noblox = require("noblox.js");
const MongoClient = require('mongodb').MongoClient;
module.exports = {
    name: 'checkplr',
    description: "this is a check command!",
    execute(Dclient){
        const embed = new Discord.MessageEmbed();
        let info = []
        let already = 0
        embed.setTitle(`BREAKING NEWS!`);
        embed.setColor('#f4c871');
        embed.setAuthor('made by Dub', 'https://i.imgur.com/Rn9muMO.png', 'https://www.roblox.com/users/93839005/profile');
        embed.setThumbnail('https://t1.rbxcdn.com/1194a83cefa36aae9055f96b0165858e');
        embed.setTimestamp()
        const id = ['29266804','92916701','331776088','52698609','8412597','749327','282009961','1295651237'];
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
        
        function two() {
            if (info.length > 0 && already == 0){
                console.log(info)
                info.forEach(item => {
                    embed.addField(item.Head, item.Tail)
                })
                const uri = process.env.DATABASE_URL;
                const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
                    client.connect(async err => {
                    if (err) throw err;
                    const collection = client.db("LinkedServers").collection("server");
                    const search = await collection.findOne({Name:"CrowdCheck"})
                    IDlist = search.IDs
                    client.close();
                    search.IDs.forEach(ID => {
                        Dclient.channels.cache.get(ID.toString()).send(embed)
                    })
                });
                already = 1
            }
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
                        }else{
                            pee.Collection[0].CurrentPlayers.forEach(async (plr) => {
                                if(plr.Thumbnail.Url == avatar) {
                                    let object = {Head: `player ${name} found!`, Tail:`in ${e.Name} at server ${a+1}.`}
                                    info.push(object)
                                }
                            })
                            a = a + 1
                        }
                    }).catch((er) => {
                        console.log(er)
                    }) 
                }
                if (e.Name == "Menu Screen"){
                    two()
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

        async function getnamefromid(id) {
            await noblox.getUsernameFromId(id)
            .then((re) => {
                getAvatar(id, re)
            }).catch((er) => {
                console.log(er)
            });
        }
        // id.forEach(async (e)=>{
        //     await fetch(`https://api.roblox.com/users/${e}/onlinestatus/`)
        //     .then(r => {
        //         if(!r.ok) throw 'Invalid response!';
        //         return r.json()
        //     })
        //     .then(a =>{
        //         if(a.IsOnline){
        //             getnamefromid(e)
        //         }
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     });
        // })

        id.forEach(async (e)=>{
            await fetch(`https://presence.roblox.com/v1/presence/users`,{
                method: 'POST',
                headers: {
                    userIds: [282009961]
            }})
            .then(r => {
                if(!r.ok) throw 'Invalid response!';
                return r.json()
            })
            .then(a =>{
                console.log(a)
            })
            .catch((err) => {
                console.log(err)
            });
        })
    }
}