exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *MENU DONASI ${BotName}* ]----- 🔰
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Mau donasi? ✨

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

♻ Silahkan donasi dibawah ini :
   
⚜ *OVO*: 085797746684
⚜ *#PULSA*: 085797746684
⚜ *#GOPAY*: 085797746684
⚜ *#PAYPAL*: 085797746684

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
⚠️ Jangan Spam‼️
⚠️ Bot ini berjalan ${kapanbotaktif} ‼️

✳️ Official Grup XNZUL MODS [1] : ${grupch1}

✳️ Official Youtube XNZUL MODS [2] : ${grupch2}

  
📢 -----[ *POWERED BY ${BotName}* ]----- 🔔`
}
