const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`
 ───「 *A L L  M E N U* 」───
 
 📡 *S Y S T E M  I N F O*
 ├─ Name: ${botname}
 ├─ Engine: Private Hosting
 ├─ Mode: ${rizkyyy.public}
 ├─ Type: Case - Node.js
 └─ Commands: 1,640+ Features

 ⚠️ *U S E R  G U I D E*
 _Please avoid spamming the system._
 _Utilize the features responsibly._

┌───  *D A F T A R  M E N U* ───
│
├─🤖 \`乂 O W N E R  O N L Y 乂\`
│  ├ ${prefix}autoread
│  ├ ${prefix}addsewa
│  ├ ${prefix}delsewa
│  ├ ${prefix}onlypc
│  ├ ${prefix}onlygc
│  ├ ${prefix}self
│  ├ ${prefix}clearchat
│  ├ ${prefix}pinchat
│  ├ ${prefix}unpinchat
│  ├ ${prefix}gconly
│  ├ ${prefix}public
│  ├ ${prefix}setpppanjang
│  ├ ${prefix}setppgcpanjang
│  ├ ${prefix}addcase
│  ├ ${prefix}join
│  ├ ${prefix}bctext
│  ├ ${prefix}poll
│  ├ ${prefix}bcimage
│  ├ ${prefix}bcvideo
│  ├ ${prefix}creategc
│  ├ ${prefix}setexif
│  ├ ${prefix}userjid
│  ├ ${prefix}setbotname
│  ├ ${prefix}setbotbio
│  ├ ${prefix}delppbot
│  ├ ${prefix}restart
│  ├ ${prefix}setppbot
│  ├ ${prefix}addprem
│  ├ ${prefix}delprem
│  ├ ${prefix}addowner
│  ├ ${prefix}delowner
│  ├ ${prefix}addvn
│  ├ ${prefix}delvn
│  ├ ${prefix}addsticker
│  ├ ${prefix}delsticker
│  ├ ${prefix}addimage
│  ├ ${prefix}delimage
│  ├ ${prefix}addvideo
│  ├ ${prefix}delvideo
│  ├ ${prefix}block
│  ├ ${prefix}unblock del
│  └ ${prefix}leavegc
│
├─🌙 \`乂 I S L A M I C 乂\`
│  ├ ${prefix}kisahnabi
│  ├ ${prefix}asmaulhusna
│  ├ ${prefix}bacaansholat
│  ├ ${prefix}audiosurah
│  ├ ${prefix}ayatkursi
│  ├ ${prefix}doaharian
│  ├ ${prefix}niatsholat
│  ├ ${prefix}quotesislami
│  ├ ${prefix}doatahlil
│  ├ ${prefix}alquran
│  └ ${prefix}jadwalsholat
│
├─✨ \`乂 N E W  F E A T U R E 乂\`
│  ├ ${prefix}UHD
│  ├ ${prefix}anime
│  ├ ${prefix}cekrekening
│  ├ ${prefix}antidelete
│  ├ ${prefix}tokobo
│  ├ ${prefix}loker
│  ├ ${prefix}blacklist
│  ├ ${prefix}unblacklist
│  ├ ${prefix}listblacklist
│  ├ ${prefix}playch
│  ├ ${prefix}tochibi
│  ├ ${prefix}tomaid
│  ├ ${prefix}tofurina
│  ├ ${prefix}fakethread
│  ├ ${prefix}antinsfw
│  ├ ${prefix}toluminare
│  ├ ${prefix}tofigure
│  ├ ${prefix}tofigure2
│  ├ ${prefix}tofigure3
│  ├ ${prefix}tofigure4
│  ├ ${prefix}tohitam
│  ├ ${prefix}tobotak
│  ├ ${prefix}tohijab
│  ├ ${prefix}hdvid2
│  ├ ${prefix}ytstalk
│  ├ ${prefix}CekNik
│  ├ ${prefix}FakeStory
│  ├ ${prefix}Animebrat
│  ├ ${prefix}AIO (all in one)
│  ├ ${prefix}Upsw
│  ├ ${prefix}QR
│  ├ ${prefix}paustad
│  ├ ${prefix}nulis
│  ├ ${prefix}Addautogc
│  ├ ${prefix}delautogc
│  ├ ${prefix}listautogc
│  ├ ${prefix}validate
│  ├ ${prefix}toplevel
│  ├ ${prefix}Rank
│  ├ ${prefix}cheat
│  ├ ${prefix}daftar
│  ├ ${prefix}verify
│  ├ ${prefix}cekregist
│  ├ ${prefix}cekkode
│  ├ ${prefix}buypremium
│  ├ ${prefix}tagadmin
│  ├ ${prefix}botak
│  ├ ${prefix}hd2
│  ├ ${prefix}listonline
│  ├ ${prefix}fitnah
│  ├ ${prefix}hijabkan
│  ├ ${prefix}edit (untuk edit foto)
│  ├ ${prefix}ubahgender
│  ├ ${prefix}nglspam
│  ├ ${prefix}paustad
│  ├ ${prefix}upgc
│  └ ${prefix}reactch
│
├─👥 \`乂 G R O U P  M E N U 乂\`
│  ├ ${prefix}sider
│  ├ ${prefix}antidelete
│  ├ ${prefix}autoaigc
│  ├ ${prefix}warcall
│  ├ ${prefix}autosimi
│  ├ ${prefix}alyachat
│  ├ ${prefix}mute
│  ├ ${prefix}setwelcome
│  ├ ${prefix}setleft
│  ├ ${prefix}welcome on/off
│  ├ ${prefix}antilink
│  ├ ${prefix}antiwame
│  ├ ${prefix}linkgc
│  ├ ${prefix}tagadmin
│  ├ ${prefix}invite
│  ├ ${prefix}ephemeral
│  ├ ${prefix}delete
│  ├ ${prefix}setppgroup
│  ├ ${prefix}delppgroup
│  ├ ${prefix}setname
│  ├ ${prefix}setdesc
│  ├ ${prefix}add
│  ├ ${prefix}kick
│  ├ ${prefix}promote
│  ├ ${prefix}demote
│  ├ ${prefix}hidetag
│  ├ ${prefix}totag
│  ├ ${prefix}tagall
│  ├ ${prefix}editinfo
│  ├ ${prefix}opentime
│  ├ ${prefix}closetime
│  ├ ${prefix}resetlink
│  ├ ${prefix}getbio
│  ├ ${prefix}vote
│  ├ ${prefix}upvote
│  ├ ${prefix}downvote
│  ├ ${prefix}checkvote
│  ├ ${prefix}delvote
│  ├ ${prefix}autostickergc
│  ├ ${prefix}antilinkgc
│  ├ ${prefix}antilinkch
│  ├ ${prefix}antiwame
│  ├ ${prefix}antilinkall
│  ├ ${prefix}antilinktiktok
│  ├ ${prefix}antilinkfb
│  ├ ${prefix}antilinktwitter
│  ├ ${prefix}antilinkig
│  ├ ${prefix}antilinktg
│  ├ ${prefix}antilinkytvid
│  ├ ${prefix}antilinkytch
│  ├ ${prefix}antivirus
│  ├ ${prefix}antitoxic
│  └ ${prefix}react
│
├─📥 \`乂 D O W N L O A D 乂\`
│  ├ ${prefix}an1
│  ├ ${prefix}tiktok
│  ├ ${prefix}tiktokslide
│  ├ ${prefix}tiktokaudio
│  ├ ${prefix}spdl
│  ├ ${prefix}ytsearch
│  ├ ${prefix}ttsearch
│  ├ ${prefix}teraboxdl
│  ├ ${prefix}snackvideo
│  ├ ${prefix}capcutdl
│  ├ ${prefix}play
│  ├ ${prefix}ytmp3
│  ├ ${prefix}ytmp4
│  ├ ${prefix}google
│  ├ ${prefix}imdb
│  ├ ${prefix}weather
│  ├ ${prefix}wanumber
│  ├ ${prefix}instagram
│  ├ ${prefix}facebook
│  ├ ${prefix}twittervid
│  ├ ${prefix}telestick
│  ├ ${prefix}spotify
│  ├ ${prefix}gitclone
│  ├ ${prefix}happymod
│  ├ ${prefix}gdrive
│  ├ ${prefix}pinterest
│  └ ${prefix}ringtone
│
├─🎮 \`乂 G A M E S 乂\`
│  ├ ${prefix}tebakanml
│  ├ ${prefix}tebakgame
│  ├ ${prefix}tebaklogo
│  ├ ${prefix}tebaksurah
│  ├ ${prefix}blackjack
│  ├ ${prefix}tebakkata
│  ├ ${prefix}tebaktebakan
│  ├ ${prefix}tebaklirik
│  ├ ${prefix}tebakgambar
│  ├ ${prefix}tebaklagu
│  ├ ${prefix}tebakkimia
│  ├ ${prefix}asahotak
│  ├ ${prefix}siapaaku
│  ├ ${prefix}susunkata
│  ├ ${prefix}tekateki
│  ├ ${prefix}tebakbendera
│  ├ ${prefix}tebakbenderav2
│  ├ ${prefix}tebakkabupaten
│  ├ ${prefix}caklontong
│  ├ ${prefix}family100
│  └ ${prefix}werewolf
│
├─⚔️ \`乂 R P G  S Y S T E M 乂\`
│  ├ ${prefix}kerja
│  ├ ${prefix}fightnaga
│  ├ ${prefix}fightkucing
│  ├ ${prefix}fightphonix
│  ├ ${prefix}fightgriffin
│  ├ ${prefix}fightkyubi
│  ├ ${prefix}fightcentaur
│  ├ ${prefix}nabung
│  ├ ${prefix}mining
│  ├ ${prefix}bankcek
│  ├ ${prefix}maling
│  ├ ${prefix}banknabung
│  ├ ${prefix}banktarik
│  ├ ${prefix}berkebon
│  ├ ${prefix}crafting
│  ├ ${prefix}bet
│  ├ ${prefix}bonus
│  ├ ${prefix}buah
│  ├ ${prefix}nebang
│  ├ ${prefix}bekerja
│  ├ ${prefix}bansos
│  ├ ${prefix}taxy
│  ├ ${prefix}mulung
│  ├ ${prefix}berburu
│  ├ ${prefix}polisi
│  ├ ${prefix}berdagang
│  ├ ${prefix}rampok
│  ├ ${prefix}bunuh
│  ├ ${prefix}collect
│  ├ ${prefix}mancing
│  ├ ${prefix}repair
│  ├ ${prefix}feed
│  ├ ${prefix}fight
│  ├ ${prefix}gajian
│  ├ ${prefix}upgrade
│  ├ ${prefix}transfer
│  ├ ${prefix}shop
│  ├ ${prefix}selectskill
│  ├ ${prefix}sampah
│  ├ ${prefix}roket
│  ├ ${prefix}ojek
│  ├ ${prefix}nguli
│  ├ ${prefix}pasar
│  ├ ${prefix}rob
│  ├ ${prefix}referal
│  ├ ${prefix}petshop
│  ├ ${prefix}kolam
│  ├ ${prefix}koboy
│  ├ ${prefix}leaderboard
│  ├ ${prefix}casino
│  ├ ${prefix}ewe-paksa
│  ├ ${prefix}duel
│  ├ ${prefix}petualang
│  ├ ${prefix}perangsarung
│  ├ ${prefix}ulartangga
│  └ ${prefix}slot
│
├─💬 \`乂 Q U O T E S 乂\`
│  ├ ${prefix}quotesanime
│  ├ ${prefix}quotesbacot
│  ├ ${prefix}quotesbucin
│  ├ ${prefix}quotesmotivasi
│  ├ ${prefix}quotesgalau
│  ├ ${prefix}quotesgombal
│  ├ ${prefix}quoteshacker
│  └ ${prefix}quotesbijak
│
├─🔍 \`乂 S T A L K E R 乂\`
│  ├ ${prefix}igstalk
│  ├ ${prefix}ttstalk
│  ├ ${prefix}ffstalk
│  ├ ${prefix}mlstalk
│  ├ ${prefix}npmstalk
│  ├ ${prefix}ghstalk
│  └ ${prefix}ytstalk
│
├─🤖 \`乂 A I  A S S I S T A N T 乂\`
│  ├ ${prefix}leptonai
│  ├ ${prefix}text2anime
│  ├ ${prefix}faceswap
│  ├ ${prefix}openai
│  ├ ${prefix}aiimg
│  ├ ${prefix}ai4chat
│  ├ ${prefix}aimath
│  ├ ${prefix}aoyoai
│  ├ ${prefix}simi
│  ├ ${prefix}powerbrain
│  ├ ${prefix}mind
│  ├ ${prefix}hitori-gotoh
│  ├ ${prefix}hiura-mihate
│  ├ ${prefix}hoshino-takanashi
│  ├ ${prefix}ai
│  ├ ${prefix}bard
│  ├ ${prefix}prodia
│  ├ ${prefix}diffusion-anime
│  ├ ${prefix}travel-assistant
│  ├ ${prefix}ocr
│  ├ ${prefix}guru-ai
│  ├ ${prefix}emi-ai
│  ├ ${prefix}claude-ai
│  ├ ${prefix}costume-ai
│  ├ ${prefix}herc-ai
│  ├ ${prefix}hercai-cartoon
│  ├ ${prefix}hercai-animefy
│  ├ ${prefix}hercai-lexica
│  ├ ${prefix}hercai-prodia
│  ├ ${prefix}hercai-simurg
│  ├ ${prefix}hercai-raava
│  ├ ${prefix}hercai-shonin
│  ├ ${prefix}realistic
│  ├ ${prefix}3dmodel
│  ├ ${prefix}jadizombie
│  ├ ${prefix}blackboxai
│  ├ ${prefix}photoleapai
│  ├ ${prefix}diffusion
│  ├ ${prefix}indo-ai
│  ├ ${prefix}lamaai
│  ├ ${prefix}aivo
│  ├ ${prefix}gemini
│  ├ ${prefix}text2img
│  ├ ${prefix}absolutely
│  ├ ${prefix}dalle
│  ├ ${prefix}bingimg
│  ├ ${prefix}bingai
│  ├ ${prefix}gptimg
│  ├ ${prefix}gpt4
│  ├ ${prefix}gpt4_2
│  ├ ${prefix}anything
│  ├ ${prefix}hdvid
│  ├ ${prefix}cai
│  ├ ${prefix}youai
│  ├ ${prefix}remini
│  ├ ${prefix}jadianime
│  ├ ${prefix}removebg
│  └ ${prefix}nulis
│
├─🎈 \`乂 F U N  Z O N E 乂\`
│  ├ ${prefix}smeme
│  ├ ${prefix}ppcouple
│  ├ ${prefix}define
│  ├ ${prefix}qc
│  ├ ${prefix}lyrics
│  ├ ${prefix}suit
│  ├ ${prefix}math
│  ├ ${prefix}tictactoe
│  ├ ${prefix}fact
│  ├ ${prefix}truth
│  ├ ${prefix}dare
│  ├ ${prefix}couple
│  ├ ${prefix}soulmate
│  ├ ${prefix}stupidcheck
│  ├ ${prefix}handsomecheck
│  ├ ${prefix}uncleancheck
│  ├ ${prefix}hotcheck
│  ├ ${prefix}smartcheck
│  ├ ${prefix}greatcheck
│  ├ ${prefix}evilcheck
│  ├ ${prefix}dogcheck
│  ├ ${prefix}coolcheck
│  ├ ${prefix}waifucheck
│  ├ ${prefix}awesomecheck
│  ├ ${prefix}gaycheck
│  ├ ${prefix}cutecheck
│  ├ ${prefix}lesbiancheck
│  ├ ${prefix}hornycheck
│  ├ ${prefix}prettycheck
│  ├ ${prefix}lovelycheck
│  ├ ${prefix}uglycheck
│  ├ ${prefix}pick
│  ├ ${prefix}quotes
│  ├ ${prefix}can
│  ├ ${prefix}is
│  ├ ${prefix}when
│  ├ ${prefix}where
│  ├ ${prefix}what
│  ├ ${prefix}how
│  ├ ${prefix}rate
│  ├ ${prefix}cry
│  ├ ${prefix}kill
│  ├ ${prefix}hug
│  ├ ${prefix}pat
│  ├ ${prefix}lick
│  ├ ${prefix}kiss
│  ├ ${prefix}bite
│  ├ ${prefix}yeet
│  ├ ${prefix}bully
│  ├ ${prefix}bonk
│  ├ ${prefix}wink
│  ├ ${prefix}poke
│  ├ ${prefix}nom
│  ├ ${prefix}slap
│  ├ ${prefix}smile
│  ├ ${prefix}wave
│  ├ ${prefix}awoo
│  ├ ${prefix}blush
│  ├ ${prefix}smug
│  ├ ${prefix}glomp
│  ├ ${prefix}happy
│  ├ ${prefix}dance
│  ├ ${prefix}cringe
│  ├ ${prefix}cuddle
│  ├ ${prefix}highfive
│  ├ ${prefix}shinobu
│  ├ ${prefix}handhold
│  ├ ${prefix}spank
│  ├ ${prefix}tickle
│  ├ ${prefix}avatar
│  ├ ${prefix}feed
│  ├ ${prefix}foxgirl
│  ├ ${prefix}gecg
│  └ ${prefix}checkme
│
├─📸 \`乂 R A N D O M  M E D I A 乂\`
│  ├ ${prefix}aesthetic
│  ├ ${prefix}coffee
│  ├ ${prefix}wikimedia
│  ├ ${prefix}wallpaper
│  ├ ${prefix}art
│  ├ ${prefix}bts
│  ├ ${prefix}dogwoof
│  ├ ${prefix}catmeow
│  ├ ${prefix}lizardpic
│  ├ ${prefix}goosebird
│  ├ ${prefix}8ballpool
│  ├ ${prefix}cosplay
│  ├ ${prefix}hacker
│  ├ ${prefix}cyber
│  ├ ${prefix}gamewallpaper
│  ├ ${prefix}islamic
│  ├ ${prefix}jennie
│  ├ ${prefix}jiso
│  ├ ${prefix}satanic
│  ├ ${prefix}justina
│  ├ ${prefix}cartoon
│  ├ ${prefix}pentol
│  ├ ${prefix}cat
│  ├ ${prefix}kpop
│  ├ ${prefix}exo
│  ├ ${prefix}lisa
│  ├ ${prefix}space
│  ├ ${prefix}car
│  ├ ${prefix}technology
│  ├ ${prefix}bike
│  ├ ${prefix}shortquote
│  ├ ${prefix}antiwork
│  ├ ${prefix}hacking
│  ├ ${prefix}boneka
│  ├ ${prefix}rose
│  ├ ${prefix}ryujin
│  ├ ${prefix}ulzzangboy
│  ├ ${prefix}ulzzanggirl
│  ├ ${prefix}wallml
│  ├ ${prefix}wallphone
│  ├ ${prefix}mountain
│  ├ ${prefix}goose
│  ├ ${prefix}profilepic
│  ├ ${prefix}couplepic
│  ├ ${prefix}programming
│  ├ ${prefix}pubg
│  ├ ${prefix}blackpink
│  ├ ${prefix}randomboy
│  └ ${prefix}randomgirl
│
├─📁 \`乂 S T I C K E R S 乂\`
│  ├ ${prefix}goose
│  ├ ${prefix}woof
│  ├ ${prefix}8ball
│  ├ ${prefix}lizard
│  ├ ${prefix}meow
│  ├ ${prefix}gura
│  ├ ${prefix}doge
│  ├ ${prefix}patrick
│  └ ${prefix}lovestick
│
├─⛩️ \`乂 A N I M E  H U B 乂\`
│  ├ ${prefix}otakudesu
│  ├ ${prefix}kaorinusantara
│  ├ ${prefix}akira
│  ├ ${prefix}akiyama
│  ├ ${prefix}ana
│  ├ ${prefix}asuna
│  ├ ${prefix}ayuzawa
│  ├ ${prefix}boruto
│  ├ ${prefix}chiho
│  ├ ${prefix}chitoge
│  ├ ${prefix}cosplayloli
│  ├ ${prefix}cosplaysagiri
│  ├ ${prefix}deidara
│  ├ ${prefix}doraemon
│  ├ ${prefix}elaina
│  ├ ${prefix}emilia
│  ├ ${prefix}erza
│  ├ ${prefix}gremory
│  ├ ${prefix}hestia
│  ├ ${prefix}hinata
│  ├ ${prefix}husbu
│  ├ ${prefix}inori
│  ├ ${prefix}isuzu
│  ├ ${prefix}itachi
│  ├ ${prefix}itori
│  ├ ${prefix}kaga
│  ├ ${prefix}kagura
│  ├ ${prefix}kakasih
│  ├ ${prefix}kaori
│  ├ ${prefix}keneki
│  ├ ${prefix}kotori
│  ├ ${prefix}kurumi
│  ├ ${prefix}loli
│  ├ ${prefix}madara
│  ├ ${prefix}megumin
│  ├ ${prefix}mikasa
│  ├ ${prefix}mikey
│  ├ ${prefix}miku
│  ├ ${prefix}minato
│  ├ ${prefix}naruto
│  ├ ${prefix}neko
│  ├ ${prefix}neko2
│  ├ ${prefix}nekonime
│  ├ ${prefix}nezuko
│  ├ ${prefix}onepiece
│  ├ ${prefix}pokemon
│  ├ ${prefix}randomnime
│  ├ ${prefix}randomnime2
│  ├ ${prefix}rize
│  ├ ${prefix}sagiri
│  ├ ${prefix}sakura
│  ├ ${prefix}sasuke
│  ├ ${prefix}shina
│  ├ ${prefix}shinka
│  ├ ${prefix}shinomiya
│  ├ ${prefix}shizuka
│  ├ ${prefix}shota
│  ├ ${prefix}tejina
│  ├ ${prefix}toukachan
│  ├ ${prefix}tsunade
│  ├ ${prefix}waifu
│  ├ ${prefix}animewall
│  ├ ${prefix}yotsuba
│  ├ ${prefix}yuki
│  ├ ${prefix}yumeko
│  ├ ${prefix}8ball
│  ├ ${prefix}tickle
│  ├ ${prefix}gecg
│  ├ ${prefix}feed
│  ├ ${prefix}animeawoo
│  ├ ${prefix}animemegumin
│  ├ ${prefix}animeshinobu
│  ├ ${prefix}animehandhold
│  ├ ${prefix}animehighfive
│  ├ ${prefix}animecringe
│  ├ ${prefix}animedance
│  ├ ${prefix}animehappy
│  ├ ${prefix}animeglomp
│  ├ ${prefix}animeblush
│  ├ ${prefix}animesmug
│  ├ ${prefix}animewave
│  ├ ${prefix}animesmile
│  ├ ${prefix}animepoke
│  ├ ${prefix}animewink
│  ├ ${prefix}animebonk
│  ├ ${prefix}animebully
│  ├ ${prefix}animeyeet
│  ├ ${prefix}animebite
│  ├ ${prefix}animelick
│  ├ ${prefix}animekill
│  ├ ${prefix}animecry
│  ├ ${prefix}animewlp
│  ├ ${prefix}animekiss
│  ├ ${prefix}animehug
│  ├ ${prefix}animeneko
│  ├ ${prefix}animepat
│  ├ ${prefix}animeslap
│  ├ ${prefix}animecuddle
│  ├ ${prefix}animewaifu
│  ├ ${prefix}animenom
│  ├ ${prefix}animefoxgirl
│  ├ ${prefix}animegecg
│  ├ ${prefix}animetickle
│  ├ ${prefix}animefeed
│  ├ ${prefix}animeavatar
│  ├ ${prefix}genshin
│  ├ ${prefix}anime
│  └ ${prefix}amv
│
├─🎨 \`乂 E P H O T O  M A K E R 乂\`
│  ├ ${prefix}glitchtext
│  ├ ${prefix}writetext
│  ├ ${prefix}advancedglow
│  ├ ${prefix}typographytext
│  ├ ${prefix}pixelglitch
│  ├ ${prefix}neonglitch
│  ├ ${prefix}flagtext
│  ├ ${prefix}flag3dtext
│  ├ ${prefix}deletingtext
│  ├ ${prefix}blackpinkstyle
│  ├ ${prefix}glowingtext
│  ├ ${prefix}underwatertext
│  ├ ${prefix}logomaker
│  ├ ${prefix}cartoonstyle
│  ├ ${prefix}papercutstyle
│  ├ ${prefix}watercolortext
│  ├ ${prefix}effectclouds
│  ├ ${prefix}blackpinklogo
│  ├ ${prefix}gradienttext
│  ├ ${prefix}summerbeach
│  ├ ${prefix}luxurygold
│  ├ ${prefix}multicoloredneon
│  ├ ${prefix}sandsummer
│  ├ ${prefix}galaxywallpaper
│  ├ ${prefix}1917style
│  ├ ${prefix}makingneon
│  ├ ${prefix}royaltext
│  ├ ${prefix}freecreate
│  ├ ${prefix}galaxystyle
│  └ ${prefix}lighteffects
│
├─📦 \`乂 D A T A B A S E 乂\`
│  ├ ${prefix}setcmd
│  ├ ${prefix}delcmd
│  ├ ${prefix}listcmd
│  ├ ${prefix}lockcmd
│  ├ ${prefix}addmsg
│  ├ ${prefix}delmsg
│  ├ ${prefix}getmsg
│  └ ${prefix}listmsg
│
├─⚡ \`乂 B U G  W A R 乂\`
│  ├ ${prefix}vip
│  ├ ${prefix}crush
│  ├ ${prefix}xandroid
│  ├ ${prefix}xandroid2
│  ├ ${prefix}systemuicrash
│  ├ ${prefix}xsysui
│  ├ ${prefix}xios
│  ├ ${prefix}xios2
│  ├ ${prefix}xgc
│  ├ ${prefix}ioskill
│  ├ ${prefix}iosx
│  ├ ${prefix}onekill
│  ├ ${prefix}oneclickall
│  ├ ${prefix}xsamsung
│  ├ ${prefix}xwaweb
│  ├ ${prefix}doublekill
│  ├ ${prefix}triplekill
│  └ ${prefix}💀
│
├─⚙️ \`乂 O T H E R S 乂\`
│  ├ ${prefix}ping
│  ├ ${prefix}tqto
│  ├ ${prefix}ttp
│  ├ ${prefix}brat
│  ├ ${prefix}animebrat
│  ├ ${prefix}bratvid
│  ├ ${prefix}furbrat
│  ├ ${prefix}totalchat
│  ├ ${prefix}hytam
│  ├ ${prefix}cekidch
│  ├ ${prefix}ceksewa
│  ├ ${prefix}listsewa
│  ├ ${prefix}readviewonce
│  ├ ${prefix}cekkhodam
│  ├ ${prefix}alkitab
│  ├ ${prefix}totalfitur
│  ├ ${prefix}menu
│  ├ ${prefix}myip
│  ├ ${prefix}reportbug
│  ├ ${prefix}listpem
│  ├ ${prefix}liststicker
│  ├ ${prefix}listimage
│  ├ ${prefix}listvideo
│  ├ ${prefix}listvn
│  ├ ${prefix}listbadword
│  ├ ${prefix}listpc
│  ├ ${prefix}listgc
│  ├ ${prefix}owner
│  ├ ${prefix}jadibot
│  ├ ${prefix}listjadibot
│  ├ ${prefix}donate
│  ├ ${prefix}friend
│  ├ ${prefix}obfuscate
│  ├ ${prefix}styletext
│  ├ ${prefix}fliptext
│  ├ ${prefix}tts
│  ├ ${prefix}say
│  ├ ${prefix}togif
│  ├ ${prefix}toqr
│  ├ ${prefix}bass
│  ├ ${prefix}blown
│  ├ ${prefix}deep
│  ├ ${prefix}earrape
│  ├ ${prefix}fast
│  ├ ${prefix}fat
│  ├ ${prefix}nightcore
│  ├ ${prefix}reverse
│  ├ ${prefix}robot
│  ├ ${prefix}slow
│  ├ ${prefix}smooth
│  ├ ${prefix}squirrel
│  ├ ${prefix}tinyurl
│  ├ ${prefix}tinyurl
│  ├ ${prefix}tovn
│  ├ ${prefix}toaudio
│  ├ ${prefix}tomp3
│  ├ ${prefix}tomp4
│  ├ ${prefix}toimg
│  ├ ${prefix}toonce
│  ├ ${prefix}sticker
│  ├ ${prefix}take
│  ├ ${prefix}emoji
│  ├ ${prefix}volume
│  ├ ${prefix}ebinary
│  ├ ${prefix}dbinary
│  ├ ${prefix}ssweb
│  ├ ${prefix}quoted
│  ├ ${prefix}runtime
│  ├ ${prefix}fakeml
│  ├ ${prefix}fakedev
│  ├ ${prefix}fakegc
│  ├ ${prefix}fakedana
│  ├ ${prefix}lobbyff
│  └ ${prefix}web2zip
│
├─🔮 \`乂 P R I M B O N 乂\`
│  ├ ${prefix}artimimpi
│  ├ ${prefix}artinama
│  ├ ${prefix}ramaljodoh
│  ├ ${prefix}ramaljodohbali
│  ├ ${prefix}suamiistri
│  ├ ${prefix}ramalcinta
│  ├ ${prefix}cocoknama
│  ├ ${prefix}pasangan
│  ├ ${prefix}jadiannikah
│  ├ ${prefix}sifatusaha
│  ├ ${prefix}rezeki
│  ├ ${prefix}pekerjaan
│  ├ ${prefix}nasib
│  ├ ${prefix}penyakit
│  ├ ${prefix}tarot
│  ├ ${prefix}fengshui
│  ├ ${prefix}haribaik
│  ├ ${prefix}harisangar
│  ├ ${prefix}harisial
│  ├ ${prefix}nagahari
│  ├ ${prefix}arahrezeki
│  ├ ${prefix}peruntungan
│  ├ ${prefix}weton
│  ├ ${prefix}karakter
│  ├ ${prefix}keberuntungan
│  ├ ${prefix}memancing
│  ├ ${prefix}masasubur
│  ├ ${prefix}zodiak
│  └ ${prefix}shio
│
└─🎖️ \`乂 C E R T I F I C A T E 乂\`
   ├ ${prefix}stkbaik
   ├ ${prefix}stkcantik
   ├ ${prefix}stkganteng
   ├ ${prefix}stkhitam
   ├ ${prefix}stkmiskin
   ├ ${prefix}stkkaya
   ├ ${prefix}stkmarah
   ├ ${prefix}stksabar
   ├ ${prefix}stksakiti
   ├ ${prefix}stkkeren
   ├ ${prefix}stkmisterius
   ├ ${prefix}stksantai
   ├ ${prefix}stksombong
   ├ ${prefix}stklucu
   └ ${prefix}stkgila

 🧠 *A I  T H O U G H T*
 _"Inovasi tiada henti, membawa efisiensi_
 _dalam setiap baris interaksi pintar Anda."_

 ⚙️ *Powered by ${botname} AI*`
}

