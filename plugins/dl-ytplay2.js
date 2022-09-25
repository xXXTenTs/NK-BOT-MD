/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
let handler=async(e,{conn:t,command:a,text:r})=>{if(!r)return e.reply(`Que desea buscar en Youtube?, Ejemplo de uso: 

${Prefijo+a} ideas en 5 minutos`);let l;await e.reply(MultiNK.Bsqd(await t.getName(e.sender)));let i=encodeURIComponent(r);try{let n=await fetchJson(`https://latam-api.vercel.app/api/yts?apikey=${MyApiKey}&q=${i}`),u=pickRandom([0,1,2]),s=n.resultados[u];if(s.duracion_s>=1800)return e.reply("[ ! ] Sin resultados, vuelva a intentarlo...");let d;await t.sendMessage(e.chat,{image:{url:s.imagen},caption:`
✍️ Titulo : ${s.titulo}
⚡ Autor : ${s.autor}
⏰ Duracion : ${s.duracion}
👀 Vistas : ${s.vistas}
📆 Fecha de subida : ${s.f_carga}
📺 Canal : ${s.canal}
📃 Descripcion : ${s.descripcion}
🧬 ID : ${s.id}`.trim(),footer:NombreDelBot+` 🔥`,buttons:[{buttonId:`${Prefijo}ytmp3 ${s.url}`,buttonText:{displayText:"[ AUDIO MP3 \uD83D\uDD0A ]"},type:1},{buttonId:`${Prefijo}ytmp4 ${s.url}`,buttonText:{displayText:"[ VIDEO MP4 \uD83C\uDF9E️ ]"},type:1}],headerType:4},{quoted:e}),reacMoji(e.chat,t,"\uD83D\uDCE5",e)}catch(o){e.reply(MultiNK.Error0())}};handler.help=["play2 <texto>"],handler.tags=["busqueda"],handler.command=/^(play2)$/i,handler.limit=!0;export default handler;
