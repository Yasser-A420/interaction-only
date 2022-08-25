const express = require("express");
const Interaction = require("./interaction.ts");
const { Request: Req, Response: Res } = require("express");
const {readdirSync} = require("node:fs");
const {
  InteractionType,
  InteractionResponseType,
  verifyKey
} = require("discord-interactions");
class client {
  webserver: typeof express;
  commands: Map<any, any>;
  constructor() {
    this.webserver = express();
    this.commands = new Map();
  }
  async initialize(clientKey: string) {
    this.webserver.use(express.json({ verify: (req: typeof Req, res: typeof Res, buf: string) => {
      const signature = req.get('X-Signature-Ed25519');
      const timestamp = req.get('X-Signature-Timestamp');
      const isValidRequest = verifyKey(buf, signature, timestamp, clientKey);
      if (!isValidRequest) {
        res.status(401).send('Bad request signature');
      }
    }}));
    const commandFiles = readdirSync('./commands').filter((file: string) => file.endsWith('.ts'));
    commandFiles.forEach(async (file: string)=>{
        const command = require(`./commands/${file}`);
        this.commands.set(command.data.name, command);
    });
    const listener = this.webserver.listen(5600, async () => {
      console.log(`Listening at port: ${listener.address().port}`)
    });
  }
}
const app = new client();
app.initialize("ee33d9b6c5d086f2be80ce839312dcaadbdc33a3f120de02d349cba96c8dcf8a");
app.webserver.post("*", async function (req: typeof Req, res: typeof Res) {
  const { type, data: { name } } = req.body;
  if (type === InteractionType.PING) {
    return res.send({ type: InteractionResponseType.PONG });
  } else if (type === InteractionType.APPLICATION_COMMAND) {
    const interaction = new Interaction(req, res);
    const cmd = app.commands.get(name);
    if(!cmd) return;
    cmd.execute(interaction);
  }
});