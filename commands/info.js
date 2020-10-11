const info = [
    {Name: 'Light Tosei', NameCall: 'lighttosei', Info: 'Wear: 0.1 \n Speed: -2.5 \n Defense: 55 \n Accuracy: -0.075 \n'}, 
    {Name: 'Light Tatami', NameCall: 'lighttatami', Info: 'Wear: 0.15 \n Speed: -1 \n Defense: 47.5 \n Accuracy: -0.0075 \n'}, 
    {Name: 'Tetsu Jingasa', NameCall: 'tetsujingasa', Info: 'Wear: 0.25 \n Speed: -0.4 \n Defense: 10 \n Accuracy: -0.025 \n'}, 
    {Name: 'Straw Kasa', NameCall: 'strawkasa', Info: 'Wear: 0.3 \n Speed: 0 \n Defense: 3 \n Accuracy: 0 \n'}, 
    {Name: 'Bajo Jingasa', NameCall: 'bajojingasa', Info: 'Wear: 0.225 \n Speed: -0.5 \n Defense: 12.5 \n Accuracy: -0.025 \n'}, 
    {Name: 'Heavy Tatami', NameCall: 'heavytatami', Info: 'Wear: 0.15 \n Speed: -2 \n Defense: 57.5 \n Accuracy: -0.025 \n'}, 
    {Name: 'Heavy Tosei', NameCall: 'heavytosei', Info: 'Wear: 0.1 \n Speed: -3.5 \n Defense: 65 \n Accuracy: -0.1 \n'}, 
    {Name: 'Straw Gasa', NameCall: 'strawgasa', Info: 'Wear: 0.3 \n Speed: 0 \n Defense: 4 \n Accuracy: 0 \n'}, 
    {Name: 'Tatami Kabuto', NameCall: 'tatamikabuto', Info: 'Wear: 0.225 \n Speed: -0.5 \n Defense: 10 \n Accuracy: -0.05 \n'}, 
    {Name: 'Sujibachi Kabuto', NameCall: 'sujibachikabuto', Info: 'Wear: 0.175 \n Speed: -0.75 \n Defense: 12.5 \n Accuracy: -0.075 \n'}, 
    {Name: 'Hanbo', NameCall: 'hanbo', Info: 'Defense: 5 \n Accuracy: -0.05 \n Speed: -0.5 \n Wear: 0 \n'}, 
    {Name: 'Happuri', NameCall: 'happuri', Info: 'Defense: 5 \n Accuracy: -0.05 \n Speed: -0.5 \n Wear: 0 \n'}, 
    {Name: 'Sashimono', NameCall: 'sashimono', Info: 'Wear: 0.125 \n Defense: 0 \n Speed: 0 \n Accuracy: 0 \n'}, 
    {Name: 'Menpo', NameCall: 'menpo', Info: 'Defense: 5 \n Accuracy: -0.05 \n Speed: -0.5 \n Wear: 0 \n'}, 
    {Name: 'Same Kabuto', NameCall: 'samekabuto', Info: 'Wear: 0.15 \n Speed: -1 \n Defense: 15 \n Accuracy: -0.1 \n'}, 
    {Name: 'Light Do-maru', NameCall: 'lightdo-maru', Info: 'Wear: 0.125 \n Speed: -1.5 \n Defense: 52.5 \n Accuracy: -0.05 \n'}, 
    {Name: 'Heavy Do-maru', NameCall: 'heavydo-maru', Info: 'Wear: 0.125 \n Speed: -3 \n Defense: 62.5 \n Accuracy: -0.085 \n'}, 
    {Name: 'Hishiodoshi Kabuto', NameCall: 'hishiodoshikabuto', Info: 'Defense: 15 \n Accuracy: -0.1 \n Speed: -1 \n Wear: 0.15 \n'}, 
    {Name: 'Heavy Kikko', NameCall: 'heavykikko', Info: 'Wear: 0.125 \n Speed: -2.25 \n Accuracy: -0.0375 \n Defense: 60 \n'}, 
    {Name: 'Light Kikko', NameCall: 'lightkikko', Info: 'Wear: 0.15 \n Defense: 50 \n Speed: -1.25 \n Accuracy: -0.0125 \n'}, 
    {Name: 'Hachimaki', NameCall: 'hachimaki', Info: 'Wear: 0.35 \n Speed: 0 \n Defense: 2 \n Accuracy: 0.075 \n'}, 
    {Name: 'Eboshi', NameCall: 'eboshi', Info: 'Wear: 0.315 \n Speed: 0 \n Defense: 4 \n Accuracy: 0.1 \n'}, 
    {Name: 'Retainer Menpo', NameCall: 'retainermenpo', Info: 'Wear: 0 \n Defense: 5 \n Speed: -0.5 \n Accuracy: -0.05 \n'}, 
    {Name: 'Kanashii Menpo', NameCall: 'kanashiimenpo', Info: 'Wear: 0 \n Defense: 5 \n Speed: -0.5 \n Accuracy: -0.05 \n'}, 
    {Name: 'Ureshii Menpo', NameCall: 'ureshiimenpo', Info: 'Wear: 0 \n Defense: 5 \n Speed: -0.5 \n Accuracy: -0.05 \n'}, 
    {Name: 'Heavy Gyorin', NameCall: 'heavygyorin', Info: 'Wear: 0.1 \n Speed: -3.5 \n Defense: 65 \n Accuracy: -0.1 \n'}, 
    {Name: 'Light Gyorin', NameCall: 'lightgyorin', Info: 'Wear: 0.1 \n Speed: -2.5 \n Defense: 55 \n Accuracy: -0.075 \n'}, 
    {Name: 'Heavy O-yoroi', NameCall: 'heavyo-yoroi', Info: 'Wear: 0.125 \n Speed: -3 \n Defense: 62.5 \n Accuracy: 0 \n'}, 
    {Name: 'Light O-yoroi', NameCall: 'lighto-yoroi', Info: 'Defense: 52.5 \n Accuracy: 0 \n Speed: -2 \n Wear: 0.125 \n'}, 
    {Name: 'Genpei Kabuto', NameCall: 'genpeikabuto', Info: 'Wear: 0.175 \n Defense: 12.5 \n Accuracy: 0.075 \n Speed: -0.5 \n'}, 
    {Name: 'Kusari Gusoku', NameCall: 'kusarigusoku', Info: 'Defense: 77.5 \n Accuracy: -0.125 \n Speed: -2 \n Wear: 0.15 \n'}, 
    {Name: 'Zukin', NameCall: 'zukin', Info: 'Wear: 0.225 \n Speed: 0 \n Defense: 10 \n Accuracy: 0 \n'}, 
    {Name: 'Balanced Yuigesa', NameCall: 'balancedyuigesa', Info: 'Defense: 2.5 \n Accuracy: 0.05 \n Speed: 0.5 \n Wear: 0 \n EnergyReduction: 25 \n'}, 
    {Name: '', NameCall: '', Info: 'Speed: -1 \n  \n Buffs: 30 Honor Bound'}
];
const SkillModifications = [
 {Name: 'Heavy Gyorin', Skill: 'Balanced Sojutsu Training', Info: 'Armor: +8 \n Speed: +0.4'},
 {Name: 'Heavy Tosei', Skill: 'Balanced Sojutsu Training', Info: 'Armor: +8 \n Speed: +0.4'},
 {Name: 'Hishiodoshi Kabuto', Skill: 'Balanced Sojutsu Training', Info: 'Armor: +4 \n Speed: +0.2'},
 {Name: 'Light Gyorin', Skill: 'Balanced Sojutsu Training', Info: 'Armor: +8 \n Speed: +0.4'},
 {Name: 'Light Tosei', Skill: 'Balanced Sojutsu Training', Info: 'Armor: +8 \n Speed: +0.4'},
 {Name: 'Same Kabuto', Skill: 'Balanced Sojutsu Training', Info: 'Armor: +4 \n Speed: +0.2'},
 {Name: 'Light Do-maru', Skill: 'Balanced Sojutsu Training', Info: 'Armor: +9.75 \n Speed: +0.3'},
 {Name: 'Heavy Do-maru', Skill: 'Balanced Sojutsu Training', Info: 'Armor: +9.75 \n Speed: +0.3'},
 {Name: 'Sujibachi Kabuto', Skill: 'Balanced Sojutsu Training', Info: 'Armor: +1.75 \n Speed: +0.2'},
 {Name: 'Honsanmai Su Yari', Skill: 'Balanced Sojutsu Training', Info: 'Speed: +1'},
 {Name: 'Soshu Su Yari', Skill: 'Balanced Sojutsu Training', Info: 'Speed: +1'},
 {Name: 'Maru Su Yari', Skill: 'Balanced Sojutsu Training', Info: 'Speed: +1'},
 {Name: 'Jumonji Yari', Skill: 'Balanced Sojutsu Training', Info: 'Speed: +1'},
 {Name: 'Heavy O-yoroi', Skill: 'Balanced Range Training', Info: 'Armor: +14 \n EnergyReduction: +10 \n Speed: +0.3'},
 {Name: 'Light O-yoroi', Skill: 'Balanced Range Training', Info: 'Armor: +14 \n EnergyReduction: +10 \n Speed: +0.3'},
 {Name: 'Master Hankyu', Skill: 'Balanced Range Training', Info: 'Speed: +0.85'},
 {Name: 'Master Daikyu', Skill: 'Balanced Range Training', Info: 'Speed: +0.85'},
 {Name: 'Journeyman Hankyu', Skill: 'Balanced Range Training', Info: 'Speed: +0.85'},
 {Name: 'Journeyman Daikyu', Skill: 'Balanced Range Training', Info: 'Speed: +0.85'},
 {Name: 'Apprentice Hankyu', Skill: 'Balanced Range Training', Info: 'Speed: +0.85'},
 {Name: 'Apprentice Daikyu', Skill: 'Balanced Range Training', Info: 'Speed: +0.85'},
 {Name: 'Crude Yumi', Skill: 'Balanced Range Training', Info: 'Speed: +0.85'},
 {Name: 'Genpei Kabuto', Skill: 'Balanced Range Training', Info: 'Armor: +3 \n EnergyReduction: +5 \n Speed: +0.3'},
 {Name: 'Genpei Kabuto', Skill: 'Balanced Medium Training', Info: 'Armor: +2.5 \n Speed: +0.25'},
 {Name: 'Heavy Do-maru', Skill: 'Balanced Medium Training', Info: 'Armor: +11 \n Speed: +0.5'},
 {Name: 'Heavy O-yoroi', Skill: 'Balanced Medium Training', Info: 'Armor: +11 \n Speed: +0.5'},
 {Name: 'Light Do-maru', Skill: 'Balanced Medium Training', Info: 'Armor: +11 \n Speed: +0.5'},
 {Name: 'Light O-yoroi', Skill: 'Balanced Medium Training', Info: 'Armor: +11 \n Speed: +0.5'},
 {Name: 'Sujibachi Kabuto', Skill: 'Balanced Medium Training', Info: 'Armor: +2.5 \n Speed: +0.25'},
 {Name: 'Heavy Tatami', Skill: 'Balanced Light Training', Info: 'Armor: +5 \n Speed: +0.5'},
 {Name: 'Light Tatami', Skill: 'Balanced Light Training', Info: 'Armor: +5 \n Speed: +0.5'},
 {Name: 'Heavy Kikko', Skill: 'Balanced Light Training', Info: 'Armor: +5 \n Speed: +0.5'},
 {Name: 'Light Kikko', Skill: 'Balanced Light Training', Info: 'Armor: +5 \n Speed: +0.5'},
 {Name: 'Tatami Kabuto', Skill: 'Balanced Light Training', Info: 'Armor: +2 \n Speed: +0.35'},
 {Name: 'Heavy Gyorin', Skill: 'Balanced Heavy Training', Info: 'Armor: +7.5 \n Speed: +0.5'},
 {Name: 'Heavy Tosei', Skill: 'Balanced Heavy Training', Info: 'Armor: +7.5 \n Speed: +0.5'},
 {Name: 'Hishiodoshi Kabuto', Skill: 'Balanced Heavy Training', Info: 'Armor: +3.75 \n Speed: +0.25'},
 {Name: 'Light Gyorin', Skill: 'Balanced Heavy Training', Info: 'Armor: +7.5 \n Speed: +0.5'},
 {Name: 'Light Tosei', Skill: 'Balanced Heavy Training', Info: 'Armor: +7.5 \n Speed: +0.5'},
 {Name: 'Same Kabuto', Skill: 'Balanced Heavy Training', Info: 'Armor: +3.75 \n Speed: +0.25'},
 {Name: 'Heavy O-yoroi', Skill: 'Balanced Energy Training', Info: 'Armor: +10.5 \n EnergyReduction: +15 \n Speed: +0.5'},
 {Name: 'Heavy Do-maru', Skill: 'Balanced Energy Training', Info: 'Armor: +10.5 \n EnergyReduction: +15 \n Speed: +0.5'},
 {Name: 'Light Do-maru', Skill: 'Balanced Energy Training', Info: 'Armor: +10.5 \n EnergyReduction: +15 \n Speed: +0.5'},
 {Name: 'Light O-yoroi', Skill: 'Balanced Energy Training', Info: 'Armor: +10.5 \n EnergyReduction: +15 \n Speed: +0.5'},
 {Name: 'Sujibachi Kabuto', Skill: 'Balanced Energy Training', Info: 'Armor: +3 \n Speed: +0.35'},
 {Name: 'Genpei Kabuto', Skill: 'Balanced Energy Training', Info: 'Armor: +3 \n Speed: +0.35'},
 {Name: 'Same Kabuto', Skill: 'Heavy Speed Training', Info: 'Armor: +2.5 \n Speed: +0.5'},
 {Name: 'Heavy Gyorin', Skill: 'Heavy Speed Training', Info: 'Armor: +5 \n Speed: +1'},
 {Name: 'Heavy Tosei', Skill: 'Heavy Speed Training', Info: 'Armor: +5 \n Speed: +1'},
 {Name: 'Light Gyorin', Skill: 'Heavy Speed Training', Info: 'Armor: +5 \n Speed: +1'},
 {Name: 'Light Tosei', Skill: 'Heavy Speed Training', Info: 'Armor: +5 \n Speed: +1'},
 {Name: 'Hishiodoshi Kabuto', Skill: 'Heavy Speed Training', Info: 'Armor: +2.5 \n Speed: +0.5'},
 {Name: 'Light Tosei', Skill: 'Heavy Defensive Training', Info: 'Armor: +10'},
 {Name: 'Light Gyorin', Skill: 'Heavy Defensive Training', Info: 'Armor: +10'},
 {Name: 'Heavy Gyorin', Skill: 'Heavy Defensive Training', Info: 'Armor: +10'},
 {Name: 'Heavy Tosei', Skill: 'Heavy Defensive Training', Info: 'Armor: +10'},
 {Name: 'Same Kabuto', Skill: 'Heavy Defensive Training', Info: 'Armor: +5'},
 {Name: 'Hishiodoshi Kabuto', Skill: 'Heavy Defensive Training', Info: 'Armor: +5'},
 {Name: 'Tatami Kabuto', Skill: 'Light Defensive Training', Info: 'Armor: +2.5'},
 {Name: 'Heavy Kikko', Skill: 'Light Defensive Training', Info: 'Armor: +7.5'},
 {Name: 'Heavy Tatami', Skill: 'Light Defensive Training', Info: 'Armor: +7.5'},
 {Name: 'Light Kikko', Skill: 'Light Defensive Training', Info: 'Armor: +7.5'},
 {Name: 'Light Tatami', Skill: 'Light Defensive Training', Info: 'Armor: +7.5'},
 {Name: 'Heavy Kikko', Skill: 'Light Speed Training', Info: 'Armor: +2.5 \n Speed: +1'},
 {Name: 'Heavy Tatami', Skill: 'Light Speed Training', Info: 'Armor: +2.5 \n Speed: +1'},
 {Name: 'Light Kikko', Skill: 'Light Speed Training', Info: 'Armor: +2.5 \n Speed: +1'},
 {Name: 'Light Tatami', Skill: 'Light Speed Training', Info: 'Armor: +2.5 \n Speed: +1'},
 {Name: 'Tatami Kabuto', Skill: 'Light Speed Training', Info: 'Armor: +1.5 \n Speed: +0.5'},
 {Name: 'Heavy Do-maru', Skill: 'Medium Defensive Training', Info: 'Armor: +12'},
 {Name: 'Light Do-maru', Skill: 'Medium Defensive Training', Info: 'Armor: +12'},
 {Name: 'Heavy O-yoroi', Skill: 'Medium Defensive Training', Info: 'Armor: +12'},
 {Name: 'Light O-yoroi', Skill: 'Medium Defensive Training', Info: 'Armor: +12'},
 {Name: 'Sujibachi Kabuto', Skill: 'Medium Defensive Training', Info: 'Armor: +3'},
 {Name: 'Genpei Kabuto', Skill: 'Medium Defensive Training', Info: 'Armor: +3'},
 {Name: 'Heavy O-yoroi', Skill: 'Medium Speed Training', Info: 'Armor: +9 \n Speed: +0.25'},
 {Name: 'Heavy Do-maru', Skill: 'Medium Speed Training', Info: 'Armor: +10 \n Speed: +1'},
 {Name: 'Light Do-maru', Skill: 'Medium Speed Training', Info: 'Armor: +10 \n Speed: +1'},
 {Name: 'Light O-yoroi', Skill: 'Medium Speed Training', Info: 'Armor: +9 \n Speed: +0.25'},
 {Name: 'Sujibachi Kabuto', Skill: 'Medium Speed Training', Info: 'Armor: +2 \n Speed: +0.5'},
 {Name: 'Genpei Kabuto', Skill: 'Medium Speed Training', Info: 'Armor: +1 \n Speed: +0.15'},
];

