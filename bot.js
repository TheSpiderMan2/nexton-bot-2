const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "^";

// Activity System

client.on("ready", () => { 
  console.log('By : The_Dark'); client.user.setPresence({ 
         status: 'online', 
         game: { type: 0, name: 'Trying To Developing This Bot To Make it The Best',
         details: `https://discord.gg/29KpKJy`, 
         url: 'https://www.twitch.tv/BotDeveloping', 
         state: `Deving & Coding`, 
        application_id: '532682436471947264', 
  
        assets: { 
  small_image: `535061300569571329`, 
  
  small_text: 'Developing Bot', 
  large_image: `535061300569571329`, large_text: `Trying To Developing This Bot To Make it The Best !` } 
  
  } 
  
  }); 
  });

// Commands System

client.on("message", message => {
  if(message.content.startsWith(prefix + "schelp")){
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**You Need ``ADMINISTRATOR`` | :x:**');
      const sch = new Discord.RichEmbed()
      .setTitle("**Admin Commands | :clipboard:**")
      .setDescription(`^Kick . To Kick a Person
      -^Ban . To Ban a Person
      -^close . You Can use it Only when you Finish Helping a Person
      -^say . A Normal Command Can everyone Use it But Staff can use it To Like Type Announcement or etc..
      -^clear . To Clear Chat But It's Not Allowed Without Reason,If you did it as a Fun it might Makes You Demoted
      -^bc . You Can Use IT To Send Messages To all Members in the servers , But Not Adv(it Might Makes You Demoted).
      -^mute . You Can use it When Some one Spam or insulting .
      -^unmute . You Can use it To unmute Some one
      Make Sure You Follow The Rules of Those Commands And More Will Be Comming Soon.`)
      message.channel.sendEmbed(sch)
  }
})



client.on('message', message => {

    if (message.author.bot) return;

    if (!message.content.startsWith(prefix)) return;


    let command = message.content.split(" ")[0];

    command = command.slice(prefix.length);


    let args = message.content.split(" ").slice(1);


  // -say

    if (command === "say") {

            message.delete()

      message.channel.sendMessage(args.join(" ")).catch(console.error);

    }






  if (command == "embed") {

      let say = new Discord.RichEmbed()

      .setDescription(args.join(" "))

      .setColor(0x23b2d6)

      message.channel.sendEmbed(say);

      message.delete();

    }



  });


// Roles System

client.on('message', message => {
    if (message.content === "^createroles") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_ROLES`` **Premission**`);

                     message.guild.createRole({ name: "", color: "#ffffff", permissions: [] })


message.channel.sendMessage('**Please Wait While Creating The Roles**')
}
});

// Colors System


client.on('message', function(message) {
  if(!message.channel.guild) return;
if(message.content ===  '^color 100') {
if(message.member.hasPermission('MANAGE_ROLES')) {
setInterval(function(){})
message.channel.send('Wait While I Can Make The Colors Please')
message.channel.send('** I Must Have ،"MANAGE_ROLES" ❌**')
}
}
});

client.on('message', message=>{
if (message.content ===  '%color 100'){
if(!message.channel.guild) return;
if (message.member.hasPermission('MANAGE_ROLES')){
setInterval(function(){})
  let count = 0;
  let ecount = 0;
for(let x = 1; x < 100; x++){
message.guild.createRole({name:x,
color: 'RANDOM'})
}
}
}
});



// Ticket System

  client.on("message", (message) => {

    if (message.content.startsWith("^new")) {
         const reason = message.content.split(" ").slice(1).join(" ");
         if (!message.guild.roles.exists("name", "Helpers Team")) return message.channel.send(`You Need To Make Role   \`Helpers Team\` And You Must Give The Bot Administrator Prem So he Can Create the tickets `);
         if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
         message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
             let role = message.guild.roles.find("name", "Helpers Team");
             let role2 = message.guild.roles.find("name", "@everyone");
             c.overwritePermissions(role, {
                 SEND_MESSAGES: true,
                 READ_MESSAGES: true
             });
             c.overwritePermissions(role2, {
                 SEND_MESSAGES: false,
                 READ_MESSAGES: false
             });
             c.overwritePermissions(message.author, {
                 SEND_MESSAGES: true,
                 READ_MESSAGES: true
             });
             message.channel.send(`:white_check_mark: Your Ticket has Been Created, #${c.name}.`);
             const embed = new Discord.RichEmbed()
                 .setColor(0xCF40FA)
                 .addField(`Hey ${message.author.username}!`, `:white_check_mark:  Your Ticket has Been Created, `)
                 .setTimestamp();
             c.send({
                 embed: embed
             });
         }).catch(console.error);
     }


   if (message.content.startsWith("&close")) {
         if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);

        message.channel.send(`Are You Sure That you want to close ticket? ^yes`)
            .then((m) => {
                message.channel.awaitMessages(response => response.content === '^yes', {
                        max: 1,
                        time: 10000,
                        errors: ['time'],
                    })
                    .then((collected) => {
                        message.channel.delete();
                    })
                    .catch(() => {
                        m.edit('The CountDown of Closing the Ticket has been finished, The Ticket Still open').then(m2 => {
                            m2.delete();
                        }, 3000);
                    });
            });
    }

 });



