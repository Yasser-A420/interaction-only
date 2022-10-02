import * as Utilites from "../utils/index";
export default {
    data: {
        name: "eval"
    },
    async execute(interaction: Utilites.Interaction): Promise<void> {
        if (!["709960501378940939"].includes(interaction.user.id)) return interaction.reply(4, { content: "You can't use this command!" });
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
    }
} as any;
