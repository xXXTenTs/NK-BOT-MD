/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
let handler=async(e,{conn:t,command:a,text:r,args:n})=>{if(!r)return e.reply(`Que desea descargar de Youtube?, Ejemplo de uso: 

${Prefijo+a} https://youtu.be/cNgyuHtBBW8`);if(!isUrl(n[0])&&!n[0].includes("youtu"))return e.reply("*[ ! ] Link inv\xe1lido*\n_Por favor, use un link de YouTube_\n");let o;await e.reply(MultiNK.Proces(await t.getName(e.sender)));let i=encodeURIComponent(r);try{let l=await fetchJson(`https://latam-api.vercel.app/api/ytmp4_2?apikey=${MyApiKey}&q=${i}`);t.sendMessage(e.chat,{video:{url:l.descarga},fileName:`${l.titulo}.mp4`,mimetype:"video/mp4",caption:`Titulo: ${l.titulo}
Tama\xf1o: ${l.peso}
Extencion: .mp4`},{quoted:e}).catch(a=>{t.sendButton(e.chat,"*[ ! ] Ocurrio un error inesperado u.u [ ! ]*","Toque el boton para usar otra alternativa",NombreDelBot,["[ ♻️ REINTENTAR ]",Prefijo+`ytv ${n[0]}`],e)})}catch(u){e.reply(MultiNK.Error0())}};handler.help=["ytmp4 <link>"],handler.tags=["servicio"],handler.command=/^(ytmp4)$/i,handler.limit=!0;export default handler;
