const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*🧚‍♂️ 𝐐𝐔𝐄𝐄𝐍 𝐍𝐄𝐓𝐇𝐔 𝐌𝐃 𝐑𝐞𝐩𝐨𝐬𝐢𝐭𝐨𝐫𝐲 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧*

*🤖 ɴᴀᴍᴇ: Qᴜᴇᴇɴ-ɴᴇᴛʜᴜ-ᴍᴅ*
*🧑‍💻 ᴏᴡɴᴇʀ: ɴᴇᴛʜᴍɪᴋᴀ ᴋᴀᴜꜱʜᴀʟʏᴀ (ꜱʟ ɴᴇᴛʜᴜ ᴍᴀx)*
*🧬 ᴠᴇʀꜱɪᴏɴ: 1.0.0*


*📡 REPO LINK*

🔗◦https://github.com/Nethmikakaushalyaherath/QUEEN-NETHU-MD/tree/main

*📌 SUBSCRIBE MY YOUTUBE CHANNEL*

🔗◦ https://www.youtube.com/@SlNethuMax

*➤ FOLLOW MY WHATSAPP CHANNEL*

🔗◦ https://whatsapp.com/channel/0029VagCogPGufJ3kZWjsW3A


*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴᴇᴛʜᴜ ᴍᴀx*
`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/50206061aac79a468a33a.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
