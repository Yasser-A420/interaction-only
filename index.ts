import Interaction from "./utils/Interaction";
import express, { Request as Req, Response as Res } from "express";
import * as config from "./config.json" assert {type: "json"};
import {readdirSync} from "node:fs";
import {
  InteractionType,
  InteractionResponseType,
  verifyKey
} from "discord-interactions";
class client {
  webserver: any;
  commands: Map<any, any>;
  constructor() {
    this.webserver = express();
    this.commands = new Map();
  }
  async initialize(clientKey: string): Promise<any> {
    this.webserver.use(express.json({ verify: (req: Req, res: Res, buf: Buffer) => {
      const signature = req.get('X-Signature-Ed25519');
      if(!signature) return;
      const timestamp = req.get('X-Signature-Timestamp');
      if(!timestamp) return;
      const isValidRequest = verifyKey(buf, signature, timestamp, clientKey);
      if (!isValidRequest) {
        res.status(401).send('Bad request signature');
      }
    }}));
    const commandFiles = readdirSync('./commands').filter((file: string) => file.endsWith('.ts'));
    commandFiles.forEach(async (file: string)=>{
        const command = (await import(`./commands/${file}`)).default;
        this.commands.set(command.data.name, command);
    });
    const listener = this.webserver.listen(5600, async () => {
      console.log(`Listening at port: ${listener.address().port}`)
    });
  }
}
const app = new client();
app.initialize(config.PUBLIC_KEY);
app.webserver.post("*", async function (req: Req, res: Res) {
  const { type, data } = req.body;
  console.log(req.body)
  if (type === InteractionType.PING) {
    return res.send({ type: InteractionResponseType.PONG });
  } else if (type === InteractionType.APPLICATION_COMMAND) {
    const interaction = new Interaction(req, res);
    const cmd = app.commands.get(data.name);
    if(!cmd) return;
    cmd.execute(interaction);
  }
});
