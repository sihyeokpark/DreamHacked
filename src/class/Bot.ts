import { Client, Collection, SlashCommandBuilder } from 'discord.js'

import Command from './Command'
import { token } from '../settings.json'

export default class Bot {
  private commands: Command[] = []

  constructor(public readonly client: Client) {
    this.client.login(token)

    this.client.commands = new Collection()

    this.client.on('ready', () => {
      console.log(`${this.client.user!.username} ready!`)
    })

    
  }

  private initCommand() {
    //this.commands.push(new Command(''))
  }
}