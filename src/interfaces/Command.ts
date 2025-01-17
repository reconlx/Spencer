import { Message, PermissionResolvable } from 'discord.js';
import { Spencer } from '../client/Client';

export interface RunFunction {
	(client: Spencer, message: Message, args: string[]): Promise<unknown>;
}
export interface Command {
	name: string;
	run: RunFunction;
	aliases?: string[];
	description: string;
	cooldown?: number;
	category: string;
	userPermissions?: PermissionResolvable | PermissionResolvable[];
	ownerOnly?: boolean;
	usage?: string;
}
