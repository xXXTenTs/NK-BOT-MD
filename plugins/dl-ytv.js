/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import*as e from"fs";let handler=async(a,{conn:t,command:r,text:i,args:l})=>{if(!i)return a.reply(`Que desea descargar de Youtube?, Ejemplo de uso: 

${Prefijo+r} https://youtu.be/cNgyuHtBBW8`);if(!isUrl(l[0])&&!l[0].includes("youtu"))return a.reply("*[ ! ] Link inv\xe1lido*\n_Por favor, use un link de YouTube_\n");let n;await a.reply(MultiNK.Proces(await t.getName(a.sender)));let o=encodeURIComponent(i);try{let u=await fetchJson(`https://latam-api.vercel.app/api/ytmp4?apikey=${MyApiKey}&q=${o}`);await t.sendMessage(a.chat,{document:{url:u.descarga},mimetype:"video/mp4",fileName:`${u.titulo}.mp4`,jpegThumbnail:e.readFileSync("./multimedia/imagenes/logo.jpg")},{quoted:a}).catch(e=>{t.sendButton(a.chat,"*[ ! ] Ocurrio un error inesperado u.u [ ! ]*","Toque el boton para usar otra alternativa",NombreDelBot,["[ ♻️ REINTENTAR ]",Prefijo+`ytvbochi ${l[0]}`],a)})}catch(d){a.reply(MultiNK.Error0())}};handler.help=["ytv <link>"],handler.tags=["servicio"],handler.command=/^(ytv)$/i,handler.limit=!0;export default handler;
