const Discord = require('discord.js');
const moment = require("moment");  
const fs = require("fs");      
const dateFormat = require('dateformat');
const client = new Discord.Client(); 
const Canvas = require("canvas"); //npm i canvas
const prefix = "$"

client.on('guildMemberAdd', member=> {
    client.channels.get("514538835917406208").send(` **  ${member} . - # Welcome To, Debra :sparkles: :cloud: .** `);

    });

var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) })
}
client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.find("name", "!!")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        })
    })
})
client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.find('name', 'debra');
    if (!channel) {
        console.log("!channel fails");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('made it till here!');
    var guild;
    while (!guild)
        guild = client.guilds.find("name", "!!")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
                    console.log(3);
                    console.log(`${member} joined over ${Invite.inviter}'s invite ${Invite.code}`)
 channel.send(`** Joined By : # ${Invite.inviter}   ** `)            
 }
            dat[Inv] = Invite.uses;
        })
    })
});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**Welcome To, Debra :sparkles: :cloud: . **.'
   ${member}`) 
}).catch(console.error)
})

client.on("guildMemberAdd", m => {
    if (datediff(parseDate(moment(m.user.createdTimestamp).format('l')), parseDate(moment().format('l'))) < 30) {
        m.ban();
    };
    function parseDate(str) {
        var mdy = str.split('/');
        return new Date(mdy[2], mdy[0]-1, mdy[1]);
    };
    
    function datediff(first, second) {
        return Math.round((second-first)/(1000*60*60*24));
    };
});

var ss = 0;
 
client.on('voiceStateUpdate', (o,n) => {
    if (o.voiceChannel && !n.voiceChannel) {
        ss-=1
        n.guild.channels.get("514746299229143042").edit({
            name : "# Debra Online. : [" + ss+ "]"
        })
    };
    if (n.voiceChannel && !o.voiceChannel) {
        ss+=1
        n.guild.channels.get("514746299229143042").edit({
            name : "# Debra Online. : [" + ss+ "]"
        })
    }
})
client.on("ready", () => {
    client.guilds.get("514468337582080011").members.forEach(m => {
        if (m.voiceChannel) {
            ss+=1
        };
        client.channels.get("514746299229143042").edit({
            name : "# Debra Online. : [" + ss+ "]"
        })
    });
 
});


client.on('message', function(message) {
	const myID = "368768446327947265";
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "sn")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('**آكتـب الحالة التي تريدهـآ..**');
        client.user.setUsername(args);
        message.channel.send('**SetName,Done!**').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "st")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('**آكتـب الحالة التي تريدهـآ..**');
        client.user.setGame(args , 'https://twitch.tv/6xlez1');
        message.channel.send('**Streaming,Done!🎶**').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "pl")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('**آكتـب الحالة التي تريدهـآ..**');
        client.user.setGame(args);
        message.channel.send('**Playing,Done!🎶**').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "li")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('**آكتـب الحالة التي تريدهـآ..**');
        client.user.setActivity(args, {type:'LISTENING'});
        message.channel.send('**Listening,Done!🎶**').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "wa")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('**آكتـب الحالة التي تريدهـآ..**');
        client.user.setActivity(args, {type:'WATCHING'});
        message.channel.send('**Watching,Done!🎶**').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "sa")) {
				        if(message.author.id !== myID) return;
        client.user.setAvatar(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
                if(!args) return message.reply('**آكتـب الحالة التي تريدهـآ..**');
           msg.delete(5000);
          message.delete(5000);
        });
    }
});

client.on('message', message => {
         if(message.content === prefix + "قفل") {
                             if(!message.channel.guild) return message.reply('** This command only for servers**');
  
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false
  
                }).then(() => {
                    message.reply("**تـم إغلآقق آلرومم ..**")
                });
                  }
      if(message.content === prefix + "فتح") {
                          if(!message.channel.guild) return message.reply('** This command only for servers**');
  
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: true
  
                }).then(() => {
                    message.reply("**تـم فتحح آلرومم ..**")
                });
      }
         
});

client.login(process.env.BOT_TOKEN); 
