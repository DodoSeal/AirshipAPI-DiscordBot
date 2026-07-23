import { Client, ClientEvents } from "discord.js";

export interface AppEventHandler {
    name: keyof ClientEvents,
    execute(app: Client, ...args: any[]): Promise<void>
};

// WIP
export interface InteractionEventHandler {
    name: string,
    execute(app: Client): Promise<void>
};