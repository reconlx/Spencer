import { RunFunction } from '../../interfaces/Command';
import { Util } from 'discord.js';

export const run: RunFunction = async (client, message, args) => {
	if (!args.length)
		return message.channel.send(
			client.embed(
				{
					description: 'Is there a point of asking a magic 8ball no question?',
				},
				message
			)
		);
	const choices: string[] = [
		'Yes',
		'No',
		'Absoloutely',
		'Absoloutely not',
		'Try again later',
		'Maybe',
		"I don't care for it",
	];
	return message.channel.send(
		client.embed(
			{
				description: `
    You > **${Util.escapeMarkdown(args.join(' '))}**
    Me > **${
			choices[Math.floor(Math.random() * choices.length)]
		}**\n\n⚠ Caution! IQ is less then 5! ⚠
    `,
			},
			message
		)
	);
};
export const name: string = '8ball';
export const category: string = 'fun';
export const usage: string = '<...message>';
export const description: string = 'Get a magic 8ball to answer your question';
