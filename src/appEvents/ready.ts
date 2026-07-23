import { Client } from "discord.js";
import { AppEventHandler } from "../types/AppEventTypes.js";

const appEvent: AppEventHandler = {
    name: "clientReady",
    execute: async function(app: Client) {
        console.clear();
        console.log(`Bot is online!`);
    }
};

export default appEvent;