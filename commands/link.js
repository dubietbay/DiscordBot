const Discord = require('discord.js');
const MongoClient = require('mongodb').MongoClient;
module.exports = {
    name: 'link',
    description: "this is a link command!",
    execute(message, args){
        let data = {ID: message.channel.id}
        const uri = "mongodb+srv://dubietbay:39611500DUDU@cluster0.vpqpg.mongodb.net/LinkedServers?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            client.connect(err => {
            if (err) throw err;
            const collection = client.db("LinkedServers").collection("server");
            collection.insertOne(data)
            client.close();
        });
        message.reply("Linked!")
    }
}