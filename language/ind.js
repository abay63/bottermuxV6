const a = '```'

exports.wait = () => {
	return`*「 WAIT 」 SEDANG PROSES*`
}

exports.succes = () => {
	return`*「 SUCCES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Abay|17*`
}

exports.rediregis = () => {
	return`*「 SUDAH DAFTAR 」*\n\n*kamu sudah terdaftar di database bot*`
}

exports.stikga = () => {
	return`*yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW GAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*format salah/text kosong*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA NEGARA 」*\n\nkamu sudah terdaftar dengan data \n\n┏━⊱nama\n┗⊱${namaUser}\n┏━⊱nomer\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱umur\n┗⊱${umurUser}\n┏━⊱waktu pendaftaran\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : jangan sampai lupa nomer ini karena ini penting:v`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, premi, client , process) => { 
	return `
│╭───────────────────
▬▭▬▭▬❰ *╭───────────────────
║▬▭▬▭▬▭▬▭▬▭▬▭▬▭
║╭───────────────────
║│┈┈┈╱▔▔▔▔▔▔╲┈╭━━━╮┈┈
║│┈┈▕┈╭━╮╭━╮┈▏┃BOT.┃┈┈
║│┈┈▕┈┃╭╯╰╮┃┈▏╰┳━━╯┈┈
║│┈┈▕┈╰╯╭╮╰╯┈▏┈┃┈┈┈┈┈
║│┈┈▕┈┈┈┃┃┈┈┈▏━╯┈┈┈┈┈
║│┈┈▕┈┈┈╰╯┈┈┈▏┈┈┈┈┈┈┈
║│┈┈▕╱╲╱╲╱╲╱╲▏┈┈┈┈┈┈┈
║╰───────────────────
║▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╚════════════════════
➪➪➪➪➪➪➪➪➪➪➪➪➪➪➪➪➪
╔════════════════════
║▬▭▬▭▬▭▬▭▬▭▬▭▬▭
║╭───────────────────
║│ *❲███████▒▒▒▒▒▒▒❳ 20%*
║│ 【✿͜͡➪ NAMA : ${pushname}
║│ *❲████████▒▒▒▒▒▒❳ 40%*
║│ 【✿͜͡➪ UANG:  : Rp:${uangku}
║│ *❲█████████▒▒▒▒▒❳ 60%*
║│ 【✿͜͡➪ PREFIX : ${prefix}
║│ *❲██████████▒▒▒▒❳ 80%*
║│ 【✿͜͡➪ OWNER :${ownerName}
║│ *❲████████████▒▒❳ 90%*
║│ 【✿͜͡➪ BOTZ :${botName} 
║│ *❲██████████████❳ 100%*
║│ 【✿͜͡➪ PANGKAT : *ERROR*
║╰───────────────────
║▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╚════════════════════
╔════════════════════
║▬▭▬▭▬▭▬▭▬▭▬▭▬d
║╭───────────────────
║│【✿͜͡➪ *${prefix}donasi*
║│【✿͜͡➪ *${prefix}owner*
║│【✿͜͡➪ *${prefix}request*
║│【✿͜͡➪ *${prefix}joinbot*
║│【✿͜͡➪ *${prefix}mygrub*
║│【✿͜͡➪ *${prefix}info*
║╰───────────────────
➪➪➪➪➪➪➪➪➪➪➪➪➪➪➪➪➪
║▬▭▬▭▬▭▬▭▬▭▬▭▬▭
║╭───────────────────
║│【✿͜͡➪ *${prefix}kick*
║│【✿͜͡➪ *${prefix}promote*
║│【✿͜͡➪ *${prefix}demote*
║│【✿͜͡➪ *${prefix}etdesc*
║│【✿͜͡➪ *${prefix}setname*
║│【✿͜͡➪ *${prefix}group*
║│【✿͜͡➪ *${prefix}evel*
║│【✿͜͡➪ *${prefix}mining*
║│【✿͜͡➪ *${prefix}stiker*
║│【✿͜͡➪ *${prefix}atm*
║│【✿͜͡➪ *${prefix}buylimit*
║╰───────────────────
║▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╠═[ *MENU1* ] ➪➪➪➪➪➪➪➪➪
║▬▭▬▭▬▭▬▭▬▭▬▭▬▭
║╭───────────────────
║│【✿͜͡➪ *${prefix}premlist*
║│【✿͜͡➪ *${prefix}transfer*
║│【✿͜͡➪ *${prefix}giftlimit*
║│【✿͜͡➪ *${prefix}limit*
║│【✿͜͡➪ *${prefix}owner*
║│【✿͜͡➪ *${prefix}info*
║│【✿͜͡➪ *${prefix}donasi*
║│【✿͜͡➪ *${prefix}checkprem*
║│【✿͜͡➪ *${prefix}fakta*
║╰───────────────────
║▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╠═[ *MENU2* ] ➪➪➪➪➪➪➪➪➪
║▬▭▬▭▬▭▬▭▬▭▬▭▬▭
║╭───────────────────
║│【✿͜͡➪ *${prefix}fitnah*
║│【✿͜͡➪ *${prefix}bisakah*
║│【✿͜͡➪ *${prefix}kapankah*
║│【✿͜͡➪ *${prefix}toxic*
║│【✿͜͡➪ *${prefix}truth*
║│【✿͜͡➪ *${prefix}dare*
║│【✿͜͡➪ *${prefix}dadu*
║│【✿͜͡➪ *${prefix}watak*
║│【✿͜͡➪ *${prefix}map*
║│【✿͜͡➪ *${prefix}loli*
║│【✿͜͡➪ *${prefix}randomhentai* [PREM]
║│【✿͜͡➪ *${prefix}hobby*
║│【✿͜͡➪ *${prefix}cantikcek*
║╰───────────────────
║▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╠═[ *MENU3* ] ➪➪➪➪➪➪➪➪➪
║▬▭▬▭▬▭▬▭▬▭▬▭▬▭
║╭───────────────────
║│【✿͜͡➪ *${prefix}gantengcek*
║│【✿͜͡➪ *${prefix}apakah*
║│【✿͜͡➪ *${prefix}nilai*
║│【✿͜͡➪ *${prefix}lirik*
║│【✿͜͡➪ *${prefix}artinama*
║│【✿͜͡➪ *${prefix}blackpink* [PREM]
║│【✿͜͡➪ *${prefix}fire* [PREM]
║│【✿͜͡➪ *${prefix}text3d* [PREM]
║│【✿͜͡➪ *${prefix}leavest* [PREM]
║│【✿͜͡➪ *{£}text3d2* [PREM]
║│【✿͜͡➪ *${prefix}sand* [PREM]
║│【✿͜͡➪ *${prefix}dropwater* [PREM]
║│【✿͜͡➪ *${prefix}breakwall* [PREM]
║│【✿͜͡➪ *${prefix}matrix* [PREM]
║│【✿͜͡➪ *${prefix}neon* [PREM]
║│【✿͜͡➪ *${prefix}burn* [PREM]
║╰───────────────────
║▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╠═[ *MENU4* ] ➪➪➪➪➪➪➪➪➪
║▬▭▬▭▬▭▬▭▬▭▬▭▬▭
║╭───────────────────
║│【✿͜͡➪ *${prefix}love* [PREM]
║│【✿͜͡➪ *${prefix}mugg* [PREM]
║│【✿͜͡➪ *${prefix}mug2* [PREM]
║│【✿͜͡➪ *${prefix}naruto* [PREM]
║│【✿͜͡➪ *${prefix}paper* [PREM]
║│【✿͜͡➪ *${prefix}romance* [PREM]
║│【✿͜͡➪ *${prefix}shadow* [PREM]
║│【✿͜͡➪ *${prefix}harrypotter* [PREM]
║│【✿͜͡➪ *${prefix}water* [PREM]
║│【✿͜͡➪ *${prefix}glow* [PREM]
║│【✿͜͡➪ *${prefix}cup2* [PREM]
║│【✿͜͡➪ *${prefix}cup* [PREM]
║│【✿͜͡➪ *${prefix}tts*
║│【✿͜͡➪ *${prefix}covidindo* [PREM]
║│【✿͜͡➪ *${prefix}caklontong*
║│【✿͜͡➪ *${prefix}:family100*
║╰───────────────────
║▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╠═[ *MENU5* ] ➪➪➪➪➪➪➪➪➪
║▬▭▬▭▬▭▬▭▬▭▬▭▬▭
║╭───────────────────
║│【✿͜͡➪ *${prefix}jadian*
║│【✿͜͡➪ *${prefix}brainly*
║│【✿͜͡➪ *${prefix}darkjokes*
║│【✿͜͡➪ *${prefix}ocr*
║│【✿͜͡➪ *${prefix}tiktok*
║│【✿͜͡➪ *${prefix}stalkig*
║│【✿͜͡➪ *${prefix}hartatahta*
║│【✿͜͡➪ *${prefix}sayang*
║│【✿͜͡➪ *${prefix}tomp3*
║│【✿͜͡➪ *${prefix}tergantung*
║╰───────────────────
║▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╠═[ *MENU6* ] ➪➪➪➪➪➪➪➪➪
║▬▭▬▭▬▭▬▭▬▭▬▭▬▭
║╭───────────────────
║│【✿͜͡➪ *${prefix}hidetag*
║│【✿͜͡➪ *${prefix}tebakgambar*
║│【✿͜͡➪ *${prefix}kalkulator*
║│【✿͜͡➪ *${prefix}mimpi*
║│【✿͜͡➪ *${prefix}pantun*
║│【✿͜͡➪ *${prefix}hidetag*
║│【✿͜͡➪ *${prefix}estime*
║│【✿͜͡➪ *${prefix}tes*
║│【✿͜͡➪ *${prefix}request*
║│【✿͜͡➪ *${prefix}tercantik*
║╰───────────────────
║▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╠═[ *MENU7.2* ] ➪➪➪➪➪➪➪➪➪
║▬▭▬▭▬▭▬▭▬▭▬▭▬▭
║╭───────────────────
║│【✿͜͡➪ *${prefix}bass*
║│【✿͜͡➪ *${prefix}tupai*
║│【✿͜͡➪ *${prefix}gemuk*
║│【✿͜͡➪ *${prefix}slow*
║│【✿͜͡➪ *${prefix}sound1*
║│【✿͜͡➪ *${prefix}sound2*
║│【✿͜͡➪ *${prefix}sound3*
║│【✿͜͡➪ *${prefix}sound4*
║│【✿͜͡➪ *${prefix}sound5*
║│【✿͜͡➪ *${prefix}sound6*
║│【✿͜͡➪ *${prefix}sound7*
║│【✿͜͡➪ *${prefix}sound8*
║│【✿͜͡➪ *${prefix}sound9*
║│【✿͜͡➪ *${prefix}sound10*
║│【✿͜͡➪ *${prefix}sound11*
║│【✿͜͡➪ *${prefix}sound12*
║│【✿͜͡➪ *${prefix}sound13*
║│【✿͜͡➪ *${prefix}sound14*
║│【✿͜͡➪ *${prefix}sound15*
║│【✿͜͡➪ *${prefix}sound16*
║│【✿͜͡➪ *${prefix}sound17*
║│【✿͜͡➪ *${prefix}sound18*
║│【✿͜͡➪ *${prefix}sound19*
║│【✿͜͡➪ *${prefix}sound20*
║│【✿͜͡➪ *${prefix}sound21*
║│【✿͜͡➪ *${prefix}sound22*
║│【✿͜͡➪ *${prefix}sound23*
║│【✿͜͡➪ *${prefix}sound24*
║│【✿͜͡➪ *${prefix}sound25*
║│【✿͜͡➪ *${prefix}sound26*
║│【✿͜͡➪ *${prefix}sound27*
║│【✿͜͡➪ *${prefix}sound28*
║│【✿͜͡➪ *${prefix}sound29*
║│【✿͜͡➪ *${prefix}sound30*
║│【✿͜͡➪ *${prefix}sound31*
║│【✿͜͡➪ *${prefix}sound32*
║│【✿͜͡➪ *${prefix}sound33*
║│【✿͜͡➪ *${prefix}sound34*
║│【✿͜͡➪ *${prefix}sound35*
║│【✿͜͡➪ *${prefix}sound36*
║│【✿͜͡➪ *${prefix}sound37*
║│【✿͜͡➪ *${prefix}sound38*
║│【✿͜͡➪ *${prefix}sound39*
║│【✿͜͡➪ *${prefix}sound40*
║│【✿͜͡➪ *${prefix}sound41*
║│【✿͜͡➪ *${prefix}sound42*
║│【✿͜͡➪ *${prefix}sound43*
║│【✿͜͡➪ *${prefix}sound44*
║│【✿͜͡➪ *${prefix}sound45*
║│【✿͜͡➪ *${prefix}sound46*
║│【✿͜͡➪ *${prefix}sound47*
║│【✿͜͡➪ *${prefix}sound48*
║│【✿͜͡➪ *${prefix}sound49*
║│【✿͜͡➪ *${prefix}sound50*
║│【✿͜͡➪ *${prefix}bernyanyi*
║│【✿͜͡➪ *${prefix}sad*
║│【✿͜͡➪ *${prefix}sad1*
║│【✿͜͡➪ *${prefix}candagodlooking*
║│【✿͜͡➪ *${prefix}babycute*
║│【✿͜͡➪ *${prefix}cidro2*
║│【✿͜͡➪ *${prefix}gam2piri*
║│【✿͜͡➪ *${prefix}akusukakamu*
║│【✿͜͡➪ *${prefix}terpesona*
║│【✿͜͡➪ *${prefix}gajelas*
║│【✿͜͡➪ *${prefix}ndabisabasaingris*
║│【✿͜͡➪ *${prefix}paplepap*
║│【✿͜͡➪ *${prefix}paplepapslow*
║╰───────────────────
║▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╚════════════════════
➪➪➪➪➪➪➪➪➪➪➪➪➪➪➪➪➪
╔════════════════════
║▬▭▬▭▬[ *THX TO* ]▬▭▬▭▬▭
║╭────────────────────
║│【✿͜͡➪ *ALLAH SWT*
║│【✿͜͡➪ *abay*
║│【✿͜͡➪ *RIZZ*
║│【✿͜͡➪ *RAMLAN ID*
║│【✿͜͡➪ *AMPIBI*
║│【✿͜͡➪ *ALL KREATOR BOT*
║╰───────────────────
║▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╚══════════════
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
	
*「 SELAMAT 」*
┏⊱ *Nama* : ${pushname}
┣⊱ *Nomer* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Limit* : +3
┣⊱ *Role*: ${role}
┗⊱ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*beli limit untuk mendapatkan limit/ naik level*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 ATM 」⊰━┓*\n┣⊱ *Nama* : ${pushname}\n┣⊱ *Nomer* : ${sender.split("@")[0]}\n┣⊱ *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}

exports.premadd = (pnom) => {
	return`*「 PREMIUM ADD 」*

*Name* : ${pnom}
*Expired* : 30 DAY\n*thank for order premium*`
}

exports.dellprem = (hnom) => {
	return`*「 PREMIUM DELETE 」*

*Name* : ${hnom}
*Expired* : NOW:v\n*thank for order premium back soon for buying again:D*`
}

exports.premon = (pushname) => {
	return`MAAF ${pushname} ANDA BUKAN USER PREMIUM`
}

