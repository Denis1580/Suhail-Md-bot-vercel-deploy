const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_35_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1LFxuICAgICAgICA1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA0NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA5LFxuICAgICAgICA1NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNixcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDU4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgyLFxuICAgICAgICA0NixcbiAgICAgICAgMTExLFxuICAgICAgICA5NixcbiAgICAgICAgOTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjEwLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjA5LFxuICAgICAgICA0NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDczLFxuICAgICAgICAxNjQsXG4gICAgICAgIDgzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAzOSxcbiAgICAgICAgNzksXG4gICAgICAgIDU5LFxuICAgICAgICAyNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNSxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg2LFxuICAgICAgICA2NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA4LFxuICAgICAgICAyNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwLFxuICAgICAgICA4NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDkxLFxuICAgICAgICAxODMsXG4gICAgICAgIDExLFxuICAgICAgICAxOTIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMixcbiAgICAgICAgNTIsXG4gICAgICAgIDk1LFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDgwLFxuICAgICAgICA3LFxuICAgICAgICAwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgzLFxuICAgICAgICA2LFxuICAgICAgICAxNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDExNixcbiAgICAgICAgNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDMsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDc3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTA5LFxuICAgICAgICA5MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc5LFxuICAgICAgICA5MixcbiAgICAgICAgNDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjgsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDZnl0TGJ3Lys4N1hsbVF1dERFekpwNUhQME9sOEJVbWEwb0J2Um43RkNrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjUwOTM4NDk0MzkxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCQUZDQTFGNkY2OEQ5OTI1QURCNDk1Mzg2REJGQjQ3NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAwMzE3MDNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidWwtSzcyUzZTREM2WWtsdFNWWkcyd1wiLFxuICBcInBob25lSWRcIjogXCIxODkxNjk1Mi05M2NiLTRlY2EtYmJkOC04YTI4ZDNiYzA2MDdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjUsXG4gICAgICAxNzEsXG4gICAgICAxOTksXG4gICAgICAxNTUsXG4gICAgICAxMzAsXG4gICAgICAyMDcsXG4gICAgICA0MCxcbiAgICAgIDE5NyxcbiAgICAgIDE3NyxcbiAgICAgIDE1NyxcbiAgICAgIDgsXG4gICAgICAyMTUsXG4gICAgICAxNDEsXG4gICAgICAyMTEsXG4gICAgICA1NyxcbiAgICAgIDE1OSxcbiAgICAgIDkzLFxuICAgICAgOTcsXG4gICAgICAxNjgsXG4gICAgICA1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NyxcbiAgICAgIDEwLFxuICAgICAgNDQsXG4gICAgICAxMjksXG4gICAgICA0OCxcbiAgICAgIDcyLFxuICAgICAgMTMsXG4gICAgICAzNSxcbiAgICAgIDgzLFxuICAgICAgMTM3LFxuICAgICAgMTM5LFxuICAgICAgNDMsXG4gICAgICAyMzUsXG4gICAgICAxMjQsXG4gICAgICAxMCxcbiAgICAgIDE4NSxcbiAgICAgIDQzLFxuICAgICAgMjMzLFxuICAgICAgMTc3LFxuICAgICAgMTk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpGTlRBSDdBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI1MDkzODQ5NDM5MTo3NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkluZyBEZW5pcyBBWk9SXCIsXG4gICAgXCJsaWRcIjogXCIxNzc0MzM3MDU3MTM3NzA6NzRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGZ3aEo4SEVNK3psclFHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJldjRNaWs1a2lqcEhuUUV0cHlJejBBam4xaFdBMHdUNmt4M0s4amNFV0ZBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkhyb1V2WklJWjNCcklIWCsxQnlPMWl1OFdvMllRaUE0TE1mRkZteXpBOWp3QWQzMnd2TndxNTRvMkNIWHV3V3lNQWxkZ0xRcUs0dTQzYThmRDNmNERnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjhaWEpHMGtLdEJtSHQyWWxFR0dGT3g4Z1BPMFB6K01XcFlHdDdQMXJVakVlTExzNE5lVGdVTit3aEtYMjFUajF2Q2xKTVNTdFozS1p5ZFdIWE15aUFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjUwOTM4NDk0MzkxOjc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDAzMTY5OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhvR1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSG9HLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNDc0QWdEQzE0KzRiN3g1UmRRUVBTZ2tqUWh5alVUcnRoSjFvZWxoSlJDND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTQ0MTM5ODk1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk4NTUyMTczOTFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
