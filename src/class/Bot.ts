import { Client } from 'discord.js'

export default class Bot {
  constructor(public readonly client: Client) {
    this.client.login(process.env.TOKEN)

    this.client.on('ready', () => {
      console.log(`${this.client.user!.username} ready!`)
    })

    this.client.on('messageCreate', (msg) => {
      if (msg.content == 'hello') msg.reply('efw')
    })
  }
}