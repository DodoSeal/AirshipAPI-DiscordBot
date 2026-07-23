import { ChatInputCommandInteraction, Client, ClientEvents, SlashCommandBuilder } from "discord.js";

export interface AppEventHandler {
    name: keyof ClientEvents,
    execute(app: Client, ...args: any[]): Promise<void>
};

export interface SlashCommandData {
    name: string,
    builder: SlashCommandBuilder
};

export interface SlashCommandHandler {
    name: string,
    execute(app: Client, interaction: ChatInputCommandInteraction): Promise<void>
};