const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94740881677";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "94740881677";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,94740881677";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94740881677";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_25_10_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDksXG4gICAgICAgIDkzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTkxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAwLFxuICAgICAgICA1NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTExLFxuICAgICAgICA1MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgODUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTcyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTcwLFxuICAgICAgICA4NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDksXG4gICAgICAgIDExLFxuICAgICAgICA0MixcbiAgICAgICAgMTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTY2LFxuICAgICAgICA1NixcbiAgICAgICAgMzIsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOCxcbiAgICAgICAgMjQwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDM3LFxuICAgICAgICA4MixcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzksXG4gICAgICAgIDgsXG4gICAgICAgIDYwLFxuICAgICAgICAwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDYxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI1LFxuICAgICAgICAxODgsXG4gICAgICAgIDUyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjksXG4gICAgICAgIDYzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA4LFxuICAgICAgICA2NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDU3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIxNFdENm8wbWhJbWhCVGR2MHUwZlNJSU5XV3NaT3FLVS8yWkFaVlFwNjk0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwdnpXOS1ETVJDZWZBb3dRQ1N0Szl3XCIsXG4gIFwicGhvbmVJZFwiOiBcImFlZTgzZjMwLTA0OWUtNGY1Ni05NDAzLTgwZTFhZDRhYjRlZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NyxcbiAgICAgIDEwNyxcbiAgICAgIDEwNyxcbiAgICAgIDExNixcbiAgICAgIDEyMCxcbiAgICAgIDIyMSxcbiAgICAgIDE0NyxcbiAgICAgIDE4OCxcbiAgICAgIDIwMixcbiAgICAgIDIzLFxuICAgICAgMTA3LFxuICAgICAgMTM3LFxuICAgICAgMTMyLFxuICAgICAgMzUsXG4gICAgICAyMDQsXG4gICAgICAxMzAsXG4gICAgICAyNDksXG4gICAgICAxMTgsXG4gICAgICAxNjUsXG4gICAgICAyMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEsXG4gICAgICA0NCxcbiAgICAgIDIyLFxuICAgICAgMTI1LFxuICAgICAgMTU5LFxuICAgICAgMjA0LFxuICAgICAgMTcyLFxuICAgICAgMTIwLFxuICAgICAgMTg1LFxuICAgICAgMTg5LFxuICAgICAgMTkxLFxuICAgICAgMTc2LFxuICAgICAgMTMwLFxuICAgICAgMTI5LFxuICAgICAgNjQsXG4gICAgICAxNDEsXG4gICAgICA4NSxcbiAgICAgIDEyNyxcbiAgICAgIDE4OCxcbiAgICAgIDE5NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUUDhRMVQ3NVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NDA4ODE2Nzc6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkJnwnZCRIPCdkKTwnZCi8J2Qp/CdkKAg4La04Lec4Lap4LeSIOC2seC3kuC2muC3kuC2ulxcXCLgt4Tgt4pcIixcbiAgICBcImxpZFwiOiBcIjE3MDg2NzIwNDA1NTE0ODozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pMaDBmMEhFTENRaXJrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTWk5MmMxby9BV2psL0RrVXBOOGtBazZsS1lzVnMzRFIzVUFNQmZxWEhGZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrbkt6L0FJVWpqeXVQZ3hMcXA1bCtOR04vcGR3UGgrVm9yWmYxL2pacXZLYXcxRUVIbjNRVmQzWWh2bVBxdHlmMXZjVC8vd2FVTmZJRXJHZG1wS1dBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ6dHBhREg1RG1CaWlnWlB2TUx2Sk5RbWJ5blkwK2YzT05hc0tnMzdPdkR4RkN1WlNZOEpWaW1DWlRmU0YzZldCc0J1MmpCeVhoWTIwVGRzcy8xb0Vndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc0MDg4MTY3NzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NDA4ODE2Nzc6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzAzMTYzMzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDaVlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNpWS5qc29uIjogIntcImtleURhdGFcIjpcIkxtc2E1T1g1MTNwYzhycFpDc0JxNXBjYXVOVElpYi9Yc0VYNE9FRFllbzQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjE0MjUzMTczMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMwMzE2MzQyMTMzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "nicky-boy",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
