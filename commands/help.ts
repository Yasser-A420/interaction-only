import * as Utilites from "../utils/index";
import express from "express";
export default {
    data: {
        name: "help"
    },
    async execute(interaction: Utilites.Interaction, app: typeof express): Promise<void>{
        const {InteractionResponseType} = await import("discord-interactions")
        interaction.reply(9, new Utilites.ModalBuilder().setTitle("Hi").setCustomId("modal").addComponents([{
            "type": 1,
            "components": [{
              "type": 4,
              "custom_id": "name",
              "label": "Name",
              "style": 1,
              "min_length": 1,
              "max_length": 4000,
              "placeholder": "John",
              "required": true
            }]}]).toJSON());
    }
} as any;
