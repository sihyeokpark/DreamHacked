const { SlashCommandBuilder } = require('@discordjs/builders')
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')
const { clientId, guildId, token } = require('./settings.json')

const commands = [
	new SlashCommandBuilder().setName('problem').setDescription('드림핵 문제를 검색합니다.')
].map(command => command.toJSON())

const rest = new REST({ version: '9' }).setToken(token)

export default function deploy_commands() {
  rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error)
}