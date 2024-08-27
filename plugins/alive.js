const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let des = `*👋 HELLO I'm QUEEN-NETHU-MD I'm Alive Now 🍂✨*

*🧑‍💻 Owner* - NETHMIKA KAUSHALYA

*📋 Owner Number* - 94704227534

*📃 Tipe .menu To Get menu list*

*➤ SUBSCRIBE MY YOUTUBE CHANNEL*

🔗◦ https://www.youtube.com/@SlNethuMax

*➤ FOLLOW MY WHATSAPP CHANNEL*

📎◦ https://whatsapp.com/channel/0029VagCogPGufJ3kZWjsW3A

*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴᴇᴛʜᴜ ᴍᴀx*`
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
