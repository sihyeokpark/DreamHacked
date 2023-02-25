import { SlashCommandBuilder } from 'discord.js'

import Command from '../class/Command'

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction: any) {
		await interaction.reply('Pong!');
	},
};