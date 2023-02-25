import { Client, GatewayIntentBits } from 'discord.js'

import MyClient from './class/MyClient'
import Bot from './class/Bot'

console.log('dd')

const bot = new Bot(new MyClient({ intents: [
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
  GatewayIntentBits.DirectMessages
]}))
