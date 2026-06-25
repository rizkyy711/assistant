const fs = require('fs');
const axios = require('axios');
const { getRandom, smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, delay, sleep } = require('./myfunc');
const { isSetWelcome, getTextSetWelcome } = require('./setwelcome');
const { isSetLeft, getTextSetLeft } = require('./setleft');
const moment = require('moment-timezone');
const { proto, jidDecode, jidNormalizedUser, generateForwardMessageContent, generateWAMessageFromContent, downloadContentFromMessage } = require('@whiskeysockets/baileys');

let set_welcome_db = JSON.parse(fs.readFileSync('./database/set_welcome.json'));
let set_left_db = JSON.parse(fs.readFileSync('./database/set_left.json'));
let setting = JSON.parse(fs.readFileSync('./config.json'));

module.exports.welcome = async (iswel, isleft, hydro, anu) => {
  try {
    const metadata = await hydro.groupMetadata(anu.id);
    const participants = anu.participants;
    const groupName = metadata.subject;
    const memberCount = metadata.participants.length;
    const groupDesc = metadata.desc || "-";

    for (let num of participants) {

      // ===== GET PROFILE PICTURE =====
      let pp_user;
      try {
        pp_user = await hydro.profilePictureUrl(jidNormalizedUser(num), 'image');
      } catch {
        pp_user = 'https://i.ibb.co/1s8T3sY/48f7ce63c7aa.jpg';
      }

      // ===== STABIL PUSHNAME =====
      let pushName;
      try {
        pushName = await hydro.getName(num); // cara paling stabil
      } catch {
        pushName = num.split('@')[0]; // fallback ke jid
      }

      // ======================================================
      // WELCOME
      // ======================================================
      if (anu.action === 'add' && (iswel || setting.auto_welcomeMsg)) {

        if (isSetWelcome(anu.id, set_welcome_db)) {
          const get_teks = await getTextSetWelcome(anu.id, set_welcome_db);
          const replaced = get_teks
            .replace(/@user/gi, `.@${num.split('@')[0]}`)
            .replace(/@group/gi, groupName)
            .replace(/@desc/gi, groupDesc);

          await hydro.sendMessage(anu.id, {
            text: replaced,
            mentions: [num],
          });

        } else {
          const welcomeUrl = `https://api.siputzx.my.id/api/canvas/welcomev5?` +
            `username=${encodeURIComponent(pushName)}` +
            `&guildName=${encodeURIComponent(groupName)}` +
            `&memberCount=${memberCount}` +
            `&avatar=${encodeURIComponent(pp_user)}` +
            `&background=${encodeURIComponent(global.welcomeBg)}` +
            `&quality=90`;

          await hydro.sendMessage(anu.id, {
            text: `ʜᴀɪ ᴋᴀᴋ .@${num.split("@")[0]} sᴇʟᴀᴍᴀᴛ ʙᴇʀɢᴀʙᴜɴɢ ᴅɪ ${groupName}! 😝\n- ᴊɪᴋᴀ ɪɴɢɪɴ ɪɴᴛʀᴏ ᴋᴇᴛɪᴋ .ɪɴᴛʀᴏ\n- ᴘᴀᴛᴜʜɪ ᴀᴛᴜʀᴀɴ ɢʀᴜᴘ ᴊɪᴋᴀ ᴀᴅᴀ\n- ʙᴇʀsɪᴋᴀᴘ ʙᴀɪᴋ ᴅᴇɴɢᴀɴ sɪᴀᴘᴀᴘᴜɴ\n- ᴋᴀᴍᴜ sᴜᴅᴀʜ ʙᴇsᴀʀ ʙᴜᴋᴀɴ ᴀɴᴀᴋ ᴋᴇᴄɪʟ\nᴛᴇʀɪᴍᴀᴋᴀsɪʜ ᴅᴀʀɪ ᴘᴇᴍɪʟɪᴋ ʙᴏᴛ 🙏`,
            mentions: [num],
            contextInfo: {
              externalAdReply: {
                title: `Welcome ${pushName}!`,
                body: `${groupName} — Member ke-${memberCount}`,
                thumbnailUrl: welcomeUrl,
                mediaType: 1,
                renderLargerThumbnail: true,
                sourceUrl: "https://instagram.com/air_minerall7"
              }
            }
          });
        }
      }

      // ======================================================
      // GOODBYE
      // ======================================================
      else if (anu.action === 'remove' && (isleft || setting.auto_leaveMsg)) {

        if (isSetLeft(anu.id, set_left_db)) {
          const get_teks = await getTextSetLeft(anu.id, set_left_db);
          const replaced = get_teks
            .replace(/@user/gi, `.@${num.split('@')[0]}`)
            .replace(/@group/gi, groupName)
            .replace(/@desc/gi, groupDesc);

          await hydro.sendMessage(anu.id, {
            text: replaced,
            mentions: [num],
          });

        } else {
          const goodbyeUrl = `https://api.siputzx.my.id/api/canvas/goodbyev2?` +
            `username=${encodeURIComponent(pushName)}` +
            `&guildName=${encodeURIComponent(groupName)}` +
            `&memberCount=${memberCount}` +
            `&avatar=${encodeURIComponent(pp_user)}` +
            `&background=${encodeURIComponent(global.goodbyeBg)}`;

          await hydro.sendMessage(anu.id, {
            text: `ʙᴀɪʙᴀɪ ᴋᴀᴋ .@${num.split("@")[0]} sᴇᴍᴏɢᴀ ᴛᴇɴᴀɴɢ ᴅɪ ᴀʟᴀᴍ sᴀɴᴀ`,
            mentions: [num],
            contextInfo: {
              externalAdReply: {
                title: `${pushName} Left`,
                body: `${groupName} — Goodbye`,
                mediaType: 1,
                thumbnailUrl: goodbyeUrl,
                renderLargerThumbnail: true,
                sourceUrl: "https://instagram.com/air_minerall7"
              }
            }
          });
        }
      }

      // ======================================================
      // PROMOTE
      // ======================================================
      else if (anu.action === 'promote') {
        await hydro.sendMessage(anu.id, {
          text: `ʜᴇʏ ᴋᴀᴍᴜ! .@${num.split('@')[0]}\nᴘᴀɴɢᴋᴀᴛ ᴋᴀᴍᴜ ᴅɪ ɢʀᴜᴘ ${groupName} ɴᴀɪᴋ ᴍᴇɴᴊᴀᴅɪ ᴀᴅᴍɪɴ 🤪`,
          mentions: [num],
        });
      }

      // ======================================================
      // DEMOTE
      // ======================================================
      else if (anu.action === 'demote') {
        await hydro.sendMessage(anu.id, {
          text: `ʜᴇʏ ᴋᴀᴍᴜ! .@${num.split('@')[0]}\nᴘᴀɴɢᴋᴀᴛ ᴋᴀᴍᴜ ᴅɪ ɢʀᴜᴘ ${groupName} ᴛᴜʀᴜɴ ᴍᴇɴᴊᴀᴅɪ ᴀɴɢɢᴏᴛᴀ 👀`,
          mentions: [num],
        });
      }

    }

  } catch (err) {
    console.error(err);
  }
};
const fs = require('fs');
const axios = require('axios');
const { getRandom, smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, delay, sleep } = require('./myfunc');
const { isSetWelcome, getTextSetWelcome } = require('./setwelcome');
const { isSetLeft, getTextSetLeft } = require('./setleft');
const moment = require('moment-timezone');
const { proto, jidDecode, jidNormalizedUser, generateForwardMessageContent, generateWAMessageFromContent, downloadContentFromMessage } = require('@whiskeysockets/baileys');

