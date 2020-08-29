const Discord = require('discord.js');
const fetch = require('node-fetch');
const nbx = require("noblox.js");
module.exports = {
    name: 'lookfor',
    description: "this is a lookfor command!",
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
        var first = true
        function a(a) {
            if (first) {
                first = false
                message.channel.send(a);
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
                                    a(`${itemin} FOUND AT: ${el.Name} :face_with_monocle: \n ${itemin} is in server  have ${server.playing} players and ${server.ping} avg ping`) 
                                }else if (el.Name == 'menu' && server.playerIds.length == server.playerIds.indexOf(ids) + 1) {
                                    a('plr not found on lotrs')
                                }
                            });
                        });
                    })
            });
        }
        
        function startApp () {
            nbx.getIdFromUsername(args[0])
                .then(r => {
                    if(!r) throw message.channel.send('user not exist!')
                    finder(r)
                })
        }
        startApp()
    }
}