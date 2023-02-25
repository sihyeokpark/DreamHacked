import { Client, Collection } from 'discord.js'

import Command from './Command'
import MyClient from './MyClient'

export default class Bot {
  private commands: Command[] = []

  constructor(public readonly client: MyClient) {
    this.client.login(process.env.TOKEN)

    this.client.commands = 10

    this.client.on('ready', () => {
      console.log(`${this.client.user!.username} ready!`)
    })

    this.client.on('messageCreate', (msg) => {
      if (msg.content == 'hello') msg.reply('efw')
    })
  }

  private initCommand() {
    this.commands.push(new Command(''))
  }
}