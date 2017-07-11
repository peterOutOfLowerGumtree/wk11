const commando = require("discord.js-commando");
const client = new commando.Client();
const privateStuff = require("./token");
var token = privateStuff.key;
var user = privateStuff.user;

client.registry.registerGroup("responses")
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/commands");

const bot = new commando.CommandoClient({
    owner: user
})

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(token);