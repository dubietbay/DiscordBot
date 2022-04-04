const { MessageActionRow, MessageButton, MessageAttachment, MessageSelectMenu, Client} = require("discord.js");
const { loadImage, createCanvas } = require('canvas');
const fetch = require('node-fetch');
const db = require("quick.db");

module.exports = {
    name: "raid",
    description: "Displays raid time.",
    async execute(interaction, client) {
        function remindSetup(id, type, time) {
            db.set(`remind.${id}${type}`,Date.now() + time)
            const interval = setInterval(() => {
                if(Date.now() > db.fetch(`remind.${id}${type}`)){
                    db.delete(`remind.${id}${type}`)
                    client.users.cache.get(`${id}`).send(`Wake the 🤬 up samurai! We have a city to burn.. \n https://media.discordapp.net/attachments/744248081398366288/816514189811777577/reface-2021-03-03-10-33-52.gif`)
                    .catch(e => console.log(e))
                    clearInterval(interval)
                }
            }, 1000);
        }

        //time stuff
        var date_ob = new Date();
        var hours = date_ob.getUTCHours();
        var minutes = date_ob.getUTCMinutes();
        var hour = 1
        var minute = 60 - minutes
        var timeEnd = ""
        var region = ""
        if(hours == 12 || hours == 20 || hours == 4 || hours == 14 || hours == 22 || hours == 6 || hours == 16 || hours == 0 || hours == 8 || hours == 18 || hours == 2 || hours == 10) {
            hour = 0
        };
        switch (hours) {
            case 11:
            case 12:
            case 19:
            case 20:
            case 3:
            case 4:
                region = "./Temp/Kansai.png"
                break;
            case 13:
            case 14:
            case 21:
            case 22:
            case 5:
            case 6:
                region = "./Temp/Tohoku Kyushu.png"
                break;
            case 15:
            case 16:
            case 23:
            case 0:
            case 7:
            case 8:
                region = "./Temp/Kanto Shikoku.png"
                break;
            case 17:
            case 18:
            case 1:
            case 2:
            case 9:
            case 10:
                region = "./Temp/Chubu Chugoku.png"
                break;
            default:
                return;
        }
        //region stuff
        const locations = [
            {Name: 'kansai', ID: '561872248',X: 820,Y: 820},
            {Name: 'chubu', ID: '554670851',X: 1180,Y: 820},
            {Name: 'tohoku', ID: '903142964',X: 1550,Y: 370},
            {Name: 'kanto', ID: '1469503587',X: 1550,Y: 740},
            {Name: 'chugoku', ID: '2329809976',X: 65,Y: 370},          
            {Name: 'kyushu', ID: '1251162439',X: 65,Y: 740},
            {Name: 'shikoku', ID: '4620197176',X: 440,Y: 820}
        ];
        var fetches = []
        var regionInfos = []
        locations.forEach((el) => {
            fetches.push(
                fetch(`https://games.roblox.com/v1/games/${el.ID}/servers/Public?limit=100&sortOrder=Asc`)
                    .then(r => {
                        if(!r.ok) throw 'Invalid response!';
                        return r.json()
                    })
                    .then(e => {
                        var playing = 0
                        e.data.forEach(server => {
                            playing = playing + server.playing
                        });
                        regionInfos.push({Servers: (e.data.length).toString(), Playing: playing, X: el.X, Y: el.Y})
                    }).catch(er => console.error)
            )
        });
        Promise.all(fetches).then(async () => {
            const canvas = createCanvas(1920, 1080)
            const ctx = canvas.getContext('2d')
            const backGround = await loadImage(region)
            ctx.drawImage(backGround,0,0)
            ctx.fillStyle = "white"
            ctx.font = "36px sans-serif"
            ctx.fillText(hour.toString() + " hour : " + minute + " minute(s)",501,110)
            ctx.fillText((hour + 2).toString() + " hour : " + minute + " minute(s)",501,163)
            ctx.fillText((hour + 4).toString() + " hour : " + minute + " minute(s)",501,216)
            regionInfos.forEach(info => {
                ctx.fillText("Playing: "+info.Playing+"\nServers: "+info.Servers,info.X,info.Y)
            })
            const attachment = new MessageAttachment(canvas.toBuffer(), "raid.png")
            const row = new MessageActionRow();
            row.addComponents(
                new MessageButton()
                .setCustomId("nextraid")
                .setLabel("Remind 🟧 raid")
                .setStyle("PRIMARY"),
                new MessageButton()
                .setCustomId("nextnextraid")
                .setLabel("Remind 🟨 raid")
                .setStyle("PRIMARY"),
                new MessageButton()
                .setCustomId("nextnextnextraid")
                .setLabel("Remind 🟩 raid")
                .setStyle("PRIMARY")
            )
            const row2 = new MessageActionRow();
            row2.addComponents(
                new MessageSelectMenu()
                .setCustomId('timebefore')
                .setPlaceholder('Mins before raid start (default is 0)')
                .addOptions([
                    {
                        label: '5 mins',
                        description: 'Bot will dms 5 mins before raid start',
                        value: '300000',
                    },
                    {
                        label: '10 mins',
                        description: 'Bot will dms 10 mins before raid start',
                        value: '600000',
                    },
                    {
                        label: '15 mins',
                        description: 'Bot will dms 15 mins before raid start',
                        value: '900000',
                    },
                    {
                        label: '30 mins',
                        description: 'Bot will dms 30 mins before raid start',
                        value: '1800000',
                    },
                ]),
            )
            interaction.reply({ files: [attachment], components: [row2,row]})
            var beforetime = 0
            const collector = interaction.channel.createMessageComponentCollector({time: 120000})
            collector.on('collect', async collected => {
                if(collected.message.interaction.id === interaction.id) {
                    if (collected.isSelectMenu()) {
                        if(collected.user.id !== interaction.user.id){
                            return;
                        }
                        beforetime = parseInt(collected.values[0]);     
                        await collected.deferUpdate();
                    }
                    if (collected.isButton()) {
                        if(collected.user.id !== interaction.user.id){
                            return;
                        }
                        if (collected.customId === 'nextraid') {
                            row.components[0].setDisabled(true)
                            await interaction.editReply({ files: [attachment], components: [row2,row]})
                            interaction.followUp({content: "I will remind you in dms soon!", ephemeral: true})
                            remindSetup(collected.user.id,"next", hour*3600000 + (minute-1)*60000 - beforetime - 60000)
                        }
                        if (collected.customId === 'nextnextraid') {
                            row.components[1].setDisabled(true)
                            await interaction.editReply({ files: [attachment], components: [row2,row]})
                            interaction.followUp({content: "I will remind you in dms soon!", ephemeral: true})
                            remindSetup(collected.user.id,"nextnext", (hour+2)*3600000 + (minute-1)*60000 - beforetime)
                        }
                        if (collected.customId === 'nextnextnextraid') {
                            row.components[2].setDisabled(true)
                            await interaction.editReply({ files: [attachment], components: [row2,row]})
                            interaction.followUp({content: "I will remind you in dms soon!", ephemeral: true})
                            remindSetup(collected.user.id,"nextnextnext", (hour+4)*3600000 + (minute-1)*60000 - beforetime)
                        }
                        await collected.deferUpdate();
                    }
                }
            });
        })
    }
}
