import { ChatInputCommandInteraction, Client, ClientEvents, SlashCommandBuilder, SlashCommandOptionsOnlyBuilder } from "discord.js";

export interface AppEventHandler {
    name: keyof ClientEvents,
    execute(app: Client, ...args: any[]): Promise<void>
};

export interface SlashCommandData {
    name: string,
    builder: SlashCommandBuilder,
    execute(app: Client, interaction: ChatInputCommandInteraction): Promise<void>
};