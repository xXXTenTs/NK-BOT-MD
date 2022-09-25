/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import e from"performance-now";import*as n from"fs";let handler=async(o,{conn:a,command:d})=>{let g=e(),i=e()-g;"wlcrebotepin"==d?a.sendMessage(o.chat,{text:pickRandom(["Pierde la partida*\nFong \uD83C\uDFD3","\uD83C\uDFD3 Pong!!! \uD83C\uDFD3","\uD83C\uDFD3 Pong!!! \uD83C\uDFD3","Pong \uD83C\uDFD3","Pong \uD83C\uDFD3","Pong \uD83C\uDFD3","Pong \uD83C\uDFD3","Responde con un golpe a 160 kmh*\nPong \uD83C\uDFD3","Pong \uD83C\uDFD3","Pong \uD83C\uDFD3","Le da un golpe en la cabeza*\nPong \uD83C\uDFD3","Pong \uD83C\uDFD3","Pong \uD83C\uDFD3","Le rompe el craneo*\nPong!!!\uD83C\uDFD3","Pong \uD83C\uDFD3","Pong \uD83C\uDFD3","Pong \uD83C\uDFD3","Pong \uD83C\uDFD3","Le gana la partida*\n\uD83C\uDFD3 Pong!!! \uD83C\uDFD3","Lo mata*\nPong!!! \uD83C\uDFD3\uD83C\uDFD3\uD83C\uDFD3"])+`

Velocidad de respuesta : ${i.toFixed(4)}MS Milisegundos
`},{quoted:o}):"wlcadiosdsp"==d&&a.sendMessage(o.chat,{audio:n.readFileSync("./multimedia/sonidos/adiu.m4a"),fileName:"c_va_alv.mp3",mimetype:"audio/mpeg",ptt:!0},{quoted:o})};handler.command=/^(wlcrebotepin)|(wlcadiosdsp)$/i;export default handler;