global.animemenu = (prefix) => {
return`───「 *A N I M E  I N F O* 」───

 ⛩️ Core Commands:
 ├─ ${prefix}otakudesu
 ├─ ${prefix}animefinder
 └─ ${prefix}kaorinusantara

 🌸 Character Library:
 ├─ ${prefix}akira
 ├─ ${prefix}akiyama
 ├─ ${prefix}ana
 ├─ ${prefix}asuna
 ├─ ${prefix}ayuzawa
 ├─ ${prefix}boruto
 ├─ ${prefix}chiho
 ├─ ${prefix}chitoge
 ├─ ${prefix}cosplayloli
 ├─ ${prefix}cosplaysagiri
 ├─ ${prefix}deidara
 ├─ ${prefix}doraemon
 ├─ ${prefix}elaina
 ├─ ${prefix}emilia
 ├─ ${prefix}erza
 ├─ ${prefix}gremory
 ├─ ${prefix}hestia
 ├─ ${prefix}hinata
 ├─ ${prefix}husbu
 ├─ ${prefix}inori
 ├─ ${prefix}isuzu
 ├─ ${prefix}itachi
 ├─ ${prefix}itori
 ├─ ${prefix}kaga
 ├─ ${prefix}kagura
 ├─ ${prefix}kakasih
 ├─ ${prefix}kaori
 ├─ ${prefix}keneki
 ├─ ${prefix}kotori
 ├─ ${prefix}kurumi
 ├─ ${prefix}loli
 ├─ ${prefix}madara
 ├─ ${prefix}megumin
 ├─ ${prefix}mikasa
 ├─ ${prefix}mikey
 ├─ ${prefix}miku
 ├─ ${prefix}minato
 ├─ ${prefix}naruto
 ├─ ${prefix}neko
 ├─ ${prefix}neko2
 ├─ ${prefix}nekonime
 ├─ ${prefix}nezuko
 ├─ ${prefix}onepiece
 ├─ ${prefix}pokemon
 ├─ ${prefix}randomnime
 ├─ ${prefix}randomnime2
 ├─ ${prefix}rize
 ├─ ${prefix}sagiri
 ├─ ${prefix}sakura
 ├─ ${prefix}sasuke
 ├─ ${prefix}shina
 ├─ ${prefix}shinka
 ├─ ${prefix}shinomiya
 ├─ ${prefix}shizuka
 ├─ ${prefix}shota
 ├─ ${prefix}tejina
 ├─ ${prefix}toukachan
 ├─ ${prefix}tsunade
 ├─ ${prefix}waifu
 ├─ ${prefix}animewall
 ├─ ${prefix}yotsuba
 ├─ ${prefix}yuki
 └─ ${prefix}yumeko

 ⚡ Interactions & Media:
 ├─ ${prefix}8ball
 ├─ ${prefix}tickle
 ├─ ${prefix}gecg
 ├─ ${prefix}feed
 ├─ ${prefix}animeawoo
 ├─ ${prefix}animemegumin
 ├─ ${prefix}animeshinobu
 ├─ ${prefix}animehandhold
 ├─ ${prefix}animehighfive
 ├─ ${prefix}animecringe
 ├─ ${prefix}animedance
 ├─ ${prefix}animehappy
 ├─ ${prefix}animeglomp
 ├─ ${prefix}animeblush
 ├─ ${prefix}animesmug
 ├─ ${prefix}animewave
 ├─ ${prefix}animesmile
 ├─ ${prefix}animepoke
 ├─ ${prefix}animewink
 ├─ ${prefix}animebonk
 ├─ ${prefix}animebully
 ├─ ${prefix}animeyeet
 ├─ ${prefix}animebite
 ├─ ${prefix}animelick
 ├─ ${prefix}animekill
 ├─ ${prefix}animecry
 ├─ ${prefix}animewlp
 ├─ ${prefix}animekiss
 ├─ ${prefix}animehug
 ├─ ${prefix}animeneko
 ├─ ${prefix}animepat
 ├─ ${prefix}animeslap
 ├─ ${prefix}animecuddle
 ├─ ${prefix}animewaifu
 ├─ ${prefix}animenom
 ├─ ${prefix}animefoxgirl
 ├─ ${prefix}animegecg
 ├─ ${prefix}animetickle
 ├─ ${prefix}animefeed
 ├─ ${prefix}animeavatar
 ├─ ${prefix}genshin
 ├─ ${prefix}anime
 └─ ${prefix}amv`}

