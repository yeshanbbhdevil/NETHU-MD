const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "put sesson id",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/9420d31d752ae858163cd.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "Hello NETHU-MD Is Online Now",
SUDO_NB: process.env.SUDO_NB || "+94704227534",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "private",
};
