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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_21_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTY3LFxuICAgICAgICA2MSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDksXG4gICAgICAgIDUzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDksXG4gICAgICAgIDExMixcbiAgICAgICAgMTMyLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDg3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDcsXG4gICAgICAgIDcwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDY4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU3LFxuICAgICAgICA1NixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDc4LFxuICAgICAgICA4MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTU2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg2LFxuICAgICAgICA0NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDg4LFxuICAgICAgICAxODMsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICA4NyxcbiAgICAgICAgNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA5MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDY2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDUzLFxuICAgICAgICAxODUsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDYxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTM5LFxuICAgICAgICA0MCxcbiAgICAgICAgMixcbiAgICAgICAgOTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMDBrRHhPSzVjNHVuaWJNeFZNZFhKeUJ0MW1talcvZE0wcVBBZ3FpRzJ4ND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTc5ODAyMDc2OTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjEzRjgzMDY3Q0I0ODIyQzhGMTk3RDkzQTVBMERCREUxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDYyNDkxMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxNzk4MDIwNzY5N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUMxNjlFMTA3NTcyRDQ4MTVGNDQzQUE0MENCQjUyNTNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNjI0OTEyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE3OTgwMjA3Njk3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEMzJBOEU0MjRENzBFMzJBQTk3MTE0RDZGQkQxODM3NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA2MjQ5MTZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiR3pZV1ZyNlpSaWVnc2NxaGFNT3NJd1wiLFxuICBcInBob25lSWRcIjogXCJhZDViODcwZi01YWQ4LTQ5NTMtYmIzZi1iNDdmYWU3NzczNmVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk3LFxuICAgICAgMTUzLFxuICAgICAgMTMsXG4gICAgICAyMjAsXG4gICAgICAxOTUsXG4gICAgICA0MSxcbiAgICAgIDksXG4gICAgICAxMjUsXG4gICAgICAyMjQsXG4gICAgICA5OCxcbiAgICAgIDE5NCxcbiAgICAgIDE4OSxcbiAgICAgIDEwOSxcbiAgICAgIDc5LFxuICAgICAgMTgyLFxuICAgICAgMjUwLFxuICAgICAgMTA1LFxuICAgICAgMTQ4LFxuICAgICAgMjQzLFxuICAgICAgNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkzLFxuICAgICAgMzcsXG4gICAgICA4NyxcbiAgICAgIDE2OCxcbiAgICAgIDEzMSxcbiAgICAgIDE5LFxuICAgICAgMTcsXG4gICAgICA5MyxcbiAgICAgIDE1NCxcbiAgICAgIDE4MSxcbiAgICAgIDE1NSxcbiAgICAgIDExNSxcbiAgICAgIDIyMixcbiAgICAgIDE2MyxcbiAgICAgIDM5LFxuICAgICAgMTIsXG4gICAgICAyMSxcbiAgICAgIDEyNSxcbiAgICAgIDQ1LFxuICAgICAgMTIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJEN1pBNDVQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTc5ODAyMDc2OTc6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE4NTExMTkyMzgzNjU0OjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiU3VyeWFiaXN3YXNcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLRFp1MWtRaWM2NnRBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImVEN0poRDUva29Mczg2R2UrdGIySkdrTFMxQmlIeU9BUnFjVGMwc1BEQW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiODdiMWtiWmRnaWxzWnpGRU1VK091T3h5aVVwREs4ZkxWWXF4bGx4ckdpWkwxeHhtZHN3V0FINjN3UkF1YkNReGJnb1l1cFlsc243Sk9SRzFpbzBuQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidEhSOUdUaEkvZVpjVi9PNVRzN0hkV3VWQk1qN0JBbjNEVVNIa3NwTmtIejRodE41RjBHVWdOVUV4QTdBL0EzN2RVSVErS0Uya2NiZFZTdFlESUJnalE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE3OTgwMjA3Njk3OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA2MjQ5MDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKcUZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpxRi5qc29uIjogIntcImtleURhdGFcIjpcIlhFaTk4SzVKRlE0K1FReXRtODBLRzZDN0h5SjB6WlFnbnJObHRJYjVlNk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg3NjI0NjA4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA2MjQ5MDk5NDZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "SURYA MD",
  ownername:process.env.OWNER_NAME|| "Surya",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
