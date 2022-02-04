# Discord Anti-Activities Bot"

## Index

1. [Installation](https://github.com/VaRloL/discord-anti-activities-bot#installation)
2. [Setup](https://github.com/VaRloL/discord-anti-activities-bot#setup)
3. [Running](https://github.com/VaRloL/discord-anti-activities-bot#running)
## Installation

To get the bot up and running, you will need **Node.JS** 16.13.2 or later, download the Source Code, extract the files in a folder and open a console, cd to the folder and run `npm install`. This command will take care of installing all the dependencies needed for the project.

## Setup

After installing every dependency needed, there are a few things to do next, create a file named *config.json* in the **src** folder, this file needs your Bot Token (You need to set up an application in the Discord Dev Portal, create a Bot and then copy the Bot Token for this) and the apps (currently limited to games only) that will get someone banned after playing them for 30 minutes. The file should look like this:

`{
    "BotToken": "your bot's token here"
    "VideoGames": [
        "the games here, you should add a **,** after every game, note that this works by getting a match and not being the exact same app name, so if you type in 'touhou' for example, it will ban whoever is playing any touhou game (probably)"
    ]
}`

## Running

Your bot is finally ready! All you have to do now is run a couple more commands and you should be done.

`npx tsc` (Compile the TypeScript code and set it up in the dist/ folder as Javascript)

`node dist/index` (Finally, running the bot)

And with this you should be done! Please note that I'm a beginner at Node.JS so this code is probably not the most efficient, however I'll keep on learning!

I was originally planning to make this as a little joke in a pretty small server but I decided to make it as big as possible with my current knowledge (and also no knowledge at all in discord.js). If I had a credit card I'd set it up in Firebase but that is not the case sadly, so feel free to use this little (and time consuming) project as you please!