import { Request as Req, Response as Res } from "express";
export default class Interaction {
    req: Req;
    res: Res;
    options: Array<any>;
    constructor(req: Req, res: Res) {
        this.req = req;
        this.res = res;
        this.options = this.req.body.options;
    }
    get(name: string): any{ 
        return this.options.find(x=>x.name===name);
    }
    async reply(type: number, data: object): Promise<any> {
        this.res.send({
            type: type,
            data: data
        });
        return;
    }
    async editReply(token: string, data: object): Promise<any> {
        return;
    }
    async followUp(token: string, data: object): Promise<any>{
        return;
    }
    async update(token: string, data: object): Promise<any>{
        return;
    }
    async deferReply(token: string, data: object): Promise<any>{
        return;
    }
    async deferUpdate(token: string, data: object): Promise<any>{
        return;
    }
};