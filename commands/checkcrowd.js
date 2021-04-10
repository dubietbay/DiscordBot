const Discord = require('discord.js');
const fetch = require('node-fetch');
const MongoClient = require('mongodb').MongoClient;
module.exports = {
    name: 'checkcrowd',
    description: "this is a check command!",
    execute(Dclient){
        const embed = new Discord.MessageEmbed();
        let info = []
        embed.setTitle(`BREAKING NEWS!`);
        embed.setColor('#f4c871');
        embed.setAuthor('made by Dub', 'https://i.imgur.com/Rn9muMO.png', 'https://www.roblox.com/users/93839005/profile');
        embed.setThumbnail('https://t1.rbxcdn.com/1194a83cefa36aae9055f96b0165858e');
        embed.setTimestamp()
        const locations = [
            {Name: 'Kansai', ID: '561872248'},
            {Name: 'Chubu', ID: '554670851'},
            {Name: 'Tohoku', ID: '903142964'},
            {Name: 'Kanto', ID: '1469503587'},
            {Name: 'Chugoku', ID: '2329809976'},          
            {Name: 'Mura', ID: '2763010111'},
            {Name: 'Kyushu', ID: '1251162439'},
            {Name: 'Shikoku', ID: '4620197176'},
        ];

        function two() {
            if (info.length > 0){
                info.forEach(item => {
                    embed.addField(item.Head, item.Tail)
                })
                const uri = "mongodb+srv://dubietbay:39611500DUDU@cluster0.vpqpg.mongodb.net/LinkedServers?retryWrites=true&w=majority";
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
            }
        }

        locations.forEach(async (el) =>  {
            await fetch(`https://games.roblox.com/v1/games/${el.ID}/servers/Public?limit=100&sortOrder=Asc`)
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
                                var object = {Head: `Server ${servernumber} in ${Place}`, Tail: `Players count: ${PlrCount} \n Average player's ping: ${Ping}`}
                                info.push(object)
                            }
                        });
                    }   
                }).catch(er => console.error)
            if(el.Name == "Shikoku"){
                two()
            }
        });
    }
}