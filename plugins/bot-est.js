/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import{generateWAMessageFromContent as t}from"@adiwajshing/baileys";import e from"../lib/database.js";let handler=async(a,{conn:i,participants:o,groupMetadata:n,isBotAdmin:s})=>{let{isBanned:c,welcome:d,detect:r,antiLink:l,antiLink2:A,delete:v,estranjerosnot:I,antifake1:h,antifake2:p,antiTraba:u,simi:m}=e.data.chats[a.chat],{restrict:X,antiPrivado:g}=e.data.settings[i.user.jid],b=i.user.id.split(":")[0]+"@s.whatsapp.net",O="@"+i.user.id.split(":")[0];"‎".repeat(850);let D=t(a.chat,{liveLocationMessage:{degreesLatitude:-4.4764769,degreesLongitude:142.4871568,caption:`
*Grupo* : _[ ${n.subject} ]_

*Grupo baneado* : _${c?"[✓]":"[X]"}_

*Bot participante* : ${NombreDelBot}
_${O}_

*Bot admin* : _${s?"[✓]":"[X]"}_

*Bot* : _${opts.self?"MODO-PRIVADO [ ! ]":"MODO-PUBLICO [✓]"}_

*Modo restringido* : _${X?"ACTIVADO [✓]":"DESACTIVADO [X]"}_

*Anti-Privado* : _${g?"ACTIVADO [✓]":"DESACTIVADO [X]"}_

*Bienvenida* : _${d?"Activo [✓]":"Inactivo [X]"}_

*Antilink* : _${l?"Activo [✓]":"Inactivo [X]"}_

*Antilink 2* : _${A?"Activo [✓]":"Inactivo [X]"}_

*Anti extranjeros* : _${I?"Activo [✓]":"Inactivo [X]"}_

*No falsos* : _${h?"Activo [✓]":"Inactivo [X]"}_

*No falsos 2* : _${p?"Activo [✓]":"Inactivo [X]"}_

*Detecci\xf3n* : _${r?"Activo [✓]":"Inactivo [X]"}_

*Anti eliminar* : _${v?"Inactivo [X]":"Activo [✓]"}_

*Antitraba* : _${u?"Activo [✓]":"Inactivo [X]"}_

*Chat bot* : _${m?"Activo [✓]":"Inactivo [X]"}_
`,sequenceNumber:0x5e2b9e7ffcf11,timeOffset:8600,jpegThumbnail:null,contextInfo:{mentionedJid:[b]}}},{quoted:a});await i.relayMessage(a.chat,D.message,{messageId:D.key.id}),reacMoji(a.chat,i,"\uD83E\uDE80",a)};handler.help=["estadobot"],handler.tags=["casual"],handler.command=/^(estadobot)$/i,handler.group=!0;export default handler;
