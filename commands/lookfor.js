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


        let id = await noblox.getIdFromUsername(args[0])
        console.log(id)
        console.log("sex")
    }
}