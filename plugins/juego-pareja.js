/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import*as e from"fs";let handler=async(a,{conn:i,participants:n})=>{let t,l=`❥ *Pareja formada* : 

 ┏─━─━─━∞◆∞━─━─━─┓
@${n[Math.floor(Math.random()*n.length)].id.split("@")[0]} ❤️ @${n[Math.floor(Math.random()*n.length)].id.split("@")[0]} 
 ┗─━─━─━∞◆∞━─━─━─┛
`;setTimeout(()=>{a.reply(l,a.chat,{mentions:i.parseMention(l)})},500),await i.sendMessage(a.chat,{audio:e.readFileSync("./multimedia/sonidos/willy.m4a"),fileName:"NoviosXD.mp3",mimetype:"audio/mpeg",ptt:!0},{quoted:{key:{participant:"0@s.whatsapp.net"},message:{locationMessage:{name:`Esto fue posible gracias a ${await i.getName(a.sender)}`,jpegThumbnail:e.readFileSync("./multimedia/imagenes/logo.jpg")}}}})};handler.help=["emparejar"],handler.tags=["games"],handler.command=/^(emparejar)$/i,handler.limit=!0;export default handler;
