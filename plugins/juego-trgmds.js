/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import u from"../lib/database.js";let handler=async(D,{conn:e})=>{let d="\uD83C\uDF47",n="\uD83C\uDF4E",a="\uD83C\uDF53",s="\uD83D\uDD14",C="\uD83C\uDF51",r="\uD83D\uDCB0",l="\uD83E\uDD5D",F="☘️",t="\uD83C\uDF4C",i="\uD83C\uDF4B",c=[`${d}`,`${n}`,`${a}`,`${s}`,`${C}`,`${r}`,`${l}`,`${F}`,`${t}`,`${i}`],o=[`${d}`,`${n}`,`${a}`,`${s}`,`${C}`,`${r}`,`${l}`,`${F}`,`${t}`,`${i}`],m=[`${d}`,`${n}`,`${a}`,`${s}`,`${C}`,`${r}`,`${l}`,`${F}`,`${t}`,`${i}`],$=[`${d}`,`${n}`,`${a}`,`${s}`,`${C}`,`${r}`,`${l}`,`${F}`,`${t}`,`${i}`],_=[`${d}`,`${n}`,`${a}`,`${s}`,`${C}`,`${r}`,`${l}`,`${F}`,`${t}`,`${i}`],g=[`${d}`,`${n}`,`${a}`,`${s}`,`${C}`,`${r}`,`${l}`,`${F}`,`${t}`,`${i}`],h=[`${d}`,`${n}`,`${a}`,`${s}`,`${C}`,`${r}`,`${l}`,`${F}`,`${t}`,`${i}`],B=[`${d}`,`${n}`,`${a}`,`${s}`,`${C}`,`${r}`,`${l}`,`${F}`,`${t}`,`${i}`],E=[`${d}`,`${n}`,`${a}`,`${s}`,`${C}`,`${r}`,`${l}`,`${F}`,`${t}`,`${i}`],p=pickRandom(c),y=pickRandom(o),x=pickRandom(m),b=pickRandom($),f=pickRandom(_),q=pickRandom(g),J=pickRandom(h),M=pickRandom(B),j=pickRandom(E),T=`┃  | ${p} : ${y} : ${x}`,k=`┃  | ${b} : ${f} : ${q}`,v=`┃  | ${J} : ${M} : ${j}`;k.includes("\uD83C\uDF47 : \uD83C\uDF47 : \uD83C\uDF47")||k.includes("\uD83C\uDF4E : \uD83C\uDF4E : \uD83C\uDF4E")||k.includes("\uD83C\uDF53 : \uD83C\uDF53 : \uD83C\uDF53")||k.includes("\uD83D\uDD14 : \uD83D\uDD14 : \uD83D\uDD14")||k.includes("\uD83C\uDF51 : \uD83C\uDF51 : \uD83C\uDF51")||k.includes("\uD83D\uDCB0 : \uD83D\uDCB0 : \uD83D\uDCB0")||k.includes("\uD83E\uDD5D : \uD83E\uDD5D : \uD83E\uDD5D")||k.includes("☘️ : ☘️ : ☘️")||k.includes("\uD83C\uDF4C : \uD83C\uDF4C : \uD83C\uDF4C")||k.includes("\uD83C\uDF4B : \uD83C\uDF4B : \uD83C\uDF4B")?(e.sendMessage(D.chat,{text:`*Jugador : @${D.sender.replace(/@.+/,"")}*
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
+5000 de dinero`,mentions:[D.sender]},{quoted:D}),u.data.users[D.sender].money+=500):(u.data.users[D.sender].money<11||(u.data.users[D.sender].money-=10),e.sendMessage(D.chat,{text:`Jugador : @${D.sender.replace(/@.+/,"")}

🎰=====🪀======🎰
┃ ┌────────┐ ┃
${T}
┃ ├────────┤ ┃
${k}
┃ ├────────┤ ┃
${v}
┃ └────────┘ ┃
🎰=====🪀======🎰`,mentions:[D.sender]},{quoted:D}))};handler.help=["tragamoneda"],handler.tags=["games"],handler.command=/^(tragamoneda)$/i,handler.group=!0,handler.limit=!0;export default handler;
