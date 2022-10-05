/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import*as e from"fs";let handler=async(a,{conn:t,command:r,text:i,args:l})=>{if(!i)return a.reply(`Que desea descargar de Youtube?, Ejemplo de uso: 

${Prefijo+r} https://youtu.be/vbhVFqYwxLM`);if(!isUrl(l[0])&&!l[0].includes("youtu"))return a.reply("*[ ! ] Link inv\xe1lido*\n_Por favor, use un link de YouTube_\n");let o;await a.reply(MultiNK.Proces(await t.getName(a.sender)));let n=encodeURIComponent(i);try{let u=await fetchJson(`https://latam-api.vercel.app/api/ytmp3?apikey=${MyApiKey}&q=${n}`);await getBuffer(u.logo),await t.sendMessage(a.chat,{document:{url:u.descarga},mimetype:"audio/mpeg",fileName:`${u.titulo}.mp3`,jpegThumbnail:e.readFileSync("./multimedia/imagenes/logo.jpg")},{quoted:a}).catch(e=>{t.sendButton(a.chat,"*[ ! ] Ocurrio un error inesperado u.u [ ! ]*","Toque el boton para usar otra alternativa",NombreDelBot,["[ ♻️ REINTENTAR ]",Prefijo+`ytabochi ${l[0]}`],a)})}catch(d){a.reply(MultiNK.Error0())}};handler.help=["yta <link>"],handler.tags=["servicio"],handler.command=/^(yta)$/i,handler.limit=!0;export default handler;
