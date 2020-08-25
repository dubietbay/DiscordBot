const Discord = require('discord.js');
const fetch = require('node-fetch');
module.exports = {
    name: 'search',
    description: "this is a search command!",
    execute(message, args){     
        function getCurrentUser() {
            let element = document.getElementsByName("user-data")[0];
            if (element) {
                return [element.getAttribute("data-userid"), element.getAttribute("data-name").toLowerCase()];
            }
        
            return [];
        }

        function getUserIdFromName(name){
            return new Promise((res, rej)=>{
                fetch(`https://www.roblox.com/users/profile?username=${name}`)
                    .then(r => {
                        if(!r.ok) throw new error('Invalid response');
                        return r.url.match(/\d+/)[0];
                    })
                    .then(id => {
                        let data = getCurrentUser();
                        if (name.toLowerCase() != data[1] && id.toString() == data[0]){
                            isLoading = false;
                            rej('Error occured while fetching username: username does not exist');
                        } else {
                            res(id);
                        }
                    }).catch(e => {
                        console.error(e);
                        isLoading = false;
                        rej('Error occured while fetching username!');
                    })
            });
        }
        getUserIdFromName(args[0]).then(id => {
            message.channel.send(id)
        }).catch(er => {
            message.channel.send(er)
        })
    }
}