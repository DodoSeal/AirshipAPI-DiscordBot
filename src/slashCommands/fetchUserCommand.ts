import { InteractionContextType, SlashCommandBuilder } from "discord.js";

const command = {
    name: "fetch_user",
    builder: new SlashCommandBuilder()
        .setName("fetch-user")
        .setDescription("Returns an AirshipUser embed.")
        .setContexts(InteractionContextType.Guild)
        .addStringOption((option) => option
            .setName("user_id")
            .setDescription("The target UserId to lookup.")
            .setRequired(true)
        )
};

export default command;