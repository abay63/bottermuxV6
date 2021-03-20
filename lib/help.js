
const help = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered) => { 
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
exports.help = help



  
