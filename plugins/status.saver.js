const {System} = require("../lib/");
System({pattern: 'give ?(.*)', fromMe: true, desc: 'status saver', type: 'misc'}, async (message, match, m) => {
if(!message.quoted) return await m.reply("_reply to a status_",{quoted: message.data});
return await message.client.forwardMessage(message.from, message.reply_message.message, { quoted: message.data });});