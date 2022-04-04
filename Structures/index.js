const { Client, Intents, Collection } = require("discord.js");
const client = new Client({ intents: 0 });
const { promisify } = require("util");
const { glob } = require("glob");
const PG = promisify(glob);
const Ascii = require("ascii-table");
require("dotenv").config();

client.commands = new Collection();


["Events", "Commands"].forEach(handler => {
    require(`./Handlers/${handler}`)(client, PG, Ascii);
});
client.login(process.env.TOKEN);
