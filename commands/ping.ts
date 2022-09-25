import Interaction from "../interaction";
import express from "express";
import EmbedBuilder from "../utils/EmbedBuilder";
export default {
    data: {
        name: "ping"
    },
    async execute(interaction: Interaction, app: typeof express): Promise<void>{
        const {InteractionResponseType} = await import("discord-interactions")
        interaction.reply(InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE, {embeds: [new EmbedBuilder().setTitle("Pinging...").toJSON()]});
    }
} as any;
