import { ChatInputCommandInteraction, Client, InteractionType, Interaction } from "discord.js";
import { AppEventHandler, SlashCommandHandler } from "../types/AppEventTypes.js";

import fs from "fs";
import path from "path";

const appEvent: AppEventHandler = {
    name: "interactionCreate",
    execute: async function(app: Client, interaction: Interaction) {
        if (interaction.type !== InteractionType.ApplicationCommand) return;

        const slashHandlersDir = fs.readdirSync(path.join(import.meta.dirname, "../slashHandlers"), { encoding: "utf-8" });

        for (let fileName of slashHandlersDir) {
            if (fileName.endsWith(".js") === false) continue;
            const commandHandler: SlashCommandHandler = ((await import(path.join(import.meta.dirname, `../slashHandlers/${fileName}`))).default);
            
            if (commandHandler.name === interaction.commandName) {
                commandHandler.execute(app, interaction as ChatInputCommandInteraction);
            };
        };
    }
};

export default appEvent;