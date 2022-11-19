import * as Utilites from "../utils/index";
import express from "express";
import Collector from "../utils/Collector";
export default {
    data: {
        name: "check"
    },
    async execute(interaction: Utilites.Interaction, app: typeof express): Promise<void>{
        const {InteractionResponseType} = await import("discord-interactions");
        interaction.reply(InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE, {components: [{"type": 1, "components": [{"type": 6, "custom_id": "role-menu"}]}]});
        const collector = new Collector(interaction, {filter: (i: Utilites.Interaction) => i.user.id === interaction.user.id && i.customId === "role-menu"});
        collector.on("collect", async (interaction: Utilites.Interaction) => {
            interaction.reply(4, {content: "Hey there! This is a collector test!"});
        });
        collector.on("end", async (reason?: string) => {
            console.log(reason)
        })
    }
} as any;
