/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import D from"../lib/database.js";let handler=async(u,{conn:e})=>{let d="\uD83C\uDF47",s="\uD83C\uDF4E",n="\uD83C\uDF53",a="\uD83D\uDD14",C="\uD83C\uDF51",r="\uD83D\uDCB0",F="\uD83E\uDD5D",l="☘️",t="\uD83C\uDF4C",c="\uD83C\uDF4B",i=[`${d}`,`${s}`,`${n}`,`${a}`,`${C}`,`${r}`,`${F}`,`${l}`,`${t}`,`${c}`],o=[`${d}`,`${s}`,`${n}`,`${a}`,`${C}`,`${r}`,`${F}`,`${l}`,`${t}`,`${c}`],m=[`${d}`,`${s}`,`${n}`,`${a}`,`${C}`,`${r}`,`${F}`,`${l}`,`${t}`,`${c}`],_=[`${d}`,`${s}`,`${n}`,`${a}`,`${C}`,`${r}`,`${F}`,`${l}`,`${t}`,`${c}`],g=[`${d}`,`${s}`,`${n}`,`${a}`,`${C}`,`${r}`,`${F}`,`${l}`,`${t}`,`${c}`],$=[`${d}`,`${s}`,`${n}`,`${a}`,`${C}`,`${r}`,`${F}`,`${l}`,`${t}`,`${c}`],h=[`${d}`,`${s}`,`${n}`,`${a}`,`${C}`,`${r}`,`${F}`,`${l}`,`${t}`,`${c}`],B=[`${d}`,`${s}`,`${n}`,`${a}`,`${C}`,`${r}`,`${F}`,`${l}`,`${t}`,`${c}`],E=[`${d}`,`${s}`,`${n}`,`${a}`,`${C}`,`${r}`,`${F}`,`${l}`,`${t}`,`${c}`],p=pickRandom(i),y=pickRandom(o),x=pickRandom(m),b=pickRandom(_),f=pickRandom(g),q=pickRandom($),J=pickRandom(h),M=pickRandom(B),j=pickRandom(E),T=`┃  | ${p} : ${y} : ${x}`,k=`┃  | ${b} : ${f} : ${q}`,v=`┃  | ${J} : ${M} : ${j}`;k.includes("\uD83C\uDF47 : \uD83C\uDF47 : \uD83C\uDF47")||k.includes("\uD83C\uDF4E : \uD83C\uDF4E : \uD83C\uDF4E")||k.includes("\uD83C\uDF53 : \uD83C\uDF53 : \uD83C\uDF53")||k.includes("\uD83D\uDD14 : \uD83D\uDD14 : \uD83D\uDD14")||k.includes("\uD83C\uDF51 : \uD83C\uDF51 : \uD83C\uDF51")||k.includes("\uD83D\uDCB0 : \uD83D\uDCB0 : \uD83D\uDCB0")||k.includes("\uD83E\uDD5D : \uD83E\uDD5D : \uD83E\uDD5D")||k.includes("☘️ : ☘️ : ☘️")||k.includes("\uD83C\uDF4C : \uD83C\uDF4C : \uD83C\uDF4C")||k.includes("\uD83C\uDF4B : \uD83C\uDF4B : \uD83C\uDF4B")?(e.sendMessage(u.chat,{text:`*Jugador : @${u.sender.replace(/@.+/,"")}*
*[ Felicidades, ganaste!!! ]* 🥳🎉

*🎰=====🎉======🎰*
*┃ ┌────────┐ ┃*
*${T}*
*┃ ├────────┤ ┃*
*${k} <==*
*┃ ├────────┤ ┃*
*${v}*
*┃ └────────┘ ┃*
*🎰=====🎉======🎰*

*Tu recompensa:* 
+500 de dinero`,mentions:[u.sender]},{quoted:u}),D.data.users[u.sender].money+=500):(D.data.users[u.sender].money<11||(D.data.users[u.sender].money-=10),e.sendMessage(u.chat,{text:`Jugador : @${u.sender.replace(/@.+/,"")}

🎰=====🪀======🎰
┃ ┌────────┐ ┃
${T}
┃ ├────────┤ ┃
${k}
┃ ├────────┤ ┃
${v}
┃ └────────┘ ┃
🎰=====🪀======🎰`,mentions:[u.sender]},{quoted:u}))};handler.help=["tragamoneda"],handler.tags=["games"],handler.command=/^(tragamoneda)$/i;export default handler;
