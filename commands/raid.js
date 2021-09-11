const Discord = require('discord.js');
module.exports = {
    name: 'raid',
    description: "this is a raid command!",
    execute(message, args){
        let date_ob = new Date();
        let hours = date_ob.getUTCHours();
        let minutes = date_ob.getUTCMinutes();
        var hour = "1 hour :"
        var minute = minutes
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
        function getHourCloseto(first,firstp,second,secondp,third,thirdp){
            if (hours == first || hours == firstp || hours == second || hours == secondp || hours == third || hours == thirdp) {return minutes/60}
            else{
                a = 1
                for (let i = hours; i <= 24; i++) {
                    a++
                    if (i == 24) i = 0;
                    if (i == first) {return a;}
                    if (i == second) {return a;}
                    if (i == third) {return a;}
                }
            }
        }
        function timeConvert(n) {
            var num = n;
            var hours = (num / 60);
            var rhours = Math.floor(hours);
            var minutes = (hours - rhours) * 60;
            var rminutes = Math.round(minutes);
            return rhours + " hour(s) and " + rminutes + " minute(s).";
        }
        const embed = new Discord.MessageEmbed();
            embed.setTitle('Current lotrs raids:');
            embed.setColor('#f4c871');
            embed.setAuthor('made by Dub', 'https://i.imgur.com/Rn9muMO.png', 'https://www.roblox.com/users/93839005/profile');
            embed.setThumbnail('https://t1.rbxcdn.com/1194a83cefa36aae9055f96b0165858e');
            embed.setTimestamp()
        if (args[0]) {
            var region = args[0].toLowerCase();
            switch (region) {
                case "kansai":
                    embed.addField("Kansai",">lookat Kansai (for more info)",true)
                    embed.addField("Time left until raid: " + timeConvert((getHourCloseto(11,12,19,20,3,4) * 60 - minutes)),".")
                    break;
                case "tohoku":
                case "kyushu":
                    embed.addField("Tohoku",">lookat Tohoku (for more info)",true)
                    embed.addField("Kyushu",">lookat Kyushu (for more info)",true)
                    embed.addField("Time left until raid: " + timeConvert((getHourCloseto(13,14,21,22,5,6) * 60 - minutes)),".")
                    break;
                case "kanto":
                case "shikoku":
                    embed.addField("Kanto",">lookat Kanto (for more info)",true)
                    embed.addField("Shikoku",">lookat Shikoku (for more info)",true)
                    embed.addField("Time left until raid: " + timeConvert((getHourCloseto(15,16,23,0,7,8) * 60 - minutes)),".")
                    break;
                case "chubu":
                case "chugoku":
                    embed.addField("Chubu",">lookat Chubu (for more info)",true)
                    embed.addField("Chugoku",">lookat Chugoku (for more info)",true)
                    embed.addField("Time left until raid: " + timeConvert((getHourCloseto(17,18,1,2,9,10) * 60 - minutes)),".")
                    break;
                default:
                    embed.addField("error");
            }
        }
        else{
            var time = getTimeRemaining(getNextSunday())
            if(hours == 12 || hours == 20 || hours == 4 || hours == 14 || hours == 22 || hours == 6 || hours == 16 || hours == 0 || hours == 8 || hours == 18 || hours == 2 || hours == 10) {
                hour = ""
                minute = 60 - minutes
            };
            switch (hours) {
                case 11:
                case 12:
                case 19:
                case 20:
                case 3:
                case 4:
                    embed.addField("Kansai",">lookat Kansai (for more info)",true)
                    embed.addField("Time left until raid: " + hour + " " + minute + " minute","Upcoming raids:")
                    embed.addField("Tohoku",">lookat Tohoku (for more info)",true)
                    embed.addField("Kyushu",">lookat Kyushu (for more info)",true)
                    break;
                case 13:
                case 14:
                case 21:
                case 22:
                case 5:
                case 6:
                    embed.addField("Tohoku",">lookat Tohoku (for more info)",true)
                    embed.addField("Kyushu",">lookat Kyushu (for more info)",true)
                    embed.addField("Time left until raid: " + hour + " " + minute + " minute","Upcoming raids:")
                    embed.addField("Kanto",">lookat Kanto (for more info)",true)
                    embed.addField("Shikoku",">lookat Shikoku (for more info)",true)
                    break;
                case 15:
                case 16:
                case 23:
                case 0:
                case 7:
                case 8:
                    embed.addField("Kanto",">lookat Kanto (for more info)",true)
                    embed.addField("Shikoku",">lookat Shikoku (for more info)",true)
                    embed.addField("Time left until raid: " + hour + " " + minute + " minute","Upcoming raids:")
                    embed.addField("Chubu",">lookat Chubu (for more info)",true)
                    embed.addField("Chugoku",">lookat Chugoku (for more info)",true)
                    break;
                case 17:
                case 18:
                case 1:
                case 2:
                case 9:
                case 10:
                    embed.addField("Chubu",">lookat Chubu (for more info)",true)
                    embed.addField("Chugoku",">lookat Chugoku (for more info)",true)
                    embed.addField("Time left until raid: " + hour + " " + minute + " minute","Upcoming raids:")
                    embed.addField("Kansai",">lookat Kansai (for more info)",true)
                    break;
                default:
                    embed.addField("error")
            }
            embed.addField("Time until the week resets: ", `${time.days} days : ${time.hours} hours : ${time.minutes} minutes : ${time.seconds} seconds`)
        }
        message.channel.send(embed);
    }
}