let handler = async (m, { conn, participants, groupMetadata }) => {
const { antiArab, antiToxic, antiTraba, antiviewonce, isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, modoadmin, audios, delete: del } = global.db.data.chats[m.chat]
let text = `*γ πππππππππππ πππ πππππ γ*

*πΎπΏπ²πΈπΎπ½π΄π π°πππΎπΌπ°ππΈπ²π°π:*
ββ ππ΄π»π²πΎπΌπ΄: ${welcome ? 'β' : 'β'}
ββ π³π΄ππ΄π²π: ${detect ? 'β' : 'β'} 
ββ π°π½ππΈπ»πΈπ½πΊ: ${antiLink ? 'β' : 'β'} 
ββ π°π½ππΈπ»πΈπ½πΊ πΈ: ${antiLink2 ? 'β' : 'β'} 
ββ π°π½ππΈπππ°π±π°: ${antiTraba ? 'β' : 'β'} 
ββ πΌπΎπ³πΎπ°π³πΌπΈπ½: ${modoadmin ? 'β' : 'β'} 
ββ π°π½ππΈπ°ππ°π±π΄π: ${antiArab ? 'β' : 'β'} 
`.trim()
m.reply(text)}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(infogrupo|gro?upinfo|info(gro?up|gc))$/i
handler.group = true
export default handler
