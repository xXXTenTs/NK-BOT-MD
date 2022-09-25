import{mediafiredl as e}from"@bochilteam/scraper";let handler=async(r,{conn:i,args:a,command:l})=>{if(!a[0])return r.reply("*[ ! ] Y el Link?*");if(!isUrl(a[0])&&!a[0].includes("https://www.mediafire.com/"))return r.reply("*[ ! ] Link invalido*\n_Por favor, use un link de MediaFire_");try{let{url:n,url2:t,filename:d,ext:m,aploud:o,filesize:c,filesizeH:h}=await e(a[0]),p=`
*Nombre:* ${d}
*Tama\xf1o:* ${h}
*Extensi\xf3n:* ${m}
*Fecha de subida:* ${o}
`.trim();r.reply(p),await i.sendFile(r.chat,n,d,"",r,null,{mimetype:m,asDocument:!0})}catch(s){r.reply(MultiNK.Error1())}};handler.help=["mediafire"].map(e=>e+" <link>"),handler.tags=["servicio"],handler.command=/^(mediafire)$/i,handler.limit=!0;export default handler;
