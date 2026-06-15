// lib/antibot.js
module.exports = async function antibotBefore(m, { rizkyyy }) {
    try {
        let chat = global.db.data.chats[m.chat];
        if (!chat) return;

        // Jika AntiBot tidak aktif
        if (!chat.antiBot) return;

        // Deteksi bot lain (pesan Baileys dan bukan dari bot sendiri)
        if (m.isBaileys && m.sender !== rizkyyy.user.id) {

            await rizkyyy.sendMessage(m.chat, {
                text: "🚫 Bot lain terdeteksi dan dihapus!"
            }, { quoted: m });

            // Kick bot lain
            await rizkyyy.groupParticipantsUpdate(m.chat, [m.sender], "remove");
            return;
        }
    } catch (e) {
        console.log("AntiBot Error:", e);
    }
};
