import { ChatInputCommandInteraction, Client, InteractionContextType, MessageFlags, SlashCommandBuilder } from "discord.js";
import { SlashCommandData } from "../types/AppTypes.js";

const commandBuilder = new SlashCommandBuilder();
commandBuilder
    .setName("fetch-user")
    .setDescription("Returns an AirshipUser embed.")
    .setContexts(InteractionContextType.Guild)
    .addStringOption((option) => option
        .setName("user_id")
        .setDescription("The target UserId to lookup.")
        .setRequired(true)
    );

const command: SlashCommandData = {
    name: "fetch-user",
    builder: commandBuilder,
    execute: async function(app: Client, interaction: ChatInputCommandInteraction) {
        await interaction.reply({
            content: "`Not implemented`",
            flags: MessageFlags.Ephemeral
        });
    }
};

export default command;