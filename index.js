const Discord = require('discord.js');
const bot = new Discord.Client();
const weather = require('weather-js');
const fs = require('fs');
let money = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf8'));


bot.on('ready', (message) => {
console.log(`Ready to server in ${bot.channels.size} channels on ${bot.guilds.size} servers, for a total of ${bot.users.size} users.`);
bot.user.setGame("Type sc!help for help! | Bot rewrite happening, expect changes!")
});

bot.login(process.env.BOT_TOKEN);

bot.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'welcome');
   const channel2 = member.guild.channels.find('name', 'member-log');
   const channel3 = member.guild.channels.find('name', 'user-log');
   const channel4 = member.guild.channels.find('name', 'memberlog');
   const channel5 = member.guild.channels.find('name', 'userlog');
  if (!channel) return;
  if (!channel2) return;
  if (!channel3) return;
  if (!channel4) return;
  if (!channel5) return;
  var textArray = [
    `${member.user} has come here`,
    `${member.user},my man, you have entered the realm of severe depression`,
    `${member.user} you have entered the realm of the totino gods, do you have anything to say?`,
    `${member.user} Welcome to the discord. You must be crazy for joining.`,
    `${member.user} Welcome to the server... you are ugly`,
    `${member.user} has entered hell :)`,
    `${member.user} is possibly mentally retarted cause he came here...`,
    `${member.user} came here, i am running out of ideas please help`,
    `${member.user} has entered the meme magic`,
    `${member.user} has had a bad case of idiocity cause he is here`,
    `${member.user} is very loud, but ey, he came here`,
    `${member.user} came here, Error 404 ${member.user} not found`,
    `${member.user} is a noob, jk he came here`,
    `${member.user} has come here to do everything that his destiny tells him to.`
  ];
  var Meme = Math.floor(Math.random()*textArray.length);
  channel.send(`${textArray[Meme]}`)
  channel2.send(`${textArray[Meme]}`)
  channel3.send(`${textArray[Meme]}`)
    channel4.send(`${textArray[Meme]}`)
  channel5.send(`${textArray[Meme]}`)
});

bot.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'welcome');
     const channel2 = member.guild.channels.find('name', 'member-log');
   const channel3 = member.guild.channels.find('name', 'user-log');
       const channel4 = member.guild.channels.find('name', 'memberlog');
   const channel5 = member.guild.channels.find('name', 'userlog');
  if (!channel) return;
  if (!channel2) return;
  if (!channel3) return;
  var textArray = [
    `***${member.user.tag}*** has died in the death zone`,
    `***${member.user.tag}*** has left the state of severe deppression`,
    `***${member.user.tag}*** you have entered the realm of the totino gods, do you have anything to say?`,
    `Did ***${member.user.tag}*** leave or did he accidently hit the leave button instead of the change nickname button?`,
    `***${member.user.tag}*** was abused cause he was ugly, so he hit that leave button.`,
    `***${member.user.tag}*** joined, got triggered, left, simple math.`,
    `***${member.user.tag}*** has ragequit`,
    `***${member.user.tag}*** has came here, but left cause of all the toxicity`,
    `***${member.user.tag}*** has left the meme magic`,
    `***${member.user.tag}*** has died, rip`,
    `***${member.user.tag}*** is very loud, but ey, he came here`,
    `***${member.user.tag}*** went away, oh noes`,
    `***${member.user.tag}*** went away cause this server is bad, jk it isnt dont sue me plz`,
    `***${member.user.tag}*** has left... Dinkleburg...`
  ];
  var math = Math.floor(Math.random()*textArray.length);
  channel.send(`${textArray[math]}`)
  channel2.send(`${textArray[math]}`)
  channel3.send(`${textArray[math]}`)
});



bot.on("guildCreate", guild => {
  const channel3 = guild.channels.find('name', 'general');
  if (!channel3) return guild.owner.send("Oh why hello there! Thank you for inviting me to this server! Here are a few things to get started! \n First, make a channel called #mod-log exactly like that if you are planning to use commands, if you dont and use the command, you will need to create the channel and waste time while a bad person is raiding your server. \n Secondly, if you want welcome messages, make a channel called #welcome exactly like that, it will also have goodbye messages also, for right now, we have pre made welcome messages, soon I will try to make it so you can make your own welcome message. \n Third. Make sure nobody blocks the bot, as some commands will not function if they have to DM the user. \n Finally, you MIGHT want to disable advertising by doing sc!advertising no, then it will block advertising discord servers. (THIS HAS NOT BEEN IMPLIMENTED YET, IT WILL SOON!) \nThat is it, have fun!")
  channel3.send("Oh why hello there! Thank you for inviting me to this server! Here are a few things to get started! \n First, make a channel called #mod-log exactly like that if you are planning to use commands, if you dont and use the command, you will need to create the channel and waste time while a bad person is raiding your server. \n Secondly, if you want welcome messages, make a channel called #welcome exactly like that, it will also have goodbye messages also, for right now, we have pre made welcome messages, soon I will try to make it so you can make your own welcome message. \n Third. Make sure nobody blocks the bot, as some commands will not function if they have to DM the user. \n Finally, you MIGHT want to disable advertising by doing sc!advertising no, then it will block advertising discord servers. (THIS HAS NOT BEEN IMPLIMENTED YET, IT WILL SOON!) \nThat is it, have fun!")
  guild.createChannel("Music Channel")
  .then(channel => console.log("Music channel has been created!"))
  .catch(console.error);
});