global.ownermenu = (prefix) => {
return`───「 *O W N E R  O N L Y* 」───

 🌐 System Access:
 ├─ ${prefix}autoread
 ├─ ${prefix}addsewa
 ├─ ${prefix}delsewa
 ├─ ${prefix}onlypc
 ├─ ${prefix}onlygc
 ├─ ${prefix}self
 ├─ ${prefix}clearchat
 ├─ ${prefix}pinchat
 ├─ ${prefix}unpinchat
 ├─ ${prefix}gconly
 ├─ ${prefix}public
 ├─ ${prefix}addcase
 ├─ ${prefix}join
 ├─ ${prefix}creategc
 └─ ${prefix}restart

 📢 Broadcasting:
 ├─ ${prefix}bctext
 ├─ ${prefix}poll
 ├─ ${prefix}bcimage
 └─ ${prefix}bcvideo

 🤖 Bot Customization:
 ├─ ${prefix}setexif
 ├─ ${prefix}userjid
 ├─ ${prefix}setbotname
 ├─ ${prefix}setbotbio
 ├─ ${prefix}delppbot
 ├─ ${prefix}setppbot
 └─ ${prefix}set (all inventory)

 💎 Database & Variables:
 ├─ ${prefix}addprem
 ├─ ${prefix}delprem
 ├─ ${prefix}addowner
 ├─ ${prefix}delowner
 ├─ ${prefix}setlimit
 ├─ ${prefix}setmoney
 ├─ ${prefix}setlevel
 └─ ${prefix}setbank

 📥 Custom Media Assets:
 ├─ ${prefix}addvn
 ├─ ${prefix}delvn
 ├─ ${prefix}addsticker
 ├─ ${prefix}delsticker
 ├─ ${prefix}addimage
 ├─ ${prefix}delimage
 ├─ ${prefix}addvideo
 └─ ${prefix}delvideo

 🚷 Moderation:
 ├─ ${prefix}block
 ├─ ${prefix}unblock del
 └─ ${prefix}leavegc`}

