import { InteractionResponseFlags } from "discord-interactions";
import { Request as Req, Response as Res } from "express";
import {Embed} from "./EmbedBuilder";
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
interface User {
    avatar: string;
    id: string;
    discriminator: string;
    avatar_decoration: Nullable<string>;
    username: string;
}
interface Member {
    avatar: Nullable<string>;
    communication_disabled_until: Nullable<Date>;
    deaf: boolean;
    flags: number;
    is_pending: Boolean;
    joined_at: Date;
    mute: boolean;
    nick: Nullable<string>;
    pending: boolean;
    permissions: string;
    premium_since: Date;
    roles: Array<string>;
    user: User;
}
export default class Interaction {
    req: Req;
    res: Res;
    options: Array<any>;
    user: User;
    member: Member;
    token: string;
    type: number;
    locale: Nullable<string>;
    channelId: string;
    constructor(req: Req, res: Res) {
        this.req = req;
        this.res = res;
        this.options = this.req.body.options;
        this.member = this.req.body.member ?? {};
        this.user = this.req.body?.member?.user ?? this.req.body.user;
        this.token = req.body.token;
        this.type = this.req.body.type;
        this.locale = req.body.locale ?? null;
        this.channelId = req.body.channel_id;
    }
    get(name: string): any{ 
        return this.options.find(x=>x.name===name);
    }
    async reply(type: number, data: ReplyOptions): Promise<any> {
        data.flags = data.ephemeral ? InteractionResponseFlags.EPHEMERAL : null
        this.res.send({
            type: type,
            data: data
        });
        return;
    }
    async editReply(token: string, data: ReplyOptions): Promise<any> {
        return;
    }
    async followUp(token: string, data: ReplyOptions): Promise<any>{
        return;
    }
    async update(token: string, data: ReplyOptions): Promise<any>{
        return;
    }
};