import Discord from 'discord.js'
import botCfg from './config.json'
import findTargetUsers from './module/findTargetUsers'

export let client = new Discord.Client({ intents: ["DIRECT_MESSAGES", "GUILD_MEMBERS", "GUILD_PRESENCES", "GUILDS", "GUILD_BANS"]})
export let guilds : Array<string> = []
export let targetUsers : Array<string> = [] 
client.login(botCfg.BotToken)

client.on("ready", async() => {
    console.log("Your bot is logged in.")
    guilds = await client.guilds.cache.map(guild => guild.id)
    setInterval(async() => {
        guilds = await client.guilds.cache.map(guild => guild.id)
    }, 60000)

    findTargetUsers()
})