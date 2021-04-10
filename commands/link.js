const Discord = require('discord.js');
const MongoClient = require('mongodb').MongoClient;
module.exports = {
    name: 'link',
    description: "this is a link command!",
    execute(message, args){
        const uri = process.env.DATABASE_URL;
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            client.connect(err => {
            if (err) throw err;
            const collection = client.db("LinkedServers").collection("server");
            const query = {Name:"CrowdCheck"}
            if (args == "add"){
                collection.updateOne(
                    query,
                    { $addToSet: {IDs: message.channel.id} },
                )
                .then(e => {
                    client.close();
                    message.reply("Linked!")
                })
            }else if (args == "remove") {
                collection.updateOne(
                    query,
                    { $pull: {IDs: message.channel.id} },
                )
                .then(e => {
                    client.close();
                    message.reply("Removed!")
                })
            }
        });
    }
}