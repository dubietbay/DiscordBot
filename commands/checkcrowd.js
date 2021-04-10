const Discord = require('discord.js');
const fetch = require('node-fetch');
module.exports = {
    name: 'checkcrowd',
    description: "this is a check command!",
    execute(message, args){
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

        locations.forEach(el => {
            fetch(`https://games.roblox.com/v1/games/${el.ID}/servers/Public?limit=100&sortOrder=Asc`)
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
                            if (PlrCount >= 15){
                                message.channel.send(`${PlrCount} ${servernumber} ${Ping} ${Place}`)
                            }
                        });
                    }   
                }).catch(er => console.error)
        });
    }
}