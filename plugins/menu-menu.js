let handler = async (m, { conn }) => {
let menu = `π πππ πππ ππ πππππππ π

π« πΌπ΄π½π π³π΄ π²πΎπΌπ°π½π³πΎπ π«
#del
#add
#kick
#kick2
#link
#promote
#demote
#hidetag
#destraba
#setppgc
#script
#sticker
#infobot
#infogroup
#banchat
#unbanchat 
#setwelcome
#setbye
#owner
#update
#grupo abirir 
#grupo cerrar
#enable antilink
#enable antinlik2
#enable modoadmin
#enable welcome
#enable detect
#enable autoread
#enable restrict
#enable anticall
#enable antitraba
#enable antiarabes
#diable antilink
#disable antilink2
#disable modoadmin
#disable welcome
#disable detect
#disable autoread
#disable restrict
#disable anticall
#disable antitraba
#disable antiarabes
`    
await conn.reply(m.chat, menu, m)    
}
handler.command = /^(menu|menΓΊ|memu|memΓΊ|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
export default handler