// Mute And UnMute System


client.on('message', async message => {
let args = message.content.split(" ");
if(message.content.startsWith(prefix + "mute")) {
 if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**You Dont Have Premissons To mute Someone `Manage Roles`**').then(msg => {
   msg.delete(3500);
   message.delete(3500);
 });

 if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('** i Dont Have Premisson `Manage Roles` To be able to use this command**').then(msg => {
   msg.delete(3500);
   message.delete(3500);
 });

 let mention = message.mentions.members.first();
 if(!mention) return message.reply('**Metion The User That You Are Trying To Mute Him !**').then(msg => {
   msg.delete(3500);
   message.delete(3500);
 });

 if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.reply('**This User Had A Hight Role More Then me So i cant Mute Him**').then(msg => {
   msg.delete(3500);
   message.delete(3500);
 });
 if(mention.highestRole.positon >= message.guild.member(client.user).highestRole.positon) return message.reply('**This User Had A Hight Role More Then me So i cant Mute Him**').then(msg => {
   msg.delete(3500);
   message.delete(3500);
 });
 if(mention.id === message.author.id) return message.reply('**You Cant Mute YourSelf**').then(msg => {
   msg.delete(3500);
   message.delete(3500);
 });

 let duration = args[2];
 if(!duration) return message.reply('**Please Choose The Time That Will Be After The User Will Be unMuted**').then(msg => {
   msg.delete(3500);
   message.delete(3500);
 });

 if(isNaN(duration)) return message.reply('**Please Choose a Right Time**').then(msg => {
   msg.delete(3500);
   message.delete(3500);
 });

 let reason = message.content.split(" ").slice(3).join(" ");
 if(!reason) reason = "undefined";

 let thisEmbed = new Discord.RichEmbed()
 .setAuthor(mention.user.username, mention.user.avatarURL)
 .setTitle('You Have Been Muted By Staff User')
 .setThumbnail(mention.user.avatarURL)
 .addField('# - The Server',message.guild.name,true)
 .addField('# - You Have been Muted By',message.author,true)
 .addField('# - Reason',reason)

 let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
 if(!role) try {
   message.guild.createRole({
     name: "Muted",
     permissions: 0
   }).then(r => {
     message.guild.channels.forEach(c => {
       c.overwritePermissions(r , {
         SEND_MESSAGES: false,
         READ_MESSAGES_HISTORY: false,
         ADD_REACTIONS: false
       });
     });
   });
 } catch(e) {
   console.log(e.stack);
 }
 mention.addRole(role).then(() => {  // حقوق الفا كومينتي
   mention.send(thisEmbed);
   message.channel.send(`**:white_check_mark: ${mention.user.username} muted in the server ! :zipper_mouth:  **  `);
   mention.setMute(true);
 });
 setTimeout(() => {
   if(duration === 0) return;
   mention.setMute(false);
   mention.removeRole(role);
   message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `); // حقوق الفا كومينتي
 },duration * 60000);
} else if(message.content.startsWith(prefix + "unmute")) {
 let mention = message.mentions.members.first();
 let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
 if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**You Dont Have premission `Manage Roles`**').then(msg => {
   msg.delete(3500);
   message.delete(3500);
 });

 if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('**I Need Premission `Manage Roles` To Be able to use this command**').then(msg => {
   msg.delete(3500);
   message.delete(3500);
 });

 if(!mention) return message.reply('**Metion The user That you Want to be unMuted**').then(msg => { // حقوق الفا كومينتي
   msg.delete(3500);
   message.delete(3500);
 });

   mention.removeRole(role);
   mention.setMute(false);
   message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `); // حقوق الفا كومينتي
}
});






// Bc System

  var fox = "By KillerFox";  // ممنوع اللمس
  var perfix = "By KillerFox";
  console.log('Code BC By KillerFox Embed and Avatar ');
  client.on('message', message => { // BY KillerFox or ALphaCodes
      if (message.author.id === client.user.id) return; // BY KillerFox or ALphaCodes
      if (message.guild) { // BY KillerFox or ALphaCodes
     let embed = new Discord.RichEmbed()
      let args = message.content.split(' ').slice(1).join(' '); // BY KillerFox or ALphaCodes
  if(message.content.split(' ')[0] == '^bc') { // غير امر او برفكس
      if (!args[1]) { // BY KillerFox or ALphaCodes
  message.channel.send("**^bc <Messages> :incoming_envelope:  **"); // ممنوع المس
  return;
  }
          message.guild.members.forEach(m => {
     if(!message.member.hasPermission('ADMINISTRATOR')) return; // ممنوع اللمس
              var bc = new Discord.RichEmbed()
              .setThumbnail(client.user.avatarURL)
              .addField(':beginner: Server :beginner: :twisted_rightwards_arrows: ', `${message.guild.name}`)
              .addField(':heartpulse:  Sender :heartpulse: :twisted_rightwards_arrows: ', `${message.author.username}#${message.author.discriminator}`)
              .addField(':scroll: Message :scroll: :twisted_rightwards_arrows: ', args)
              .addField(':gemini: My Language :gemini: :twisted_rightwards_arrows: ',` JavaScript `)
              .setFooter('Developed By The_Dark') // حط اي شي تبيه
              .setColor('RANDOM')
              // m.send(`[${m}]`);
              m.send(`${m}`,{embed: bc});
          });
      }
      } else {
          return;
      }
  });


  // Clear System

