import { InteractionResponseFlags } from "discord-interactions";
import { Request as Req, Response as Res } from "express";
import client from "../index";
import {Embed, User, Member} from "./typings";
type Nullable<T> = T | null;
interface ReplyOptions {
    Title?: string;
    custom_id?: string;
    embeds?: Array<Embed>;
    ephemeral?: Boolean;
    content?: String;
    components?: Array<any>;
    flags?: any;
}
export default class Interaction {
    req: Req;
    res: Res;
    client: client;
    options: Map<string, string>;
    user: User;
    member: Member;
    token: string;
    type: number;
    locale: Nullable<string>;
    channelId: string;
    guildId: string | null;
    customId: string | null;
    commandName: string | null;
    constructor(req: Req, res: Res, client: client) {
        this.req = req;
        this.res = res;
        this.client = client;
        this.options = new Map();
        req.body.data.options?.map((x: any) => this.options.set(x.name, x.value));
        this.member = this.req.body.member ?? {};
        this.user = this.req.body?.member?.user ?? this.req.body.user;
        this.token = this.req.body.token;
        this.type = this.req.body.type;
        this.locale = this.req.body.locale ?? null;
        this.channelId = this.req.body.channel_id;
        this.guildId = this.req.body.guild_id;
        this.customId = this.req.body.data.custom_id ?? null;
        this.commandName = this.req.body.data.name ?? null;
    }
    get(name: string): any{ 
        return this.options.get(name);
    }
    async reply(type: number, data: ReplyOptions): Promise<any> {
        data.flags = data.ephemeral ? InteractionResponseFlags.EPHEMERAL : null
        this.res.send({
            type: type,
            data: data
        });
        return;
    }
    async editReply(data: ReplyOptions): Promise<any> {
        return;
    }
    async followUp(data: ReplyOptions): Promise<any>{
        return;
    }
    async update(data: ReplyOptions): Promise<any>{
        return;
    }
};