const Discord = require('discord.js');
module.exports = {
    name: 'info',
    description: "this is a info command!",
    execute(message, args){
        const itemin = args[0].toLowerCase();
        const result = [];
        function ez(x) {
            e = "";
            info.forEach((item) => {
              if (item.NameCall == x) {
                e = item.Name
              }
            })
            return e
        }

        function ac(value) {
            var tags = []
            var result = ''
            info.forEach((item) => {
              tags.push(item.NameCall)
            })
            var n= tags.length;
            l=value.length;
            for (var i = 0; i<n; i++) { 
              if(((tags[i].toLowerCase()).indexOf(value.toLowerCase()))>-1) 
              {
                result = result + tags[i] + '\n'
              } 
            }
            return result
        }

        info.forEach((item) => {
            if (item.NameCall == itemin) {
               result.push(item)
               result.push(item.Name)
            }
         });

        if (!result.length) {
            if(!ac(itemin).length) {
              return message.reply('I dont know that item (ꐦ ´͈ ᗨ `͈ ) (try short name of the item maybe)')
            }else{
              return  message.reply('Did you mean:'+'\n'+ac(itemin)) 
            }
        }
        const embed = new Discord.MessageEmbed();
        embed.setTitle('Item: '+ez(itemin));
        embed.setColor('#f4c871');
        embed.setAuthor('made by Dub', 'https://i.imgur.com/Rn9muMO.png', 'https://www.roblox.com/users/93839005/profile');
        embed.setThumbnail('https://t1.rbxcdn.com/1194a83cefa36aae9055f96b0165858e');
        embed.addField('(normal quality) Info: ',result[0].Info);
        SkillModifications.forEach(e => {
          if (e.Name == result[1]) {
            embed.addField(e.Skill, e.Info)
          }
        });
        message.channel.send(embed); 
    }
}