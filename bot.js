const Discord = require('discord.js');
const client = new Discord.Client();

//Dating Gamers Bot By Luca Changretta
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`by Floki | %help`,"http://twitch.tv/S-F")
  console.log('')
  console.log('') 
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('╚[═══════════════════════]╝')
  console.log(' Bot Is Online By Luca Changretta')
  console.log('╚[═══════════════════════]╝')
  console.log('')
  console.log('')
});


	


















  client.on('guildMemberAdd', member => {
const codes = member.guild.channels.get("491307189646917672");//???? ?????
if(!codes) return;
if(codes) {
codes.send(`**__Welcome To Gaming & Meeting 24/7  __ ${member}**`);          
}
});

























  
  
  

client.on('message', message => {

    if (message.content.startsWith("hi")) {        
    const embed = new Discord.RichEmbed()
        .setColor("#081070")
        .setDescription(" hello Floki Loves you :tada:")
      message.channel.sendEmbed(embed).then(message => {message.delete(60000)});
}
});



client.on('message', message => {

    if (message.content.startsWith("hello")) {        
    const embed = new Discord.RichEmbed()
        .setColor("#081070")
        .setDescription(" hello i hope you doing good today Floki Loves you :tada:")
      message.channel.sendEmbed(embed).then(message => {message.delete(60000)});
}
});
  
client.on('message', message => {

    if (message.content.startsWith("welcome")) {        
    const embed = new Discord.RichEmbed()
        .setColor("#081070")
        .setDescription(" thanks for welcoming people that's nice :heart:  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(60000)});
}
});
 




 
 














 
 
 












client.login(process.env.BOT_TOKEN);
