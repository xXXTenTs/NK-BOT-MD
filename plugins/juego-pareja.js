/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import*as e from"fs";let handler=async(a,{conn:n,participants:i})=>{let t,l=`❥ *Pareja formada* : 

 ┏─━─━─━∞◆∞━─━─━─┓
@${i[Math.floor(Math.random()*i.length)].id.split("@")[0]} ❤️ @${i[Math.floor(Math.random()*i.length)].id.split("@")[0]} 
 ┗─━─━─━∞◆∞━─━─━─┛
`;setTimeout(()=>{a.reply(l,a.chat,{mentions:n.parseMention(l)})},500),await n.sendMessage(a.chat,{audio:e.readFileSync("./multimedia/sonidos/willy.m4a"),fileName:"NoviosXD.mp3",mimetype:"audio/mpeg",ptt:!0},{quoted:{key:{participant:"0@s.whatsapp.net"},message:{locationMessage:{name:`Esto fue posible gracias a ${await n.getName(a.sender)}`,jpegThumbnail:e.readFileSync("./multimedia/imagenes/logo.jpg")}}}})};handler.help=["emparejar"],handler.tags=["games"],handler.command=/^(emparejar)$/i;export default handler;