global.othermenu = (prefix) => {
return`───「 *O T H E R  M E N U* 」───

 👤 Profiles & Interactions:
 ├─ ${prefix}daftar
 ├─ ${prefix}tagadmin
 ├─ ${prefix}botak
 ├─ ${prefix}listonline
 ├─ ${prefix}fitnah
 ├─ ${prefix}hijabkan
 ├─ ${prefix}edit (foto)
 ├─ ${prefix}ubahgender
 ├─ ${prefix}nglspam
 ├─ ${prefix}paustad
 ├─ ${prefix}upgc
 └─ ${prefix}friend

 📊 Metrics & Diagnostics:
 ├─ ${prefix}ping
 ├─ ${prefix}totalchat
 ├─ ${prefix}cekidch
 ├─ ${prefix}ceksewa
 ├─ ${prefix}listsewa
 ├─ ${prefix}totalfitur
 ├─ ${prefix}menu
 ├─ ${prefix}myip
 └─ ${prefix}reportbug

 🔍 Utilities & Information:
 ├─ ${prefix}readviewonce
 ├─ ${prefix}cekkhodam
 ├─ ${prefix}alkitab
 ├─ ${prefix}ssweb
 └─ ${prefix}runtime

 📂 List & Repositories:
 ├─ ${prefix}listpem
 ├─ ${prefix}liststicker
 ├─ ${prefix}listimage
 ├─ ${prefix}listvideo
 ├─ ${prefix}listvn
 ├─ ${prefix}listbadword
 ├─ ${prefix}listpc
 ├─ ${prefix}listgc
 ├─ ${prefix}owner
 ├─ ${prefix}jadibot
 └─ ${prefix}listjadibot

 🖋️ Typography & Text:
 ├─ ${prefix}tqto
 ├─ ${prefix}ttp
 ├─ ${prefix}brat
 ├─ ${prefix}bratvid
 ├─ ${prefix}styletext
 ├─ ${prefix}fliptext
 ├─ ${prefix}hytam
 ├─ ${prefix}tts
 ├─ ${prefix}say
 ├─ ${prefix}toqr
 └─ ${prefix}tinyurl

 🎵 Audio Engineering:
 ├─ ${prefix}bass
 ├─ ${prefix}blown
 ├─ ${prefix}deep
 ├─ ${prefix}earrape
 ├─ ${prefix}fast
 ├─ ${prefix}fat
 ├─ ${prefix}nightcore
 ├─ ${prefix}reverse
 ├─ ${prefix}robot
 ├─ ${prefix}slow
 ├─ ${prefix}smooth
 └─ ${prefix}squirrel

 🔄 Media Conversions:
 ├─ ${prefix}togif
 ├─ ${prefix}tovn
 ├─ ${prefix}toaudio
 ├─ ${prefix}tomp3
 ├─ ${prefix}tomp4
 ├─ ${prefix}toimg
 ├─ ${prefix}toonce
 ├─ ${prefix}sticker
 ├─ ${prefix}take
 ├─ ${prefix}emoji
 ├─ ${prefix}volume
 ├─ ${prefix}ebinary
 ├─ ${prefix}dbinary
 └─ ${prefix}quoted

 💻 Simulation & Sandbox:
 ├─ ${prefix}donate
 ├─ ${prefix}obfuscate
 ├─ ${prefix}fakeml
 ├─ ${prefix}fakedev
 ├─ ${prefix}fakegc
 ├─ ${prefix}fakedana
 ├─ ${prefix}lobbyff
 └─ ${prefix}web2zip`}

