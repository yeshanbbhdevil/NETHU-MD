const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*🧚‍♂️𝐐𝐔𝐄𝐄𝐍 𝐍𝐄𝐓𝐇𝐔 𝐌𝐃 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓🧚‍♂️*

> *𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢* 

*⚡ᴏᴡɴᴇʀ ɴᴀᴍᴇ* -: ɴᴇᴛʜᴍɪᴋᴀ ᴋᴀᴜꜱʜᴀʟʏᴀ (ꜱʟ ɴᴇᴛʜᴜ ᴍᴀx)
*⚡ɴᴜᴍʙᴇʀ* -: 94704227534
*⚡ʏᴏᴜᴛᴜʙᴇ* -: https://www.youtube.com/@SlNethuMax
*⚡ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ* -: https://whatsapp.com/channel/0029VagCogPGufJ3kZWjsW3A

*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴᴇᴛʜᴜ ᴍᴀx*
`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/2e95d1e64336fd59b4017.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