let set_welcome_db = JSON.parse(fs.readFileSync('./database/set_welcome.json'));
let set_left_db = JSON.parse(fs.readFileSync('./database/set_left.json'));
let setting = JSON.parse(fs.readFileSync('./config.json'));

module.exports.welcome = async (iswel, isleft, hydro, anu) => {
  try {
    const metadata = await hydro.groupMetadata(anu.id);
    const participants = anu.participants;
    const groupName = metadata.subject;
    const memberCount = metadata.participants.length;
    const groupDesc = metadata.desc || "-";

    for (let num of participants) {

      // ===== GET PROFILE PICTURE =====
      let pp_user;
      try {
        pp_user = await hydro.profilePictureUrl(jidNormalizedUser(num), 'image');
      } catch {
        pp_user = 'https://i.ibb.co/1s8T3sY/48f7ce63c7aa.jpg';
      }

      // ===== STABIL PUSHNAME =====
      let pushName;
      try {
        pushName = await hydro.getName(num); // cara paling stabil
      } catch {
        pushName = num.split('@')[0]; // fallback ke jid
      }

      // ======================================================
      // WELCOME
      // ======================================================
      if (anu.action === 'add' && (iswel || setting.auto_welcomeMsg)) {

        if (isSetWelcome(anu.id, set_welcome_db)) {
          const get_teks = await getTextSetWelcome(anu.id, set_welcome_db);
          const replaced = get_teks
            .replace(/@user/gi, `.@${num.split('@')[0]}`)
            .replace(/@group/gi, groupName)
            .replace(/@desc/gi, groupDesc);

          await hydro.sendMessage(anu.id, {
            text: replaced,
            mentions: [num],
          });

        } else {
          const welcomeUrl = `https://api.siputzx.my.id/api/canvas/welcomev5?` +
            `username=${encodeURIComponent(pushName)}` +
            `&guildName=${encodeURIComponent(groupName)}` +
            `&memberCount=${memberCount}` +
            `&avatar=${encodeURIComponent(pp_user)}` +
            `&background=${encodeURIComponent(global.welcomeBg)}` +
            `&quality=90`;

          await hydro.sendMessage(anu.id, {
            text: `ʜᴀɪ ᴋᴀᴋ .@${num.split("@")[0]} sᴇʟᴀᴍᴀᴛ ʙᴇʀɢᴀʙᴜɴɢ ᴅɪ ${groupName}! 😝\n- ᴊɪᴋᴀ ɪɴɢɪɴ ɪɴᴛʀᴏ ᴋᴇᴛɪᴋ .ɪɴᴛʀᴏ\n- ᴘᴀᴛᴜʜɪ ᴀᴛᴜʀᴀɴ ɢʀᴜᴘ ᴊɪᴋᴀ ᴀᴅᴀ\n- ʙᴇʀsɪᴋᴀᴘ ʙᴀɪᴋ ᴅᴇɴɢᴀɴ sɪᴀᴘᴀᴘᴜɴ\n- ᴋᴀᴍᴜ sᴜᴅᴀʜ ʙᴇsᴀʀ ʙᴜᴋᴀɴ ᴀɴᴀᴋ ᴋᴇᴄɪʟ\nᴛᴇʀɪᴍᴀᴋᴀsɪʜ ᴅᴀʀɪ ᴘᴇᴍɪʟɪᴋ ʙᴏᴛ 🙏`,
            mentions: [num],
            contextInfo: {
              externalAdReply: {
                title: `Welcome ${pushName}!`,
                body: `${groupName} — Member ke-${memberCount}`,
                thumbnailUrl: welcomeUrl,
                mediaType: 1,
                renderLargerThumbnail: true,
                sourceUrl: "https://instagram.com/air_minerall7"
              }
            }
          });
        }
      }

      // ======================================================
      // GOODBYE
      // ======================================================
      else if (anu.action === 'remove' && (isleft || setting.auto_leaveMsg)) {

        if (isSetLeft(anu.id, set_left_db)) {
          const get_teks = await getTextSetLeft(anu.id, set_left_db);
          const replaced = get_teks
            .replace(/@user/gi, `.@${num.split('@')[0]}`)
            .replace(/@group/gi, groupName)
            .replace(/@desc/gi, groupDesc);

          await hydro.sendMessage(anu.id, {
            text: replaced,
            mentions: [num],
          });

        } else {
          const goodbyeUrl = `https://api.siputzx.my.id/api/canvas/goodbyev2?` +
            `username=${encodeURIComponent(pushName)}` +
            `&guildName=${encodeURIComponent(groupName)}` +
            `&memberCount=${memberCount}` +
            `&avatar=${encodeURIComponent(pp_user)}` +
            `&background=${encodeURIComponent(global.goodbyeBg)}`;

          await hydro.sendMessage(anu.id, {
            text: `ʙᴀɪʙᴀɪ ᴋᴀᴋ .@${num.split("@")[0]} sᴇᴍᴏɢᴀ ᴛᴇɴᴀɴɢ ᴅɪ ᴀʟᴀᴍ sᴀɴᴀ`,
            mentions: [num],
            contextInfo: {
              externalAdReply: {
                title: `${pushName} Left`,
                body: `${groupName} — Goodbye`,
                mediaType: 1,
                thumbnailUrl: goodbyeUrl,
                renderLargerThumbnail: true,
                sourceUrl: "https://instagram.com/air_minerall7"
              }
            }
          });
        }
      }

      // ======================================================
      // PROMOTE
      // ======================================================
      else if (anu.action === 'promote') {
        await hydro.sendMessage(anu.id, {
          text: `ʜᴇʏ ᴋᴀᴍᴜ! .@${num.split('@')[0]}\nᴘᴀɴɢᴋᴀᴛ ᴋᴀᴍᴜ ᴅɪ ɢʀᴜᴘ ${groupName} ɴᴀɪᴋ ᴍᴇɴᴊᴀᴅɪ ᴀᴅᴍɪɴ 🤪`,
          mentions: [num],
        });
      }

      // ======================================================
      // DEMOTE
      // ======================================================
      else if (anu.action === 'demote') {
        await hydro.sendMessage(anu.id, {
          text: `ʜᴇʏ ᴋᴀᴍᴜ! .@${num.split('@')[0]}\nᴘᴀɴɢᴋᴀᴛ ᴋᴀᴍᴜ ᴅɪ ɢʀᴜᴘ ${groupName} ᴛᴜʀᴜɴ ᴍᴇɴᴊᴀᴅɪ ᴀɴɢɢᴏᴛᴀ 👀`,
          mentions: [num],
        });
      }

    }

  } catch (err) {
    console.error(err);
  }
};
