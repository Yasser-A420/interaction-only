const express = require("express");
const Interaction = require("./interaction.js");
const {
  InteractionType,
  InteractionResponseType,
  verifyKey
} = require("discord-interactions");
class client {
  constructor() {
    this.webserver = express();
    this.commands = new Map();
  }
  async initialize(clientKey) {
    this.webserver.use(express.json({ verify: (req, res, buf) => {
      const signature = req.get('X-Signature-Ed25519');
      const timestamp = req.get('X-Signature-Timestamp');
      const isValidRequest = verifyKey(buf, signature, timestamp, clientKey);
      if (!isValidRequest) {
        res.status(401).send('Bad request signature');
      }
    }}));
    const listener = this.webserver.listen(5600, async () => {
      console.log(`Listening at port: ${listener.address().port}`)
    });
  }
}
const app = new client();
app.initialize("ee33d9b6c5d086f2be80ce839312dcaadbdc33a3f120de02d349cba96c8dcf8a");
app.webserver.post("*", async function (req, res) {
  console.log(req.body)
  const { type } = req.body;
  if (type === InteractionType.PING) {
    return res.send({ type: InteractionResponseType.PONG });
  } else if (type === InteractionType.APPLICATION_COMMAND) {
    const interaction = new Interaction(req, res);
    interaction.reply(InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,  {content: "Hi this is an interaction only bot"});
  }
});