module.exports = {
    data: {
        name: "help"
    },
    execute: async (interaction: typeof Interaction, app: typeof express) => {
        const {InteractionResponseType} = require("discord-interactions")
        interaction.reply(InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE, {content: "Hey there"})
    }
} as any;
