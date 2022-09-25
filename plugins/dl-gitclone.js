/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import e from"node-fetch";let handler=async(t,{conn:a,args:i})=>{let r=/(?:https?|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;if(!i[0])return t.reply(`Por favor use una URL de github, ejemplo:
${prefix+command} https://github.com/NeKosmic/NK-BOT-MD`);if(!r.test(i[0]))return reply("[ ! ] URL inv\xe1lido");let o=await a.getName(t.sender),n=t.reply(MultiNK.Proces(o));await n;let[,h,l]=i[0].match(r)||[],s=`https://api.github.com/repos/${h}/${l=l.replace(/.git$/,"")}/zipball`,c=await e(s,{method:"head"});if(200!==c.status)throw c.statusText;let d;await a.sendMessage(t.chat,{document:{url:s},fileName:c.headers.get("content-disposition").match(/attachment; filename=(.*)/)[1],mimetype:c.headers.get("content-type")},{quoted:t}).catch(e=>{t.reply(MultiNK.Error0())})};handler.help=["gitclone <Link>"],handler.tags=["servicio"],handler.command=/^(gitclone)$/i;export default handler;
