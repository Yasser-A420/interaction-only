const Interaction = require("./interaction");
import express from "express";
export default {
    data: {
        name: "help"
    },
    async execute(interaction: typeof Interaction, app: typeof express): Promise<void>{
        const {InteractionResponseType} = require("discord-interactions")
        interaction.reply(InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE, {content: "Hey there"});
    }
} as any;
