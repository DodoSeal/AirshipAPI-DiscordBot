import { Client, Interaction, InteractionType } from "discord.js";
import { AppEventHandler } from "../types/AppEventTypes.js";

const appEvent: AppEventHandler = {
    name: "interactionCreate",
    execute: async function(app: Client, interaction: Interaction) {
        if (interaction.type !== InteractionType.ApplicationCommand) return;

        await interaction.reply({
            content: "Pong!"
        });
    }
};

export default appEvent;