import * as Utilites from "../utils/index";
import express from "express";
export default {
    data: {
        name: "help"
    },
    async execute(interaction: Utilites.Interaction, app: typeof express): Promise<void>{
        const {InteractionResponseType} = await import("discord-interactions")
        interaction.reply(InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE, {embeds: [new Utilites.EmbedBuilder().setTitle("Hi!").toJSON()], components: [{type: 1, components: [new Utilites.ButtonBuilder().setCustomId("hi").setLabel("Hello").setStyle("Success").toJSON()]}]});
    }
} as any;
