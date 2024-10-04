const { System, isPrivate, getJson, LokiXer } = require("../lib");

System({
    pattern: "ds",
    fromMe: isPrivate,
    desc: "To get Demon Slayer video",
    type: "anime"
},
async (message, match) => {
    const api = await LokiXer("demonslayer");
    const { result } = await getJson(api);
    const ds = result.DemonSlayer;
    await message.client.sendMessage(message.chat, { video: { url: ds }, caption: "*Demon Slayer 🔖*" });
});

// MADE WITH 🤍