global.rpgmenu = (prefix, hituet) => {
return`───「 *R P G  S Y S T E M* 」───

 💼 Main Professions:
 ├─ ${prefix}kerja
 ├─ ${prefix}bekerja
 ├─ ${prefix}nguli
 ├─ ${prefix}ojek
 ├─ ${prefix}taxy
 └─ ${prefix}mulung

 ⛏️ Gathering & Crafting:
 ├─ ${prefix}mining
 ├─ ${prefix}berkebon
 ├─ ${prefix}nebang
 ├─ ${prefix}mancing
 └─ ${prefix}crafting

 ⚔️ Combat & Hunting:
 ├─ ${prefix}fightnaga
 ├─ ${prefix}fightkucing
 ├─ ${prefix}fightphonix
 ├─ ${prefix}fightgriffin
 ├─ ${prefix}fightkyubi
 ├─ ${prefix}fightcentaur
 ├─ ${prefix}berburu
 ├─ ${prefix}duel
 └─ ${prefix}fight

 🏦 Economy & Banking:
 ├─ ${prefix}nabung
 ├─ ${prefix}bankcek
 ├─ ${prefix}banknabung
 ├─ ${prefix}banktarik
 ├─ ${prefix}gajian
 ├─ ${prefix}transfer
 └─ ${prefix}shop

 🥷 Underworld Crime:
 ├─ ${prefix}maling
 ├─ ${prefix}rampok
 ├─ ${prefix}bunuh
 ├─ ${prefix}rob
 ├─ ${prefix}begal
 └─ ${prefix}polisi

 🏪 Commerce & Exchange:
 ├─ ${prefix}berdagang
 ├─ ${prefix}pasar
 └─ ${prefix}petshop

 🎰 Entertainment & Casino:
 ├─ ${prefix}bet
 ├─ ${prefix}casino
 ├─ ${prefix}slot
 ├─ ${prefix}Lotre
 ├─ ${prefix}poker3
 ├─ ${prefix}hilo
 └─ ${prefix}rr

 📊 Statistics & Socials:
 ├─ ${prefix}mystats
 ├─ ${prefix}leaderboard
 ├─ ${prefix}referal
 └─ ${prefix}portofolio

 🔮 Extras & Mini-Games:
 ├─ ${prefix}bonus
 ├─ ${prefix}buah
 ├─ ${prefix}collect
 ├─ ${prefix}repair
 ├─ ${prefix}feed
 ├─ ${prefix}upgrade
 ├─ ${prefix}selectskill
 ├─ ${prefix}sampah
 ├─ ${prefix}roket
 ├─ ${prefix}kolam
 ├─ ${prefix}koboy
 ├─ ${prefix}ewe-paksa
 ├─ ${prefix}pilihclass
 ├─ ${prefix}selectclass
 ├─ ${prefix}heist
 ├─ ${prefix}battle
 ├─ ${prefix}bomb
 ├─ ${prefix}petualang
 ├─ ${prefix}perangsarung
 ├─ ${prefix}ulartangga
 ├─ ${prefix}sabung
 ├─ ${prefix}invest
 ├─ ${prefix}blackinvest
 ├─ ${prefix}balapan
 └─ ${prefix}nyawit`}