client.on('message', msg => {
        if (msg.author.bot) return;
        if (!msg.content.startsWith(prefix)) return;
        let command = msg.content.split(" ")[0];
        command = command.slice(prefix.length);
        let args = msg.content.split(" ").slice(1);

          if(command === "clear") {
              const emoji = client.emojis.find("name", "wastebasket")
          let textxt = args.slice(0).join("");
          if(msg.member.hasPermission("MANAGE_MESSAGES")) {
          if (textxt == "") {
              msg.delete().then
          msg.channel.send("**Please Type Numbers oF the messages that will be deleted.**").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
    msg.channel.send(" :white_check_mark: Messages Deleted.")
        msg.channel.send("").then(m => m.delete(3000));
      }
  }
}
});



//Suggestion System

client.on('message', message => {
  if (message.content.startsWith(prefix + 'sug')) {
      if (message.author.bot) return
      if (!message.guild) return message.reply('**:x: This Commands Just In Server**').then(v => {v.react('❌')})
      var args =  message.content.split(' ').slice(1).join(' ')
      if (!args) return message.reply('Type You Suggestion').then(c => {c.delete(5000)})
      let Room = message.guild.channels.find(`name`, "suggestions")
      if (!Room) return message.channel.send("Can't find suggestions channel.").then(d => d.react('❌'))
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setAuthor(`Vote on ${message.author.username}'s suggestion`, message.author.avatarURL)
     .addField('**Suggestion**',`${args}`)
     .setThumbnail(message.author.avatarURL)
     .setFooter(`ID: ${message.author.id}`)
     Room.sendEmbed(embed).then(c => {
         c.react('✅').then(() => 
             c.react('❌'))

     }).catch(e => console.error(e)
     )
 }
});








 // Verify System 

client.on("message", message => {
  if(message.content.startsWith("^verify")) { // الامر والبريفكس
    let num = Math.floor((Math.random() * 4783) + 10);
 
        message.channel.send(`**Please Enter this number to verify : ** **${num}**`).then(m => {
      message.channel.awaitMessages(res => res.content == `${num}`, {
        max: 1,
        time: 60000,
        errors: ['time'],
      }).then(collected => {
        message.delete();
        m.delete();
        message.member.addRole(message.guild.roles.find(c  => c.name == "Fan")); // اسم الرتبة
      }).catch(() => {
        m.edit(`:x: **You take too match time to enter the number. Please submmite the command again.**`).then(m2 => m.delete(15000));
      });
    });
  }
});

// Kick System

client.on('message', message => {
  if(message.content.startsWith(prefix + "kick")){
       let args = message.content.split(" ").slice(1);
       if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Need ``KICK_MEMBERS`` | :x:**")
       if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**Bot Need ``KICK_MEMBERS`` | :x:**")
       let user = message.mentions.users.first();
       if (message.mentions.users.size < 1) return message.reply('**Mention Member First | :x:**')
       if (!message.guild.member(user)
       .bannable) return message.reply("**i Can't Kick This Member | :x:**")
       message.guild.member(user).kick(7, user);
     message.channel.send(`**${user.tag} Kicked From Server | :white_check_mark:**`)
     let chh = message.guild.channels.find("name","incidents").send(`
     ${user} Has been Kicked From The Server By ${message.author.username}.`)
  }
  });

// Ban System

  client.on('message', message => {
    if(message.content.startsWith(prefix + "ban")){
         let args = message.content.split(" ").slice(1);
         if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Need ``BAN_MEMBERS`` | :x:**")
         if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**Bot Need ``BAN_MEMBERS`` | :x:**")
         let user = message.mentions.users.first();
         if (message.mentions.users.size < 1) return message.reply('**Mention Member First | :x:**')
         if (!message.guild.member(user)
         .bannable) return message.reply("**i Can't Ban This Member | :white_check_mark:**")
         message.guild.member(user).ban(7, user);
       message.channel.send(`**${user.tag} Kicked From Server | :mans_shoe:**`)
                let chh = message.guild.channels.find("name","incidents").send(`
${user} Has been Banned From The Server By ${message.author.username}.`)
    }
    });



client.login('token');
