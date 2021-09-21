module.exports = {
  Admins: ["UserID", "UserID"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "/", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/sbySMS7m3v", //Support Server Link
  Token: process.env.Token || "ODg4NzkxODY1MDc4NDUyMjI1.YUX17Q.pSLzg6c_t_5VWt3y5g7AqzRcPwE", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "888791865078452225", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "w_FTTkjQnTrO4nlT9KLl98C_S3l9A-gC", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "(host name or IP)",
    port: (port),
    pass: "(password)", 
    secure: false, // Set this to true if you're self-hosting lavalink on replit.
  },


  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "5dd17b8a6a314734ba3ac73e422388d1", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "6ca843ad96f34347880a2fde4b352da5", //Spotify Client Secret
  },
};