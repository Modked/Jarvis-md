const { System, isPrivate, getJson, LokiXer } = require("../lib");

System({
    pattern: "status",
    fromMe: isPrivate,
    desc: "to random malayalam status",
    type: "fun"
},
async (message, match) => {
    const api = await LokiXer("status");
    const { result } = await getJson(api);
    await message.client.sendMessage(message.chat, { video: { url: result.video }, caption: "*made with 🤍*" });
});