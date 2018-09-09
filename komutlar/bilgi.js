const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Bot sürümü: version ' + ayarlar.surum + ', Yapımcı: Zakky Mallak, Botun İsmi : **ZodiBot**\n\n_**BOTU EKLEMEK İÇİN LİNK:**_\n\nhttps://discordapp.com/oauth2/authorize?client_id=488382168897421313&scope=bot&permissions=2146958847 \n\n_**Sunucunun Davet Linki**_\n\n**Eagle Claw** sunucusunun davet linki: https://discord.gg/S5uGnBd \n\n**:copyright: 2018 ZodiBot**');
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
