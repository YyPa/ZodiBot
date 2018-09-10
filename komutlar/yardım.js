const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**ZodiBot :heart: Gerekli **" , `:heart::heart::heart: Discord Sunucuna (mod-log) Adında Bir Kanal Ekle mod log kanalı  olmazsa Bir Çok İşleminiz Başarısız Olur ... :heart::heart::heart:` )
.addField("**Eğlence ve Kullanıcı Komutları:**", ` z!atombombası = kaçın lan bomba patladı xD \nz!bantroll = Troll Ban xD \nz!bağış = Bağış Yapmanız için gereken barkodu Atar (İninal) \nz!koş = Koş Lan Köpek Geliyoo SSD::ADSD:ASD: \nz!hesapla = Yazdığınız İşlemi Cevaplar \nz!emoji = Yazdığınız Kelimeyi Dönüştürür \nz!anime = Anime Fotoları Atar   \nz!avatar = Profil Fotonuzu Atar  \nz!bulanık = Bulanık pp Nizi Gönderir  \nz!çayiç = Çay İçer  \nz!çekiç =Çekiç Atarsınız  \nz!yumrukat = Yumruk Atar. \nz!herkeseçay = Herkese Çay Verir \nz!çayaşekerat = Çayına şeker Atar \nz!muz = Senin Muzun Kaç cm İse Onu Söyler  \nz!twerk = Twerk Atan Bayanlar xD \nz!wtf = OH my GODDD xD  \nz!yaz = Bota Birşey Yazdırırsınız  \nz!çekiliş = Çekiliş Yapar \nz!davet = Botun Sahibinin Discord Sunucusu <3 \nz!zamanlayıcı = Belirlediğiniz Süre Geçtikden Sonra Bilgi Verir  \nz!ping = Botun Gecikme Süresi \nz!kullanıcıbilgim = Senin Hakkında Bilgi Verir`)
  .addField("**Yetkili Komutları**", ` z!sustur = Sustur <Kullanıcı> <sebep> \nz!temizle <sayı> = Sohbeti Temizler \nz!sil <sayı> = Sohbeti Temizler  \nz!ban = İstediğiniz Bir Kullanıcıyı Banlar \nz!kick = İstediğiniz Bir  Kullanıcıyı Banlar \nz!davet = botun davet linkini atar \nz!kilit = bulunduğunuz kanalı istediğiniz zamanla kilitler \nz!ping = Botun Gecikme Süresini Belirler \nz!uyar = istediğiniz bir kullanıcıyı uyarır`)
  .addField("**Ana Komutlar**", " z!sw = Botun Bulunduğu Serverler \nz!sunucu = Sunucu Hakkında Bilgi Verir \nz!yardım = BOT Komutlarını Atar. \nz!bilgi = BOT Kendisi Hakkında Bilgi Verir. \nz!ping = BOT Gecikme Süresini Söyler. \nz!davet = BOT Davet Linkini Atar. \nz!istatistik = BOT İstatistiklerini Atar.")
  .addField("**Yapımcı**", " **ZodiBot** Eğer Bir Konuda Sorun Olursa z!davet Yaz ve sahibin dc sine gidip ona bu durumu bildir :heart: ")
  .setFooter('**---------------ZodiBot---------------**')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
