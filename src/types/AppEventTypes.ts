import { ChatInputCommandInteraction, Client, ClientEvents } from "discord.js";

export interface AppEventHandler {
    name: keyof ClientEvents,
    execute(app: Client, ...args: any[]): Promise<void>
};

export interface SlashCommandHandler {
    name: string,
    execute(app: Client, interaction: ChatInputCommandInteraction): Promise<void>
};