import { Routes, REST, SlashCommandBuilder } from "discord.js";

import fs from "fs";
import path from "path";

import dotenv from "dotenv";
import { SlashCommandData } from "./types/AppTypes.js";
dotenv.config({ quiet: true });

const clientInfo = {
    token: process.env.TOKEN!,
    clientSecret: process.env.CLIENT_SECRET!,
    clientId: process.env.CLIENT_ID!,
    guildId: process.env.GUILD_ID!
};

const rest = new REST({ version: "10" }).setToken(clientInfo.token);

const slashCommandDir = fs.readdirSync(path.join(import.meta.dirname, "./slashCommands"), { encoding: "utf-8" });
const slashCommands: SlashCommandBuilder[] = [];

for (let fileName of slashCommandDir) {
    if (fileName.endsWith(".js") === false) continue;
    const commandHandler: SlashCommandData = ((await import(path.join(import.meta.dirname, `./slashCommands/${fileName}`))).default);
    slashCommands.push(commandHandler.builder);
};

await rest.put(Routes.applicationGuildCommands(clientInfo.clientId, clientInfo.guildId), { body: slashCommands }).then(() => {
    console.log(`Registered Slash Commands!`);
}).catch((err) => {
    console.error(err);
});