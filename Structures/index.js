const { Client, Intents, Collection, Guild } = require("discord.js");
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
//     // Guilds.forEach(e => {
//     //     client.guilds.cache.get(e).leave()
//     // })
// });

// client.on("ready",async () => {
//     console.log(`Curently connected on (${client.guilds.cache.size}) servers:`);
//     const commandsList = Object.keys(commands)?.map((name) => commands[name]);

//     await Promise.all(client.guilds.cache.map(async (guild) => {
//         try {
//           await rest.put(Routes.applicationGuildCommands(client.user.id, guild.id), { body: commandsList });
//           console.log(` - ${guild.name} ✔️`);
//         } catch (error) {
//           console.log(` - ${guild.name} ❌`);
//           console.trace(error);
//         }
//       }));
// });
client.login(process.env.TOKEN);
