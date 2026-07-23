// Discord API
import * as Discord from "discord.js";
import { Client, GatewayIntentBits } from "discord.js";

// Filesystem Management
import fs from "fs";
import path from "path";

// Environment Setup
import dotenv from "dotenv";
import { AppEventHandler } from "./types/AppTypes.js";
dotenv.config({ quiet: true });

const app = new Client({
    intents: [
        GatewayIntentBits.GuildMembers
    ]
});

// Fetch AppEvent handlers
const appEventDir = fs.readdirSync(path.join(import.meta.dirname, "./appEvents"), { encoding: "utf-8" });

for (let fileName of appEventDir) {
    if (fileName.endsWith(`.js`) === false) continue;
    const appEventHandler: AppEventHandler = ((await import(path.join(import.meta.dirname, `./appEvents/${fileName}`))).default);

    app.on(appEventHandler.name, (...args) => {
        appEventHandler.execute(app, ...args);
    });
};

app.login(process.env.TOKEN!);