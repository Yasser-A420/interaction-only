import * as Utilites from "../utils/index";
import express from "express";
export default {
    data: {
        name: "help"
    },
    async execute(interaction: Utilites.Interaction, app: typeof express): Promise<void> {
        if (![""].includes(interaction.user.id)) return interaction.reply(4, { content: "You can't use this command!" });
        const codetoeval = interaction.options.get("code") as string;
        console.log(`${interaction.user.username} used Eval they inputted ${codetoeval}`)
        try {
            const result = eval(codetoeval)
            const evaledcode = new Utilites.EmbedBuilder()
                .addFields({ name: "Input", value: `\`${codetoeval}\`` }, { name: 'Evaled Code', value: `\`${result}\`` })
            interaction.reply(4, { embeds: [evaledcode.toJSON()], ephemeral: false })
        } catch (err) {
            const codeerr = new Utilites.EmbedBuilder().addFields({ name: "Input", value: `\`${codetoeval}\`` }, { name: "Error", value: `\`${err}\`` })
            interaction.reply(4, { embeds: [codeerr.toJSON()], ephemeral: true })
            //-------------------------------------------------------------------------------------------------------------------------------------------
        }
        const { InteractionResponseType } = await import("discord-interactions")
        interaction.reply(InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE, { embeds: [new Utilites.EmbedBuilder().setTitle("Hi!").toJSON()], components: [{ type: 1, components: [new Utilites.ButtonBuilder().setCustomId("hi").setLabel("Hello").setStyle("Success").toJSON()] }] });
    }
} as any;
