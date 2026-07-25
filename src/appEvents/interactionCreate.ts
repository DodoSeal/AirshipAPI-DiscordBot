import { ChatInputCommandInteraction, Client, InteractionType, Interaction } from "discord.js";
import { AppEventHandler, SlashCommandData } from "../types/AppTypes.js";

import fs from "fs";
import path from "path";

const appEvent: AppEventHandler = {
    name: "interactionCreate",
    execute: async function(app: Client, interaction: Interaction) {
        if (interaction.type !== InteractionType.ApplicationCommand) return;

        const commandsDir = fs.readdirSync(path.join(import.meta.dirname, "../slashCommands"), { encoding: "utf-8" });

        for (let fileName of commandsDir) {
            if (fileName.endsWith(".js") === false) continue;
            const commandHandler: SlashCommandData = ((await import(path.join(import.meta.dirname, `../slashCommands/${fileName}`))).default);

            if (commandHandler.name === interaction.commandName) {
                commandHandler.execute(app, interaction as ChatInputCommandInteraction);
            };
        };
    }
};

export default appEvent;