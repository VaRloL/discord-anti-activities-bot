import { client, guilds, targetUsers} from ".."
import botCfg from "../config.json"
import isDateGreaterThan from "./isDateGreaterThan"

async function check() {
    guilds.forEach((guild) => {
        let members : any = client.guilds.cache.get(guild)?.presences.cache
        members.forEach(async(member: any) => {
            member.activities.forEach(async(activity : any) => {
                //game checking
                botCfg.VideoGames.forEach(async(game) => {
                    const regex = new RegExp(`${game}.*`, "gi")
                    let matches = activity.name.match(regex)
                    if (matches != null && targetUsers.find(e => e == member.member?.id) == undefined) {
                        console.log(`${member.member?.displayName} is playing ${game}`)
                        targetUsers.push(member.member?.id)
                        await member.member?.guild.systemChannel?.send(`${member.member?.displayName} is playing ${activity.name}, they will be banned if they play for more than 30 minutes.`)
                        let interval = setInterval(async() => {
                            let newActivity = await client.guilds.cache.get(member.member?.guild.id)?.members.cache.get(member.member.id)?.presence?.activities.find(e => e.id == activity.id)
                            if (newActivity != undefined && isDateGreaterThan(new Date(), activity.timestamps?.start)) {
                                try {
                                    await member.member?.ban({reason: `This member was playing ${activity.name} for 30 minutes.`})
                                    await member.member?.send(`You were banned from ${member.member?.guild.name} for playing ${activity.name} for 30 minutes.`)
                                    console.log(`${member.member?.displayName} was playing${activity.name} for 30 minutes and was banned from ${member.member?.guild.name}.`)
                                    clearInterval(interval)
                                    targetUsers.splice(targetUsers.findIndex(e => e == member.member?.id), 1)
                                } catch (error) {
                                    console.log(error)
                                    clearInterval(interval)
                                    targetUsers.splice(targetUsers.findIndex(e => e == member.member?.id), 1)
                                }
                            } else if (newActivity == undefined) {
                                clearInterval(interval)
                                targetUsers.splice(targetUsers.findIndex(e => e == member.member?.id), 1)
                            }
                        }, 30000)
                    }
                })
                //artist checking
            })    
        })
    })
}

export default async function() {
    check()
    setInterval(async() => {
        check()
    console.log(targetUsers)}, 60000)
}