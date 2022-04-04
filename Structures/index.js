const { Client, Intents, Collection } = require("discord.js");
const client = new Client({ intents: Intents.FLAGS.GUILDS });
const { promisify } = require("util");
const { glob } = require("glob");
const PG = promisify(glob);
const Ascii = require("ascii-table");
require("dotenv").config();

client.commands = new Collection();


["Events", "Commands"].forEach(handler => {
    require(`./Handlers/${handler}`)(client, PG, Ascii);
});

// client.on("ready", () => {
//     const Guilds = client.guilds.cache.map(guild => guild.id);
//     console.log(Guilds)
//     Guilds.forEach(e => {
//         client.guilds.cache.get(e).leave()
//     })
// });
client.login(process.env.TOKEN);
