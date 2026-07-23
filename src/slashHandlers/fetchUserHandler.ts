import { ChatInputCommandInteraction, Client } from "discord.js";
import { SlashCommandHandler } from "../types/AppTypes.js";

const command: SlashCommandHandler = {
    name: "fetch-user",
    execute: async function(app: Client, interaction: ChatInputCommandInteraction) {
        await interaction.reply("`Not implemented`");
    }
};

export default command;