bot.on("message", (message) => {

  var args = message.content.split(' ').slice(1).join(' ');
  var sender = message.author
  var user = message.mentions.users.first()



  if (sender.bot) return;
  if (!money[sender.id + message.guild.id]) money[sender.id + message.guild.id] = {}
    if (!money[sender.id + message.guild.id].money) money[sender.id + message.guild.id].money = 500;
    if (!money[sender.id + message.guild.id].lastDaily) money[sender.id + message.guild.id].lastDaily = "Daily None";
    if (!money[sender.id + message.guild.id].username) money [sender.id + message.guild.id].username = message.author.tag;
    fs.writeFile('./Storage/userData.json', JSON.stringify(money), (err) => {
      if (err) console.error(err)
    });
  });


var guilds = {};

bot.on("message", message => {

  try{
      if (!guilds[message.guild.id]) {
          guilds[message.guild.id] = {
              prefix: "sc!" // default prefix, change it to fit your needs
          };
      }
  } catch (e) {
    console.log(e);
  }

  if (message.author.bot) return; // ignore any bots
  const prefix = guilds[message.guild.id].prefix; // multi-guild (will come back to this later)
  const args = message.content.split(" ");
  let command = args[0];
  command = command.slice(prefix.length);
  if(!message.content.startsWith(prefix)) return; // ignore messages without a prefix
  if(message.channel.type === 'dm') return message.reply("You cant use me in PM."); // prevent commands via dm

try {
  let commandFile = require(`./commands/${command}.js`);
  commandFile.run(bot, message, args);
} catch (err) {
  console.error(err);
}





if (command === "setPrefix") {
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`__**Access Denied**__\nYou must have __MANAGE_GUILD__ perms to use this command.`); // Checks for permissions to change the prefix
  const newPrefix = args.slice(1).join(" "); // define the prefix
  guilds[message.guild.id].prefix = newPrefix; // set the prefix
  message.channel.send(`The prefix for **${message.guild.name}** is now **${newPrefix}**`); // reply with the new sexy prefix!
}


if (command === "weather") {
weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) { // Make sure you get that args.join part, since it adds everything after weather.
         if (err) message.channel.send(err);

         // We also want them to know if a place they enter is invalid.
         if (result.length === 0) {
             message.channel.send('**Please enter a valid location.**') // This tells them in chat that the place they entered is invalid.
             return; // This exits the code so the rest doesn't run.
         }

         // Variables
         var current = result[0].current; // This is a variable for the current part of the JSON output
         var location = result[0].location; // This is a variable for the location part of the JSON output

         // Let's use an embed for this.
         const embed = new Discord.RichEmbed()
             .setDescription(`**${current.skytext}**`) // This is the text of what the sky looks like, remember you can find all of this on the weather-js npm page.
             .setAuthor(`Weather for ${current.observationpoint}`) // This shows the current location of the weather.
             .setThumbnail(current.imageUrl) // This sets the thumbnail of the embed
             .setColor(0x00AE86) // This sets the color of the embed, you can set this to anything if you look put a hex color picker, just make sure you put 0x infront of the hex
             .addField('Timezone',`UTC${location.timezone}`, true) // This is the first field, it shows the timezone, and the true means `inline`, you can read more about this on the official discord.js documentation
             .addField('Degree Type',location.degreetype, true)// This is the field that shows the degree type, and is inline
             .addField('Temperature',`${current.temperature} Degrees`, true)
             .addField('Feels Like', `${current.feelslike} Degrees`, true)
             .addField('Winds',current.winddisplay, true)
             .addField('Humidity', `${current.humidity}%`, true)

             // Now, let's display it when called
             message.channel.send({embed});
           })}

           if (command === "help") {
             const prefix = guilds[message.guild.id].prefix;
             const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
var embed1 = new Discord.RichEmbed()
.setTitle("Help")
.setColor(randomColor)
.addField("You have got mail! 📬", "Check your DM's!")
message.channel.send({ embed: embed1 })
var embed = new Discord.RichEmbed()
.setTitle("Fun Commands:")
.setColor(randomColor)
.setThumbnail("http://theallycoalition.org/wp-content/uploads/2012/10/fun.logo1-copy.gif")
.addField(`${prefix}avatar`, "Get a user's avatar")
.addField("sc!calculator", "Do your homework!")
.addField("sc!dm", "DM you something random :P")
.addField("sc!emoji", "Put text as emoji's!")
.addField("sc!flip", "Flip text!")
.addField("sc!google", "Google something random in your head!")
.addField("sc!react", "Reacts to YOUR last message!")
.addField("sc!roll", "Roll a die")
.addField("sc!say", "Says something random in the channel.")
.addField("sc!setgame", "Sets the bot's game, remember it puts -suggested by (your username), so dont be cheeky ;)")
.addField("sc!totinos", "Puts the totinos lyrics in chat, useless command am i right")
.addField("sc!8ball", "Ask the magic 8ball something!")
.addField("sc!cat", "Get a random picture of a cat!")
message.author.send({ embed: embed });
var embed2 = new Discord.RichEmbed()
.setTitle("Utility Commands:")
.setThumbnail("https://lh4.ggpht.com/MZP5q231SMQosTj60uYjIbzKHDMUMhxM-f54D4miO1PbHXmYSPcaFES3r9S_cWDauvY=w300")
.setColor(randomColor)
.addField("sc!serverinfo", "Gives you the bot's info")
.addField("sc!changeName", "Changes the name of the channel the command was sent in, restricted to people who have manage channels permissions.")
.addField("sc!changeTopic", "Changes the topic of the channel the command was sent in, restricted to people who have manage channels permissions.")
.addField("sc!invite", "DM's you the invite link of the bot")
.addField("sc!ping", "Sends your ping")
.addField("sc!listemojis", "Lists all the emojis in the server")
.addField("sc!poll", "Creats a poll in a channel called poll, restricted to moderators.")
.addField("sc!suggest", "Suggests something in a channel called suggestions")
.addField("sc!userinfo", "Gives the info of the user mentioned.")
.addField("sc!help", "Brings up this menu again.")
.addField("sc!points", "Shows you how many messages you sent")
.addField("sc!contact", "Gives you an email to contact if you contact an error")
message.author.send({ embed: embed2 });
var embed3 = new Discord.RichEmbed()
.setTitle("Moderation Commands (I have just started on these, thats why there are alot of WIP's)")
.setThumbnail("https://www.flamingtoast.com/wp-content/uploads/2015/04/ban-hammer-newB-1000x1000.jpg")
.setColor(randomColor)
.addField("sc!ban", "Bans a user with a reason")
.addField("sc!kick", "Kicks users with a reason")
.addField("sc!blacklist", "Blacklists a user from using the bot's commands (WIP)")
.addField("sc!mute", "Mutes a user with a reason (WIP)")
.addField("sc!warn", "Warn's a user, after 10 warns, they get muted forever, unless you unmute them, of course.")
.addField("sc!unban", "Unbans a user (WIP)")
.addField("sc!unblacklist", "Unblacklists a user from using the bot's commands (WIP)")
.addField("sc!unmute", "Unmutes a user")
.addField("sc!advertising", "Enable advertising other discord servers, disabled by default. (WIP)")
message.author.send({ embed: embed3 });
var embed4 = new Discord.RichEmbed()
.setTitle("Economy Commands! (Money has no purpouse FOR RIGHT NOW!, you can give me ideas!)")
.setThumbnail("http://s.hswstatic.com/gif/money-world-orig.jpg")
.setColor(randomColor)
.addField("sc!bank", "Shows your bank account")
.addField("sc!daily", "Get your daily moneyz!")
message.author.send({ embed: embed4 });
console.log(`${message.author.username} has triggered this command`)
           }

           if (command === "contact") {
             message.author.send("Contact `ScroogeMcBot@gmail.com` if you contact any errors, anything like ***You have a really bad bot 0/10***, they will be largley ignored, as this bot is in beta, second, please accept that nothing is perfect in this bot, and try to give constructive criticism, thanks in advance, \n -ThatMajesticGuy")
           }

           if (command === "bank") {
             var user = message.mentions.users.first()
             var sender = message.author;
             if (!user) {
      var embed = new Discord.RichEmbed()
              .setTitle(`Bank from ${message.author.username}`)
              .setColor("#50f442")
              .setThumbnail("https://fat.gfycat.com/FeminineDiscreteFlyinglemur.gif")
              .addField("Money", `$${money[message.author.id + message.guild.id].money}`)
                message.channel.send({ embed: embed })
      } else {
              var embed = new Discord.RichEmbed()
              .setTitle(`Bank from ${user.username}`)
              .setColor("#50f442")
              .setThumbnail("https://fat.gfycat.com/FeminineDiscreteFlyinglemur.gif")
              .addField("Money", `$${money[user.id + message.guild.id].money}`)
                message.channel.send({ embed: embed })
      }
      };

      if (command === "daily") {
        if (money[sender.id + message.guild.id].lastDaily != moment().format('L')) {
  money[sender.id + message.guild.id].lastDaily = moment().format('L')
money[sender.id + message.guild.id].money += 100;
var embed3 = new Discord.RichEmbed()
.setColor("#50f442")
.setThumbnail("https://publicdomainvectors.org/photos/johnny_automatic_bag_of_money.png")
.setTitle("Daily Reward")
.addField("You have collected your daily reward of $100!", "Horray!")
message.channel.send({ embed: embed3 })
} else {

var embed2 = new Discord.RichEmbed()
.setColor("#50f442")
.setThumbnail("https://vignette.wikia.nocookie.net/battlefordreamislandfanfiction/images/9/9d/Dollar_Sign_Posey.png/revision/latest?cb=20170628015510")
.addField("You already collected your daily reward!", `You can collect it again in ${moment().endOf('day').fromNow()}`)
message.channel.send({ embed: embed2 })
}};
      if (command === "leaderboard") {
         message.reply("Please do `sc!leaderboard server` or `sc!leaderboard global`")
      }

      if (command === "leaderboard server") {

        var guildMoney = 0;
        var guildUsers = 0;
        var guildRichest = '';
        var guildRichest$ = 0;
    for (var i in money) {
      if (i.endsWith(message.guild.id)) {

        guildMoney += money[i].money;
        guildUsers += 1;
        if (money[i].money > guildRichest$) {

          guildRichest$ = money[i].money;
          guildRichest = money[i].username;
          var embed = new Discord.RichEmbed()
          .setTitle("Server leaderboard")
          .setThumbnail("https://m.popkey.co/ae26e0/kdLqd.gif")
          .setColor("#e2f442")
          .addField("Server Users Count.", `${guildUsers}`)
          .addField("Total Money", `${guildMoney}`)
          .addField("Richest Account", `${guildRichest} with $${guildRichest$}`)
        message.channel.send({ embed: embed });
        fs.writeFile('Storage/userData.json', JSON.stringify(money), (err) => {
          if (err) console.error(err)
      })}}}}

      if (command === "leaderboard global") {
        var globalMoney = 0;
 var globalUsers = 0;
 var globalRichest = '';
 var globalRichest$ = 0;
for (var i in money) {
 if (i.endsWith(message.guild.id)) {

   globalMoney += money[i].money;
   globalUsers += 1;
   if (money[i].money > globalRichest$) {

     globalRichest$ = money[i].money;
     globalRichest = money[i].username;
     var embed = new Discord.RichEmbed()
     .setTitle("Global leaderboard")
     .setThumbnail("https://m.popkey.co/ae26e0/kdLqd.gif")
     .setColor("#e2f442")
     .addField("Global Users Count.", `${globalUsers}`)
     .addField("Total Money", `${globalMoney}`)
     .addField("Richest Account", `${globalRichest} with $${globalRichest$}`)
   message.channel.send({ embed: embed });
   fs.writeFile('Storage/userData.json', JSON.stringify(money), (err) => {
     if (err) console.error(err)
   })}}}}


if (command === "addRole") {
    if (!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.channel.send(`__**Access Denied**__\nYou must have __MANAGE_ROLES_OR_PERMISSIONS__ perms to use this command.`);
let member = message.mentions.members.first();
if (!member) return message.reply("You need to mention someone to add a role!")
if (!args) return message.reply("You didnt specify a role!")
let myRole = message.guild.roles.find("name", `${args}`);
if (!myRole) return message.reply("That role does not exist! Remember that when adding a role, it needs to be case sensitive!");
     if (!message.guild.member(bot.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I do not have the correct permissions or the role you are adding is higher or the same as my role!');
member.addRole(myRole).catch(console.error);
message.channel.send(`That user has been added to the ${args} role!`)
  .catch((error) => {
  message.channel.send(error)
})}

if (command === "createRole") {
if (!args) return message.reply("You did not specify the role name!");
if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.reply("I do not have permission to create roles!");
message.guild.createRole({
name: `${args}`
})
.then(role => message.channel.send(`Created role ${args}`))
.catch(console.error)
};
});
