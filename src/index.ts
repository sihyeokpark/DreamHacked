import { Client, GatewayIntentBits } from 'discord.js'

import Bot from './class/Bot'

console.log('dd')

const bot = new Bot(new Client({ intents: [
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
  GatewayIntentBits.DirectMessages
]}))