global.gamemenu = (prefix, hituet) => {
return`───「 *G A M E S  P A N E L* 」───

 🧠 Trivia & Knowledge:
 ├─ ${prefix}tebakanml
 ├─ ${prefix}tebakgame
 ├─ ${prefix}tebaklogo
 ├─ ${prefix}tebaksurah
 ├─ ${prefix}tebakkata
 ├─ ${prefix}tebaktebakan
 ├─ ${prefix}tebaklirik
 ├─ ${prefix}tebakgambar
 ├─ ${prefix}tebaklagu
 ├─ ${prefix}tebakkimia
 ├─ ${prefix}tebakbendera
 ├─ ${prefix}tebakbenderav2
 └─ ${prefix}tebakkabupaten

 🧩 Logic & Strategy:
 ├─ ${prefix}blackjack
 ├─ ${prefix}asahotak
 ├─ ${prefix}siapaaku
 ├─ ${prefix}susunkata
 ├─ ${prefix}tekateki
 ├─ ${prefix}caklontong
 ├─ ${prefix}family100
 └─ ${prefix}werewolf`}

global.downloadmenu = (prefix) => {
return`───「 *D O W N L O A D E R* 」───

 📱 Short Videos & Socials:
 ├─ ${prefix}tiktok
 ├─ ${prefix}tiktokslide
 ├─ ${prefix}tiktokaudio
 ├─ ${prefix}threads
 ├─ ${prefix}snackvideo
 ├─ ${prefix}capcutdl
 ├─ ${prefix}instagram
 ├─ ${prefix}facebook
 ├─ ${prefix}twittervid
 └─ ${prefix}pinterest

 🎵 Audio & Streaming:
 ├─ ${prefix}spdl
 ├─ ${prefix}play
 ├─ ${prefix}ytmp3
 └─ ${prefix}spotify

 📺 Video & Search Engines:
 ├─ ${prefix}ytsearch
 ├─ ${prefix}ttsearch
 ├─ ${prefix}ytmp4
 ├─ ${prefix}google
 └─ ${prefix}imdb

 ☁️ Cloud & Packages:
 ├─ ${prefix}teraboxdl
 ├─ ${prefix}gitclone
 ├─ ${prefix}happymod
 ├─ ${prefix}gdrive
 └─ ${prefix}an1

 🛠️ System Extensions:
 ├─ ${prefix}weather
 ├─ ${prefix}wanumber
 ├─ ${prefix}telestick
 ├─ ${prefix}ringtone
 └─ ${prefix}AIO (all in one)`}

global.newfitur = (prefix) => {
return`───「 *N E W  F E A T U R E S* 」───

 🛰️ Navigation & Information:
 ├─ ${prefix}maps
 ├─ ${prefix}Spekhp
 └─ ${prefix}GSMARENA

 🎭 Sandbox & Spoofing:
 ├─ ${prefix}fakewafat
 ├─ ${prefix}fakedev
 ├─ ${prefix}fakedana
 ├─ ${prefix}fakegc
 ├─ ${prefix}lobyff
 ├─ ${prefix}fakebangjago
 ├─ ${prefix}faketwit
 └─ ${prefix}fakethread

 💎 Economy Ecosystem:
 ├─ ${prefix}redeem
 ├─ ${prefix}addredeem
 └─ ${prefix}listredeem

 🖼️ Advanced Processing:
 ├─ ${prefix}editimg
 ├─ ${prefix}stickerpack
 ├─ ${prefix}abrat
 ├─ ${prefix}bratbahlil
 ├─ ${prefix}QR
 └─ ${prefix}nulis

 👥 Group Systems:
 ├─ ${prefix}upsw
 ├─ ${prefix}spch
 ├─ ${prefix}autosahur
 ├─ ${prefix}threads
 ├─ ${prefix}Wastalk
 ├─ ${prefix}Antispam
 ├─ ${prefix}antidelete
 ├─ ${prefix}antinsfw
 ├─ ${prefix}playch
 ├─ ${prefix}ytstalk
 ├─ ${prefix}CekNik
 ├─ ${prefix}FakeStory
 ├─ ${prefix}daftar
 ├─ ${prefix}tagadmin
 ├─ ${prefix}botak
 ├─ ${prefix}listonline
 ├─ ${prefix}fitnah
 ├─ ${prefix}nglspam
 └─ ${prefix}paustad

 🎮 Combat & Entertainment:
 ├─ ${prefix}battle
 ├─ ${prefix}bomb
 ├─ ${prefix}poker3
 ├─ ${prefix}hilo
 ├─ ${prefix}roulette
 ├─ ${prefix}lotre
 ├─ ${prefix}duel
 ├─ ${prefix}selectclass
 ├─ ${prefix}upgradestats
 └─ ${prefix}mystats

 💍 Digital Waifu Relationship:
 ├─ ${prefix}gachawaifu
 ├─ ${prefix}buycincin
 ├─ ${prefix}marry
 ├─ ${prefix}mywaifu
 └─ ${prefix}cerai

 📥 Cloud Fetcher:
 ├─ ${prefix}an1
 ├─ ${prefix}anime
 ├─ ${prefix}Buildml
 ├─ ${prefix}Pindl
 ├─ ${prefix}tofigure
 ├─ ${prefix}tohitam
 ├─ ${prefix}tobotak
 ├─ ${prefix}tohijab
 └─ ${prefix}AIO (all in one)`}

global.groupmenu = (prefix) => {
return`───「 *G R O U P  M O D E S* 」───

 🛡️ Surveillance & Defense:
 ├─ ${prefix}sider
 ├─ ${prefix}antinsfw
 ├─ ${prefix}antilink
 ├─ ${prefix}antiwame
 ├─ ${prefix}antilinkgc
 ├─ ${prefix}antilinkch
 ├─ ${prefix}antilinkall
 ├─ ${prefix}antilinktiktok
 ├─ ${prefix}antilinkfb
 ├─ ${prefix}antilinktwitter
 ├─ ${prefix}antilinkig
 ├─ ${prefix}antilinktg
 ├─ ${prefix}antilinkytvid
 ├─ ${prefix}antilinkytch
 ├─ ${prefix}antivirus
 ├─ ${prefix}antitoxic
 ├─ ${prefix}antibot
 ├─ ${prefix}antispam
 └─ ${prefix}antidelete

 🤖 Automated Intelligence:
 ├─ ${prefix}autoaigc
 ├─ ${prefix}autosimi
 ├─ ${prefix}rchat
 ├─ ${prefix}rchatv2
 └─ ${prefix}autostickergc

 📢 Broadcasting & Tags:
 ├─ ${prefix}warcall
 ├─ ${prefix}hidetag
 ├─ ${prefix}totag
 ├─ ${prefix}tagall
 └─ ${prefix}tagadmin

 ⚙️ Administration Panel:
 ├─ ${prefix}adminonly
 ├─ ${prefix}setwelcome
 ├─ ${prefix}setleft
 ├─ ${prefix}welcome on/off
 ├─ ${prefix}linkgc
 ├─ ${prefix}invite
 ├─ ${prefix}ephemeral
 ├─ ${prefix}delete
 ├─ ${prefix}setppgroup
 ├─ ${prefix}delppgroup
 ├─ ${prefix}setname
 ├─ ${prefix}setdesc
 ├─ ${prefix}add
 ├─ ${prefix}kick
 ├─ ${prefix}promote
 ├─ ${prefix}demote
 ├─ ${prefix}editinfo
 ├─ ${prefix}opentime
 ├─ ${prefix}closetime
 ├─ ${prefix}resetlink
 ├─ ${prefix}getbio
 └─ ${prefix}listonline

 📊 Polling & Metrics:
 ├─ ${prefix}vote
 ├─ ${prefix}upvote
 ├─ ${prefix}downvote
 ├─ ${prefix}checkvote
 └─ ${prefix}delvote

 ❤️ Extras:
 └─ ${prefix}react`}

