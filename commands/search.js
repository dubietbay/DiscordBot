const Discord = require('discord.js');
const fetch = require('node-fetch');
const nbx = require("noblox.js");
module.exports = {
    name: 'search',
    description: "this is a search command!",
    execute(message, args){ 
        const locations = ['561872248','554670851','903142964','1469503587','2329809976','2763010111','1251162439','4620197176','554664625'];
        const locationsname = ['Kyoto/Kansai','Chubu','Tohoku','Kanto','Chugoku','Mura','Kyushu','Shikoku','Menu screen'];


        
        async function startApp (message, args) {
            let userid = await nbx.getIdFromUsername(args[0])
            let av = await fetch(`https://www.roblox.com/headshot-thumbnail/image?userId=${userid}&width=420&height=420&format=png`)
            
        }
        startApp (message, args)
    }
}