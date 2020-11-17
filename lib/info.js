exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰👹-----[ *MENU ${BotName}* ]-----👹🔰
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Berikut adalah info pada bot ini!✨

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

♻ INFO BOT! :
   
⚜ *GITHUB*: https://github.com/xnzul
⚜ *AUTHOR*: XNzul PanutanQuee
⚜ *INSTAGRAM*: r00t_xnzul
⚜ *YOUTUBE*: XNzul Mods
⚜ *SCRIPT ORIGINAL BY*: XNZUL

♻ INFO LAIN! :

OH IYA SCRIPT INI 100% GRATIS KOK.
SCRIPT DIBUAT DENGAN BAHASA PEMROGRAMAN NODE.JS
UPDATE BOT TERBARU DI YOUTUBE Aris187 ID

♻️ JANGAN  LUPA DONASI AGAR BOT AKTIF TERUS!
♻️ MAU DONASI? SILAHKAN KETIK #donate

📺 *Iklan* :

✅ Follow akun instagram admin ${instagramlu}

⚠️ INFORMASI COVID-19 TERBARU!

⚠️ POSITIF: *${corohelp.confirmed.value}*
⚠️ SEMBUH: *${corohelp.recovered.value}*
⚠️ MENINGGAL: *${corohelp.deaths.value}*
⚠️ UPDATE: *${corohelp.lastUpdate}*

♻️ _JANGAN LUPA BAHAGIA♥_

♻️ Mau pasang iklan di *${BotName} ?*
☎️ WA : *${whatsapplu}*
  
⚠️ Gunakan dengan bijak ‼️
⚠️ Bot ini berjalan ${kapanbotaktif} ‼️

✳️ Official Grub [1] : ${grupch1}

✳️ Official Grub [2] : ${grupch2}

  
👹-----[ *POWERED BY ${BotName}* ]-----👹`
}
