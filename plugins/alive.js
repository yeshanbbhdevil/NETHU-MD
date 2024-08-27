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

let des = `*👋 HELLO I'm QUEEN-NETHU-MD I'm Alive Now*

*🧑‍💻 Owner* - NETHMIKA KAUSHALYA(SL NETHUMAX)

*📋 Owner Number* -94718913389

*📃 Tipe .menu To Get menu list*

*📍ℙ𝕃𝔼𝔸𝕊𝔼 𝕊𝕌𝔹𝕊ℂℝ𝕀𝔹𝔼 𝕄𝕐 𝕐𝕆𝕌𝕋𝕌𝔹𝔼 ℂℍ𝔸ℕℕ𝔼𝕃❤️‍🔥👇*

🧚‍♀️◦ https://www.youtube.com/@Sahas_Tech

*📍ℙ𝕃𝔼𝔸𝕊𝔼 𝔽𝕆𝕃𝕃𝕆𝕎 𝕄𝕐 𝕎ℍ𝔸𝕋𝕊𝔸ℙℙ ℂℍ𝔸ℕℕ𝔼𝕃 ❤️‍🔥👇*

🧚‍♀️◦ https://whatsapp.com/channel/0029VaiTjMlK5cDLek3bB533

*ᴛʜᴀɴᴋꜱ ꜰᴏʀ = ꜱʜᴀᴅᴏᴡ-ᴍᴅ💗🍃*

*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*`
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