global.funmenu = (prefix) => {
return`───「 *F U N  Z O N E* 」───

 💍 Waifu Ecosystem:
 ├─ ${prefix}gachawaifu
 ├─ ${prefix}marry
 ├─ ${prefix}mywaifu
 ├─ ${prefix}buycincin
 └─ ${prefix}cerai

 🧠 Smart & Interactive:
 ├─ ${prefix}define
 ├─ ${prefix}qc
 ├─ ${prefix}lyrics
 ├─ ${prefix}suit
 ├─ ${prefix}math
 ├─ ${prefix}tictactoe
 └─ ${prefix}fact

 ⚖️ Social Games:
 ├─ ${prefix}truth
 ├─ ${prefix}dare
 ├─ ${prefix}couple
 ├─ ${prefix}soulmate
 └─ ${prefix}pick

 🤡 Rating & Fun Tests:
 ├─ ${prefix}stupidcheck
 ├─ ${prefix}handsomecheck
 ├─ ${prefix}uncleancheck
 ├─ ${prefix}hotcheck
 ├─ ${prefix}smartcheck
 ├─ ${prefix}greatcheck
 ├─ ${prefix}evilcheck
 ├─ ${prefix}dogcheck
 ├─ ${prefix}coolcheck
 ├─ ${prefix}waifucheck
 ├─ ${prefix}awesomecheck
 ├─ ${prefix}gaycheck
 ├─ ${prefix}cutecheck
 ├─ ${prefix}lesbiancheck
 ├─ ${prefix}hornycheck
 ├─ ${prefix}prettycheck
 ├─ ${prefix}lovelycheck
 ├─ ${prefix}uglycheck
 └─ ${prefix}checkme

 ❓ Quantum Engine (AI Answers):
 ├─ ${prefix}can
 ├─ ${prefix}is
 ├─ ${prefix}when
 ├─ ${prefix}where
 ├─ ${prefix}what
 ├─ ${prefix}how
 └─ ${prefix}rate

 🎭 Expression Library (Media):
 ├─ ${prefix}smeme
 ├─ ${prefix}ppcouple
 ├─ ${prefix}quotes
 ├─ ${prefix}cry
 ├─ ${prefix}kill
 ├─ ${prefix}hug
 ├─ ${prefix}pat
 ├─ ${prefix}lick
 ├─ ${prefix}kiss
 ├─ ${prefix}bite
 ├─ ${prefix}yeet
 ├─ ${prefix}bully
 ├─ ${prefix}bonk
 ├─ ${prefix}wink
 ├─ ${prefix}poke
 ├─ ${prefix}nom
 ├─ ${prefix}slap
 ├─ ${prefix}smile
 ├─ ${prefix}wave
 ├─ ${prefix}awoo
 ├─ ${prefix}blush
 ├─ ${prefix}smug
 ├─ ${prefix}glomp
 ├─ ${prefix}happy
 ├─ ${prefix}dance
 ├─ ${prefix}cringe
 ├─ ${prefix}cuddle
 ├─ ${prefix}highfive
 ├─ ${prefix}shinobu
 ├─ ${prefix}handhold
 ├─ ${prefix}spank
 ├─ ${prefix}tickle
 ├─ ${prefix}avatar
 ├─ ${prefix}feed
 ├─ ${prefix}foxgirl
 ├─ ${prefix}gecg
 └─ ${prefix}quotes`}

global.stalkermenu = (prefix) => {
return `───「 *S T A L K E R* 」───

 🕵️ OSINT Targets:
 ├─ ${prefix}igstalk
 ├─ ${prefix}ttstalk
 ├─ ${prefix}ffstalk
 ├─ ${prefix}mlstalk
 ├─ ${prefix}npmstalk
 ├─ ${prefix}ghstalk
 └─ ${prefix}ytstalk`}

global.stickermenu = (prefix) => {
return`───「 *S T I C K E R S* 」───

 📁 Graphic Collections:
 ├─ ${prefix}goose
 ├─ ${prefix}woof
 ├─ ${prefix}8ball
 ├─ ${prefix}lizard
 ├─ ${prefix}meow
 ├─ ${prefix}gura
 ├─ ${prefix}doge
 ├─ ${prefix}patrick
 └─ ${prefix}lovestick`}

global.databasemenu = (prefix) => {
return`───「 *D A T A B A S E* 」───

 📂 Memory Commands:
 ├─ ${prefix}setcmd
 ├─ ${prefix}delcmd
 ├─ ${prefix}listcmd
 ├─ ${prefix}lockcmd
 ├─ ${prefix}addmsg
 ├─ ${prefix}delmsg
 ├─ ${prefix}getmsg
 └─ ${prefix}listmsg`}

global.aimenu = (prefix) => {
return`───「 *A I  A S S I S T A N T* 」───

 🧠 Large Language Models:
 ├─ ${prefix}openai
 ├─ ${prefix}leptonai
 ├─ ${prefix}ai4chat
 ├─ ${prefix}aimath
 ├─ ${prefix}aoyoai
 ├─ ${prefix}powerbrain
 ├─ ${prefix}alyamind
 ├─ ${prefix}ai
 ├─ ${prefix}bard
 ├─ ${prefix}blackboxai
 ├─ ${prefix}indo-ai
 ├─ ${prefix}lamaai
 ├─ ${prefix}gemini
 ├─ ${prefix}bingai
 ├─ ${prefix}gpt4
 ├─ ${prefix}gpt4_2
 ├─ ${prefix}anything
 ├─ ${prefix}youai
 ├─ ${prefix}claude-ai
 ├─ ${prefix}guru-ai
 ├─ ${prefix}emi-ai
 └─ ${prefix}herc-ai

 🎨 Neural Image Generators:
 ├─ ${prefix}text2anime
 ├─ ${prefix}aiimg
 ├─ ${prefix}prodia
 ├─ ${prefix}diffusion-anime
 ├─ ${prefix}hercai-cartoon
 ├─ ${prefix}hercai-animefy
 ├─ ${prefix}hercai-lexica
 ├─ ${prefix}hercai-prodia
 ├─ ${prefix}hercai-simurg
 ├─ ${prefix}hercai-raava
 ├─ ${prefix}hercai-shonin
 ├─ ${prefix}diffusion
 ├─ ${prefix}text2img
 ├─ ${prefix}absolutely
 ├─ ${prefix}dalle
 ├─ ${prefix}bingimg
 └─ ${prefix}gptimg

 📸 Computer Vision & Filters:
 ├─ ${prefix}faceswap
 ├─ ${prefix}realistic
 ├─ ${prefix}3dmodel
 ├─ ${prefix}jadizombie
 ├─ ${prefix}photoleapai
 ├─ ${prefix}remini
 ├─ ${prefix}jadianime
 ├─ ${prefix}removebg
 ├─ ${prefix}tobotak
 ├─ ${prefix}tofigure
 ├─ ${prefix}tofigure2
 ├─ ${prefix}tofigure3
 ├─ ${prefix}tofigure4
 ├─ ${prefix}tohitam
 ├─ ${prefix}tohijab
 ├─ ${prefix}tochibi
 ├─ ${prefix}editimg
 └─ ${prefix}costume-ai

 🎙️ Audio & Text Processing:
 ├─ ${prefix}simi
 ├─ ${prefix}ocr
 ├─ ${prefix}aivo
 ├─ ${prefix}hdvid
 ├─ ${prefix}cai
 ├─ ${prefix}nulis
 └─ ${prefix}travel-assistant`}

global.quotesmenu = (prefix) => {
return`───「 *Q U O T E S  H U B* 」───

 📜 Databases:
 ├─ ${prefix}quotesanime
 ├─ ${prefix}quotesbacot
 ├─ ${prefix}quotesbucin
 ├─ ${prefix}quotesmotivasi
 ├─ ${prefix}quotesgalau
 ├─ ${prefix}quotesgombal
 ├─ ${prefix}quoteshacker
 └─ ${prefix}quotesbijak`}

global.jashermenu = (prefix) => {
return`───「 *J A S H E R  P A N E L* 」───

 🛠️ Management:
 ├─ ${prefix}addid
 ├─ ${prefix}delid
 ├─ ${prefix}listid
 ├─ ${prefix}addown (Own JS)
 ├─ ${prefix}addpete (PT JS)
 └─ ${prefix}jpmch`}

global.storemenu = (prefix) => {
return`───(" *C O M M E R C E  S T O R E* 」───

 🏪 Inventory Management:
 ├─ ${prefix}list
 ├─ ${prefix}addlist
 ├─ ${prefix}dellist
 ├─ ${prefix}update
 ├─ ${prefix}jeda
 ├─ ${prefix}tambah
 ├─ ${prefix}kurang
 ├─ ${prefix}kali
 └─ ${prefix}bagi

 ⚙️ Automated Workflow:
 ├─ ${prefix}delsetdone
 ├─ ${prefix}changedone
 ├─ ${prefix}setdone
 ├─ ${prefix}delproses
 ├─ ${prefix}changeproses
 ├─ ${prefix}setproses
 ├─ ${prefix}proses
 └─ ${prefix}done`}

global.nsfwmenu = (prefix) => {
return`───「 *A N I M E  S E A R C H* 」───

 🔍 Deep Search Engines:
 └─  ${prefix}mangasearch`}

global.anonymousmenu = (prefix) => {
return`───「 *A N O N Y M O U S  C H A T* 」───

 🕵️ Encryption Nodes:
 ├─ ${prefix}anonymouschat
 ├─ ${prefix}start
 ├─ ${prefix}next
 ├─ ${prefix}stop
 └─ ${prefix}sendprofile

 📩 Messaging Terminal:
 ├─ ${prefix}menfess
 ├─ ${prefix}confess
 ├─ ${prefix}balasmenfess
 ├─ ${prefix}tolakmenfess
 └─ ${prefix}stopmenfess`}

