/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
let handler=async(e,{conn:a,command:t,text:r})=>{if(!r)return e.reply(`Que desea buscar en Youtube?, Ejemplo de uso: 

${Prefijo+t} mtc s3rl`);let i;await e.reply(MultiNK.Proces(await a.getName(e.sender)));let n=encodeURIComponent(r);try{let l=await fetchJson(`https://latam-api.vercel.app/api/ytplay?apikey=${MyApiKey}&q=${n}`),o=await getBuffer(l.logo);await a.sendMessage(e.chat,{text:`🔍 Resultado encontrado para: ${r}
✍️ Titulo: ${l.titulo}
⏳ Duracion: 1:23 ━━━━●───────── ${l.duracion}
👀 Vistas: ${l.vistas}
📝 Autor: ${l.autor}
📜 Descripci\xf3n: ${l.descripcion}
⛓️ URL: ${l.link}

\`\`\`Enviando audio, espere...\`\`\``},{quoted:e}),a.sendMessage(e.chat,{audio:{url:l.descarga},mimetype:"audio/mpeg",fileName:`${l.titulo}.mp3`,contextInfo:{externalAdReply:{title:`${l.titulo}`,body:"",previewType:"PHOTO",thumbnailUrl:"",thumbnail:o,sourceUrl:l.descarga}}},{quoted:e}).catch(a=>{e.reply("[ ! ] Ocurrio un error inesperado... u.u")})}catch(u){e.reply(MultiNK.Error0())}};handler.help=["audio <texto>"],handler.tags=["servicio"],handler.command=/^audio$/i,handler.limit=!0;export default handler;
