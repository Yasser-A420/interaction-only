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
    options: InteractionOptions;
    subcommands: string | null;
    user: User;
    member: Member | null;
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
        this.subcommands = null;
        this.member = this.req.body.member ?? null;
        this.user = this.req.body?.member?.user ?? this.req.body.user;
        this.token = this.req.body.token;
        this.type = this.req.body.type;
        this.locale = this.req.body.locale ?? null;
        this.channelId = this.req.body.channel_id;
        this.guildId = this.req.body.guild_id;
        this.customId = this.req.body.data.custom_id ?? null;
        this.commandName = this.req.body.data.name ?? null;
        this.options = new InteractionOptions(this);
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
class InteractionOptions {
    subcommand?: string;
    group?: string;
    _options: Map<string, any>;
    constructor(interactionData: Interaction){
        this._options = new Map();
        this.subcommand;
        this.group;
        if(interactionData.type === 2){
            interactionData.req.body.data.options?.forEach((option: any)=>{
                if(option.type === 2){
                    this.group = option.name;
                    interactionData.req.body.data.options[0].options.forEach((subOption: any) => {
                        if(subOption.type === 1){
                            this.subcommand = subOption.name;
                            interactionData.req.body.data.options[0].options[0].options.forEach((subSubOption: any) => {
                                this._options.set(subSubOption.name, subSubOption.value)
                            });
                        }
                    })
                } else if(option.type === 1) {
                    this.subcommand = option.name;
                    interactionData.req.body.data.options[0].options?.forEach((subSubOption: any) => {
                        this._options.set(subSubOption.name, subSubOption.value)
                    });
                } else {
                    interactionData.req.body.data.options?.forEach((subSubOption: any) => {
                        this._options.set(subSubOption.name, subSubOption.value)
                    });
                }
            })
         } else if(interactionData.type === 5){
         } else if(interactionData.type === 3){
         }
    }
    get(name: string): any{
        return this._options.get(name);
    }
}