import { Routes, REST, SlashCommandBuilder } from "discord.js";

import dotenv from "dotenv";
dotenv.config({ quiet: true });

const clientInfo = {
    token: process.env.TOKEN!,
    clientSecret: process.env.CLIENT_SECRET!,
    clientId: process.env.CLIENT_ID!,
    guildId: process.env.GUILD_ID!
};

const rest = new REST({ version: "10" }).setToken(clientInfo.token);

await rest.put(Routes.applicationGuildCommands(clientInfo.clientId, clientInfo.guildId), { body: [] }).then(() => {
    console.log(`Cleared Slash Commands!`);
}).catch((err) => {
    console.error(err);
});