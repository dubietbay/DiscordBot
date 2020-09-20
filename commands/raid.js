const Discord = require('discord.js');
module.exports = {
    name: 'raid',
    description: "this is a raid command!",
    execute(message, args){
        let date_ob = new Date();
        let hours = date_ob.getUTCHours();
        let minutes = date_ob.getUTCMinutes();
        var hour = "1 hour :"
        var minute
        function getNextSunday() {
            var now = new Date();
            var nextSaturday = new Date();
            nextSaturday.setDate(now.getUTCDate() + (7 - now.getUTCDay() + 7) % 7 + 1);
            nextSaturday.setHours(7, 0, 0, 0);
            return nextSaturday;
        }
         function getTimeRemaining(endtime) {
           var t = Date.parse(endtime) - Date.parse(new Date());
           var seconds = Math.floor((t / 1000) % 60);
           var minutes = Math.floor((t / 1000 / 60) % 60);
           var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
           var days = Math.floor(t / (1000 * 60 * 60 * 24));
           return {
             'total': t,
             'days': days,
             'hours': hours,
             'minutes': minutes,
             'seconds': seconds
           };
        }
        var time = getTimeRemaining(getNextSunday())
        if(hours > 12) hours = hours - 12;
        const embed = new Discord.MessageEmbed();
        embed.setTitle('Current lotrs raids:');
        embed.setColor('#f4c871');
        embed.setAuthor('made by Dub', 'https://i.imgur.com/Rn9muMO.png', 'https://www.roblox.com/users/93839005/profile');
        embed.setThumbnail('https://t1.rbxcdn.com/1194a83cefa36aae9055f96b0165858e');
        embed.setTimestamp()
        if(hours == 3 || hours == 9 || hours == 5 || hours == 11 || hours == 7 || hours == 1) hour = ""
        minute = 60 - minutes
        switch (hours) {
            case 2:
            case 3:
            case 8:
            case 9:
                embed.addField("Tohoku",">lookat Tohoku (for more info)",true)
                embed.addField("Kansai",">lookat Kansai (for more info)",true)
                embed.addField("Time left until raid: " + hour + " " + minute + " minute","Upcomming raids:")
                embed.addField("Kanto",">lookat Kanto (for more info)",true)
                embed.addField("Chugoku",">lookat Chugoku (for more info)",true)
                embed.addField("Shikoku",">lookat Shikoku (for more info)",true)
                break;
            case 4:
            case 5:
            case 10:
            case 11:
                embed.addField("Kanto",">lookat Kanto (for more info)",true)
                embed.addField("Chugoku",">lookat Chugoku (for more info)",true)
                embed.addField("Shikoku",">lookat Shikoku (for more info)",true)
                embed.addField("Time left until raid: " + hour + " " + minute + " minute","Upcomming raids:")
                embed.addField("Chubu",">lookat Chubu (for more info)",true)
                embed.addField("Kyushu",">lookat Kyushu (for more info)",true)
                break;
            case 6:
            case 7:
            case 12:
            case 1:
            case 0:
                embed.addField("Chubu",">lookat Chubu (for more info)",true)
                embed.addField("Kyushu",">lookat Kyushu (for more info)",true)
                embed.addField("Time left until raid: " + hour + " " + minute + " minute","Upcomming raids:")
                embed.addField("Tohoku",">lookat Tohoku (for more info)",true)
                embed.addField("Kansai",">lookat Kansai (for more info)",true)
                break;
            default:
                embed.addField("error")
        }
        embed.addField("Time until the week resets: ", `${time.days} days : ${time.hours} hours : ${time.minutes} minutes : ${time.seconds} seconds`)
        message.channel.send(embed);
    }
}