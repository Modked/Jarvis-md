const { System, isPrivate, getJson } = require("../lib/");

System({
  pattern: "loli ?(.*)",
  fromMe: isPrivate,
  desc: "Random anime pics",
  type: "anime"
}, async (message, match) => {
  let { result: images } = await getJson("https://gist.github.com/Loki-Xer/70da0218af69fc178c3f2011e32670b2/raw");
  const randomImageUrl = images[Math.floor(Math.random() * images.length)];

  const response = {
    image: { url: randomImageUrl },
    caption: "*Random anime pics*",
    footer: "Jarvis-md"
  };

  await message.client.sendMessage(message.jid, response);
});