/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
let handler=async(n,{conn:e,participants:l,text:r})=>{if(!r)return n.reply("*[ ! ] Que top desea generar?*");if(r.length<3)return n.reply("*[ ! ] El texto es muy corto*");let t=l[Math.floor(Math.random()*l.length)].id.split("@")[0],o=l[Math.floor(Math.random()*l.length)].id.split("@")[0],a=l[Math.floor(Math.random()*l.length)].id.split("@")[0],d,i=`*[ TOP 5 ${r} ]*
_Generador_ : ${await e.getName(n.sender)}

✵:･ﾟ✧ :･✵ :･✧:･ﾟ✵

▪︎ @${t} 

▪︎ @${o} 

▪︎ @${a} 

▪︎ @${l[Math.floor(Math.random()*l.length)].id.split("@")[0]} 

▪︎ @${l[Math.floor(Math.random()*l.length)].id.split("@")[0]} 

✵:･ﾟ✧ :･✵ :･✧:･ﾟ✵
`;n.reply(i,n.chat,{mentions:e.parseMention(i)})};handler.help=["top5"],handler.tags=["games"],handler.command=/^(top5)$/i,handler.limit=!0;export default handler;
