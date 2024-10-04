const { System, isPrivate, getJson, LokiXer } = require("../lib");

System({
    pattern: "sexy",
    fromMe: isPrivate,
    desc: "random girls asupan videos",
    type: "fun"
}, async (message) => {
    const api = await LokiXer("tiktok");
    const { result } = await getJson(api);
    await message.client.sendMessage(message.chat, { video: { url: result.video }, caption: "*楽しむ時間ですよ🤤💦*" });
});