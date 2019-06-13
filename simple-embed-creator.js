const Discord = require("discord.js")
const bot = new Discord.Client()
var config = require("./config.json")
const prefix = "/"

bot.on("ready", () => {
    bot.login(config.token);
    console.log('----------------------------------------------------------')
    console.log('[INFO] Simple Embed Creator by Obey#0001')
    console.log('[INFO] Connected to Discord via the token successfully.')
    console.log('[INFO] Username: ' + bot.user.username)
	console.log('[INFO] Commands List: /embed')
})

bot.on("message", msg => {
    if (msg.author.id != config.userid) { return; }
    let cmd = msg.content.split(" ")[0]
    cmd = cmd.slice(prefix.length)
    let args = msg.content.split(" ").slice(1)
    if (cmd === "embed" || cmd === "e") {
		if(!args[0]) {
			msg.edit(":x: You must specify a message.");
		}
		else if(args[0].includes("#") === true) {
			let message = args.slice(1).join(" ");
			msg.edit("", { embed: new Discord.RichEmbed().setColor(args[0]).setDescription(message) });
		}
		else {
			let message = args.join(" ");
			msg.edit("", { embed: new Discord.RichEmbed().setDescription(message) });
		}
    }
})

bot.login(config.token);
