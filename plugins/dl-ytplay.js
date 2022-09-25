/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
let handler=async(e,{conn:a,command:t,text:l})=>{if(!l)return e.reply(`Que desea buscar en Youtube?, Ejemplo de uso: 

${Prefijo+t} mtc s3rl`);let r;await e.reply(MultiNK.Proces(await a.getName(e.sender)));let o=encodeURIComponent(l),i=pickRandom([0,1,2]);try{let p=await fetchJson(`https://latam-api.vercel.app/api/ytmp3_2?apikey=${MyApiKey}&q=${(await fetchJson(`https://latam-api.vercel.app/api/yts?apikey=${MyApiKey}&q=${o}`)).resultados[i].url}`),n=await getBuffer(p.logo);await a.sendMessage(e.chat,{text:`
*✍️ Titulo:* ${p.titulo}
*🗜️ Tama\xf1o:* ${p.peso}
*🪀 Resultado:* ${i}/3

[⇆ㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤ↻]


_Enviando audio, espere..._
`.trim()},{quoted:e}),a.sendMessage(e.chat,{audio:{url:p.descarga},mimetype:"audio/mp4",fileName:`${p.titulo}.mp3`,contextInfo:{externalAdReply:{title:`${p.titulo}`,body:`⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻`,previewType:"PHOTO",thumbnailUrl:"",thumbnail:n,sourceUrl:"https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA?sub_confirmation=1"}}},{quoted:e}).catch(a=>{e.reply(`Ocurrio un error, por favor use el comando:

${Prefijo}audio ${l}
`)})}catch(u){e.reply(MultiNK.Error0())}};handler.help=["play <texto>"],handler.tags=["servicio"],handler.command=/^play$/i;export default handler;
