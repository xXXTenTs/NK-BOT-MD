/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
let handler=async(e,{conn:a,text:t,command:n})=>{if(!t)return e.reply(`*[ ! ] Use bien el comando :*
${Prefijo+n} @tag|mensaje|respuesta`);if(!t.includes("|"))return e.reply(`*[ ! ] Agrege barras entre cada palabra todo junto*

_Ejemplo de uso_ : 
${Prefijo+n} @usuarioetiquetado|bendiceme|bendecido
~No olvide usar esta barra~ : " | "`);let r=e.mentionedJid&&e.mentionedJid[0]?e.mentionedJid[0]:e.fromMe?a.user.jid:e.sender,s;await a.sendMessage(e.chat,{text:t.split("|")[2]?t.split("|")[2]:"@"+e.sender.split("@")[0]+" use 2 barras\n@tag|mensaje|respuesta ✓"},{quoted:{key:{fromMe:!1,participant:r,...e.chat?{remoteJid:e.chat}:{}},message:{conversation:t.split("|")[1]?t.split("|")[1]:"No hay texto :v"}}}),reacMoji(e.chat,a,"\uD83E\uDD2B",e)};handler.help=["calumnia"],handler.tags=["games"],handler.command=/^(calumnia)$/i;export default handler;
