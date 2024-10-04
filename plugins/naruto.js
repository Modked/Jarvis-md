const { System, isPrivate, getJson, LokiXer } = require("../lib");

System({
    pattern: "naruto",
    fromMe: isPrivate,
    desc: "To get Demon Slayer video",
    type: "anime"
},
async (message, match) => {
    const api = await LokiXer("naruto");
    const { result } = await getJson(api);
    await message.client.sendMessage(message.chat, { video: { url: result.video }, caption: "*うずまきナルト 💮*" });
});