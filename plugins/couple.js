const {System, isPrivate, getJson} = require("../lib/");
System({pattern: 'dp ?(.*)', fromMe: isPrivate, desc: 'get random couple photos', type: 'anime'}, async (message, match, m) => {
const { result } = await getJson ('https://api.lokiser.xyz/api/couplepp');
await m.client.sendMessage(m.jid, { image: { url: result.male }, caption: "Male 🤍" })
await m.client.sendMessage(m.jid, { image: { url: result.female }, caption: "Female 🤍" });
});