global.pushmenu = (prefix) => {
return`───「 *P U S H  M O D U L E S* 」───

 🚀 Core Broadcast:
 ├─ ${prefix}cekidgc
 ├─ ${prefix}pushkontak
 ├─ ${prefix}pushkontakv2
 ├─ ${prefix}pushkontakv3
 ├─ ${prefix}pushkontakv4
 ├─ ${prefix}savekontakv
 ├─ ${prefix}savekontakv2
 ├─ ${prefix}getkontak
 ├─ ${prefix}sendkontak
 ├─ ${prefix}jpm
 └─ ${prefix}jpm2`}

global.cpanelmenu = (prefix) => {
return`───「 *C P A N E L  C O N T R O L* 」───

 🌐 Server Engine:
 ├─ ${prefix}panel
 ├─ ${prefix}listusr
 ├─ ${prefix}delusr
 ├─ ${prefix}listsrv
 ├─ ${prefix}delsrv
 ├─ ${prefix}tutorial
 ├─ ${prefix}ramlist
 └─ ${prefix}premlist

 🏗️ Virtualization:
 ├─ ${prefix}addusr
 ├─ ${prefix}addsrv
 ├─ ${prefix}updatesrv
 ├─ ${prefix}suspend
 ├─ ${prefix}unsuspend
 ├─ ${prefix}createadmin
 └─ ${prefix}listadmin`}

global.bugmenu = (prefix) => {
return`───「 *B U G  W A R F A R E* 」───

 💣 Payloads:
 ├─ ${prefix}force
 ├─ ${prefix}crash
 ├─ ${prefix}dozer
 └─ ${prefix}freez`}

global.randomphotomenu = (prefix) => {
return`───「 *G A L L E R Y  N O D E S* 」───

 🎨 Aesthetic & Wallpapers:
 ├─ ${prefix}aesthetic
 ├─ ${prefix}coffee
 ├─ ${prefix}wikimedia
 ├─ ${prefix}wallpaper
 ├─ ${prefix}art
 ├─ ${prefix}gamewallpaper
 ├─ ${prefix}islamic
 ├─ ${prefix}cartoon
 ├─ ${prefix}pentol
 ├─ ${prefix}shortquote
 ├─ ${prefix}boneka
 ├─ ${prefix}rose
 ├─ ${prefix}wallml
 ├─ ${prefix}wallphone
 ├─ ${prefix}mountain
 ├─ ${prefix}profilepic
 └─ ${prefix}couplepic

 🎙️ Pop Culture & Idols:
 ├─ ${prefix}bts
 ├─ ${prefix}jennie
 ├─ ${prefix}jiso
 ├─ ${prefix}justina
 ├─ ${prefix}kpop
 ├─ ${prefix}exo
 ├─ ${prefix}lisa
 ├─ ${prefix}ryujin
 └─ ${prefix}blackpink

 🐾 Fauna Assets:
 ├─ ${prefix}dogwoof
 ├─ ${prefix}catmeow
 ├─ ${prefix}lizardpic
 ├─ ${prefix}goosebird
 ├─ ${prefix}cat
 └─ ${prefix}goose

 💻 Cyber & Tech:
 ├─ ${prefix}hacker
 ├─ ${prefix}cyber
 ├─ ${prefix}technology
 ├─ ${prefix}hacking
 └─ ${prefix}programming

 🏎️ Vehicles:
 ├─ ${prefix}car
 └─ ${prefix}bike

 👤 Demographics:
 ├─ ${prefix}ulzzangboy
 ├─ ${prefix}ulzzanggirl
 ├─ ${prefix}randomboy
 ├─ ${prefix}randomgirl
 ├─ ${prefix}tiktokhijab
 ├─ ${prefix}chinese
 ├─ ${prefix}indo
 ├─ ${prefix}japanese
 ├─ ${prefix}korean
 ├─ ${prefix}malay
 ├─ ${prefix}thai
 └─ ${prefix}vietnamese

 🎭 Misc:
 ├─ ${prefix}8ballpool
 ├─ ${prefix}cosplay
 └─ ${prefix}satanic`}

global.randomvideomenu = (prefix) => {
return`───(" *V I D E O  N O D E S* 」───

 🎥 Stream Feeds:
 ├─ ${prefix}tiktokgirl
 ├─ ${prefix}tiktoknukthy
 ├─ ${prefix}tiktokkayes
 ├─ ${prefix}tiktokpanrika
 ├─ ${prefix}tiktoknotnot
 ├─ ${prefix}tiktokghea
 ├─ ${prefix}tiktoksantuy
 └─ ${prefix}tiktokbocil`}

global.primbonmenu = (prefix) => {
return `───「 *P R I M B O N* 」───

 🔮 Mystical Predictions:
 ├─ ${prefix}artimimpi
 ├─ ${prefix}artinama
 ├─ ${prefix}ramaljodoh
 ├─ ${prefix}ramaljodohbali
 ├─ ${prefix}suamiistri
 ├─ ${prefix}ramalcinta
 ├─ ${prefix}cocoknama
 ├─ ${prefix}pasangan
 ├─ ${prefix}jadiannikah
 ├─ ${prefix}sifatusaha
 ├─ ${prefix}rezeki
 ├─ ${prefix}pekerjaan
 ├─ ${prefix}nasib
 ├─ ${prefix}penyakit
 ├─ ${prefix}tarot
 ├─ ${prefix}fengshui
 ├─ ${prefix}haribaik
 ├─ ${prefix}harisangar
 ├─ ${prefix}harisial
 ├─ ${prefix}nagahari
 ├─ ${prefix}arahrezeki
 ├─ ${prefix}peruntungan
 ├─ ${prefix}weton
 ├─ ${prefix}karakter
 ├─ ${prefix}keberuntungan
 ├─ ${prefix}memancing
 ├─ ${prefix}masasubur
 ├─ ${prefix}zodiak
 └─ ${prefix}shio`}

global.beritamenu = (prefix) => {
return `───「 *N E W S  F E E D S* 」───

 📰 Media Terminal:
 ├─ ${prefix}beritabola
 ├─ ${prefix}fajar
 ├─ ${prefix}cnn
 ├─ ${prefix}layarkaca
 ├─ ${prefix}cnbc
 ├─ ${prefix}tribun
 ├─ ${prefix}indozone
 ├─ ${prefix}kompas
 ├─ ${prefix}detiknews
 ├─ ${prefix}dailynews
 ├─ ${prefix}inews
 ├─ ${prefix}okezone
 ├─ ${prefix}sindo
 ├─ ${prefix}tempo
 ├─ ${prefix}antara
 ├─ ${prefix}kontan
 ├─ ${prefix}merdeka
 └─ ${prefix}jalantikus`}

global.islamimenu= (prefix) => {
return`───「 *I S L A M I C  N O D E S* 」───

 🕌 Holy Utilities:
 ├─ ${prefix}kisahnabi
 ├─ ${prefix}asmaulhusna
 ├─ ${prefix}bacaansholat
 ├─ ${prefix}audiosurah
 ├─ ${prefix}ayatkursi
 ├─ ${prefix}doaharian
 ├─ ${prefix}niatsholat
 ├─ ${prefix}quotesislami
 ├─ ${prefix}doatahlil
 ├─ ${prefix}alquran
 └─ ${prefix}jadwalsholat`}

global.ephoto360menu = (prefix) => {
return`───「 *E P H O T O  3 6 0* 」───

 🎨 Engine Filters:
 ├─ ${prefix}glitchtext
 ├─ ${prefix}writetext
 ├─ ${prefix}advancedglow
 ├─ ${prefix}typographytext
 ├─ ${prefix}pixelglitch
 ├─ ${prefix}neonglitch
 ├─ ${prefix}flagtext
 ├─ ${prefix}flag3dtext
 ├─ ${prefix}deletingtext
 ├─ ${prefix}blackpinkstyle
 ├─ ${prefix}glowingtext
 ├─ ${prefix}underwatertext
 ├─ ${prefix}logomaker
 ├─ ${prefix}cartoonstyle
 ├─ ${prefix}papercutstyle
 ├─ ${prefix}watercolortext
 ├─ ${prefix}effectclouds
 ├─ ${prefix}blackpinklogo
 ├─ ${prefix}gradienttext
 ├─ ${prefix}summerbeach
 ├─ ${prefix}luxurygold
 ├─ ${prefix}multicoloredneon
 ├─ ${prefix}sandsummer
 ├─ ${prefix}galaxywallpaper
 ├─ ${prefix}1917style
 ├─ ${prefix}makingneon
 ├─ ${prefix}royaltext
 ├─ ${prefix}freecreate
 ├─ ${prefix}galaxystyle
 └─ ${prefix}lighteffects`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
