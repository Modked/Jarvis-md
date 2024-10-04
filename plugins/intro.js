const { System, isPrivate, getBuffer } = require("../lib/");
const image = 'https://i.imgur.com/5f9MwA9.jpeg';
const thumb = "https://i.imgur.com/5f9MwA9.jpeg";

System({
    pattern: 'intro ?(.*)',
    fromMe: true,
    desc: 'Shows My Intro',
    type: 'misc',
}, async (message, match) => {
    const number = message.user.jid;
    const logo = await getBuffer(image);
    const thumbnail = await getBuffer(thumb);
    const sourceUrl = 'https://wa.me/917025673121?text=_៚ʜᴇʟʟᴏ+ʟᴏᴋɪ+sᴇʀ+ʙɪɢ+ғᴀɴ+ᴠʀᴏ+🤍_';

    const linkPreview = {
        title: "➵⃞🎵ʟ͛σᴋɪ͛♬➣",
        body: "ᴊᴀʀᴠɪꜱ-ᴍᴅ 💌",
        thumbnail: logo,
        mediaType: 1,
        mediaUrl: sourceUrl,
        sourceUrl: sourceUrl,
        showAdAttribution: true,
        renderLargerThumbnail: true
    };

    message.quoted = {
        key: {
            fromMe: false,
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast"
        },
        message: {
            contactMessage: {
                displayName: `${message.pushName}`, // Ensure this variable is defined and contains the expected value
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${message.client.user.name},;;;\nFN:${message.client.user.name},\nitem1.TEL;waid=${number.split('@')[0]}:${number.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                jpegThumbnail: thumbnail
            }
        }
    };

    const text = `0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 𝗠𝗬 𝗜𝗡𝗧𝗥𝗢 」*
│ *Name      :* ʟᴏᴋɪ-xᴇʀ
│ *Place       :* ᴋᴇʀᴀʟᴀ
│ *Gender    :*  ᴍᴀʟᴇ
│ *Age          :* 17
│ *Phone      :* wa.me/917025673121
│ *IG ID        :* _aro_x_
│ *Protfolio  :* https://lokiser.xyz
│ *Github      :* Loki-Xer 
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙`;

    await message.client.sendMessage(message.chat, { text: text, contextInfo: { externalAdReply: linkPreview } }, { quoted: message.quoted || '' });
});