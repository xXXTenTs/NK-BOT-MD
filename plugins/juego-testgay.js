/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import*as e from"fs";let handler=async(a,{conn:t,text:i})=>{let s=await t.getName(a.sender);try{var r=await t.profilePictureUrl(a.sender,"image")}catch{var r="https://i.ibb.co/jhQ7gL0/Sin-Perfil-F.jpg"}try{var n=await getBuffer(r)}catch{var n=e.readFileSync("./multimedia/imagenes/avatar_contact.png")}t.sendMessage(a.chat,{text:"_Calculando porcentaje..._",mentions:[a.sender]},{ephemeralExpiration:86400,quoted:{key:{participant:"0@s.whatsapp.net"},message:{documentMessage:{title:`💉 ${NombreDelBot}
🔬 ${s}`,jpegThumbnail:e.readFileSync("./multimedia/imagenes/logo.jpg")}}}});let $=await getBuffer(`https://some-random-api.ml/canvas/gay?avatar=${encodeURIComponent(r)}`),m=["0%","2%","3%","4%","5%","6%","7%","8%","9%","*No eri gei* \uD83D\uDDFF\uD83D\uDEAC","10%","11%","12%","15%","13%","14%","16%","26%","27%","18%","20%","61%","62%","63%","64%","65%","66%","67%","68%","69.99%","22%","23%","*[ ! ] Limite de gay superado [ ! ]* \uD83D\uDE33","71%","72%","73%","31%","32%","33%","34%","35%","36%","37%","38%","39.99%","74%","75%","76%","77%","78%","79.99%","1%","97%","5%","93%","8%","90%","10%","89%","15%","85%","17%","83%","19%","80%","21%","24%","76%","77%","25%","74%","81%","82%","83%","41%","42%","43%","44%","45%","46%","47%","48%","49.99%","84%","85%","86%","87%","88%","89.99%","28%","70%","32%","69%","35%","65%","37%","63%","40%","60%","41%","59%","43%","44%","57%","47%","49%","51%","54%","56%","57%","91%","92%","51%","52%","53%","54%","55%","56%","57%","58%","59.99%","93%","94%","95%","96%","97%","98%","99.99%","100%","200%","300%","400%","500%","600%","700%","800%","900%","999999999.9%","Mr. Gey","Super gey","Demasido gey!"],d=m[Math.floor(Math.random()*m.length)];if(await t.sendMessage(a.chat,{image:$,jpegThumbnail:e.readFileSync("./multimedia/imagenes/erigei.jpg"),caption:`*🏳‍🌈 | Test gay*
@${a.sender.split("@")[0]} ${isNaN(d.split("%")[0])?d:"su porcentaje de gay es "+d}`,mentions:[a.sender]},{ephemeralExpiration:86400,quoted:a}),!isNaN(d.split("%")[0])&&50<d.split("%")[0])return t.sendMessage(a.chat,{audio:e.readFileSync("./multimedia/sonidos/audishit/audigey.m4a"),fileName:`${s}Gey.mp3`,mimetype:"audio/mpeg",ptt:!0},{quoted:{key:{fromMe:!1,participant:"0@s.whatsapp.net",remoteJid:"51995386439-1604595598@g.us"},message:{orderMessage:{itemCount:2022,status:200,thumbnail:await miniThumb(n),surface:200,message:`@${s} es ${d} gay`,orderTitle:"Matt_M",sellerJid:"0@s.whatsapp.net"}}}})};handler.help=["testgey"],handler.tags=["games"],handler.command=/^(testgey|testgay)$/i,handler.group=!0,handler.limit=!0;export default handler;
