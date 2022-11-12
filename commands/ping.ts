import Interaction from "../utils/Interaction";
import express from "express";
import EmbedBuilder from "../utils/EmbedBuilder";
export default {
    data: {
        name: "votes"
    },
    async execute(interaction: Interaction, app: typeof express): Promise<void>{
        const {InteractionResponseType} = await import("discord-interactions");
        interaction.reply(InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE, {embeds: [new EmbedBuilder().setTitle("Pinging...").toJSON()]});
    }
} as any;
