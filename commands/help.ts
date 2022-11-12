import * as Utilites from "../utils/index";
import express from "express";
export default {
    data: {
        name: "help"
    },
    async execute(interaction: Utilites.Interaction, app: typeof express): Promise<void>{
        const {InteractionResponseType} = await import("discord-interactions");
        interaction.reply(InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE, {components: [{"type": 1, "components": [{"type": 6, "custom_id": "role-menu"}]}]});
    }
} as any;
