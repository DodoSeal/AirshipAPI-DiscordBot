import { ChatInputCommandInteraction, Client } from "discord.js";
import { SlashCommandHandler } from "../types/AppTypes.js";

const command: SlashCommandHandler = {
    name: "ping",
    execute: async function(app: Client, interaction: ChatInputCommandInteraction) {
        await interaction.reply("Pong!");
    }
};

export default command;