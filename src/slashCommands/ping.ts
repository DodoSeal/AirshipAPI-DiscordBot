import { InteractionContextType, SlashCommandBuilder } from "discord.js";

const command = {
    name: "ping",
    builder: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Ping Pong!")
        .setContexts(InteractionContextType.Guild)
};

export default command;