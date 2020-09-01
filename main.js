const Discord = require('discord.js');
const Sequelize = require('sequelize');
const client = new Discord.Client();
const prefix = '>';
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command)
}

const sequelize = new Sequelize('database', 'user', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false, 
	storage: 'database.sqlite',
});

const Tags = sequelize.define('tags', {
	name: {
		type: Sequelize.STRING,
		unique: true,
	},
	description: Sequelize.TEXT,
	username: Sequelize.STRING,
	usage_count: {
		type: Sequelize.INTEGER,
		defaultValue: 0,
		allowNull: false,
	},
});

client.once('ready', () => {
    console.log('checker is online!');
    client.user.setActivity('Prefix: >')
    Tags.sync();
});

client.on('message',async message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
        
    if(command === 'raid'){
        client.commands.get('raid').execute(message, args);
    }

    else if (command === 'help'){
        client.commands.get('help').execute(message, args);
    }

    else if (command === 'hheeggeell'){
        message.reply('DONT TOUCH MY WIFE >:(');
    }
    
    else if (command === 'craft') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        client.commands.get('craft').execute(message, args)
    }

    else if (command === 'lookat') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        client.commands.get('lookat').execute(message, args)
    }

    else if (command === 'lookfor') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        client.commands.get('lookfor').execute(message, args)        
    }

    else if (command === 'info') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        client.commands.get('info').execute(message, args)        
    }

    else if (command === 'servers') {
            var serverArray = client.guilds
                for(i = 0; i < serverArray.length; i++) {
                    serverArray[i].fetchInvites().then(invites => {
                    invites.map(invite => {
                    print("Invite link: " + invite.url);
                });
            });
        }       
    }

    else if (command === 'addtag') {
        const tagName = args[0]
        const tagDescription = args[1]

        try {
        	// equivalent to: INSERT INTO tags (name, description, username) values (?, ?, ?);
        	const tag = await Tags.create({
        		name: tagName,
        		description: tagDescription,
        		username: message.author.username,
        	});
        	return message.reply(`Tag ${tag.name} added.`);
        }
        catch (e) {
        	if (e.name === 'SequelizeUniqueConstraintError') {
        		return message.reply('That tag already exists.');
        	}
        	return message.reply('Something went wrong with adding a tag.');
        }
    } 
    else if (command === 'tag') {
        const tagName = args[0];

        // equivalent to: SELECT * FROM tags WHERE name = 'tagName' LIMIT 1;
        const tag = await Tags.findOne({ where: { name: tagName } });
        if (tag) {
        	// equivalent to: UPDATE tags SET usage_count = usage_count + 1 WHERE name = 'tagName';
        	tag.increment('usage_count');
        	return message.channel.send(tag.get('description'));
        }
        return message.reply(`Could not find tag: ${tagName}`);
    } 
    else if (command === 'edittag') {
        const tagName = args[0];
        const tagDescription = args[1];

        // equivalent to: UPDATE tags (descrption) values (?) WHERE name='?';
        const affectedRows = await Tags.update({ description: tagDescription }, { where: { name: tagName } });
        if (affectedRows > 0) {
        	return message.reply(`Tag ${tagName} was edited.`);
        }
        return message.reply(`Could not find a tag with name ${tagName}.`);
    } 
    else if (command === 'taginfo') {
        const tagName = args[0];

        // equivalent to: SELECT * FROM tags WHERE name = 'tagName' LIMIT 1;
        const tag = await Tags.findOne({ where: { name: tagName } });
        if (tag) {
            return message.channel.send(`${tagName} was created by ${tag.username} at ${tag.createdAt} and has been used ${tag.usage_count} times.`);
        }
        return message.reply(`Could not find tag: ${tagName}`);
    } 
    else if (command === 'showtags') {
        // equivalent to: SELECT name FROM tags;
        const tagList = await Tags.findAll({ attributes: ['name'] });
        const tagString = tagList.map(t => t.name).join(', ') || 'No tags set.';
        return message.channel.send(`List of tags: ${tagString}`);
    } 
    else if (command === 'removetag') {
        const tagName = args[0];
        // equivalent to: DELETE from tags WHERE name = ?;
        const rowCount = await Tags.destroy({ where: { name: tagName } });
        if (!rowCount) return message.reply('That tag did not exist.');

        return message.reply('Tag deleted.');
    }

});

client.login(process.env.token);
//client.login('NzQ3Mjg1MjM4MDY5MDY3ODI2.X0MpnA.Vvq0qUNikCqZnFfq1kmW4lZ1tC4');