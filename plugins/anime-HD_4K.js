/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import e from"node-fetch";import*as a from"fs";let handler=async($,{conn:t,command:r})=>{let i=$.mentionedJid&&$.mentionedJid[0]?$.mentionedJid[0]:$.fromMe?t.user.jid:$.sender,n=await t.getName($.sender),o=["737000000000000","69000000000","707000000000000000"],s=$.reply(MultiNK.Proces(n));await s;try{let d=await (await e("https://latam-api.vercel.app/api/"+r+"?apikey="+MyApiKey)).json();t.sendMessage($.chat,{image:{url:d.imagen},caption:`┏━⊱ Imagen : ${r}
┗⊱ Solicitada por : @${i.replace(/@.+/,"")}`,fileLength:o[Math.floor(Math.random()*o.length)],mentions:[$.sender]},{ephemeralExpiration:86400,quoted:{key:{fromMe:!1,participant:"0@s.whatsapp.net",remoteJid:"51995386439-1604595598@g.us"},message:{orderMessage:{itemCount:737,status:200,thumbnail:a.readFileSync("./multimedia/imagenes/mylogo.jpg"),surface:200,message:`${n} [_>] ${r}`,orderTitle:"Matt_M",sellerJid:"0@s.whatsapp.net"}}}})}catch(m){$.reply(MultiNK.Error0())}};handler.help=["waifu_hd","rostro_4k"],handler.tags=["animeuwu"],handler.command=/^(waifu_hd|rostro_4k)$/i;export default handler;
