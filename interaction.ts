module.exports = class Interaction {
    req: typeof Req;
    res: typeof Res;
    options: Array<any>;
    constructor(req: typeof Req, res: typeof Res) {
        this.req = req;
        this.res = res;
        this.options = this.req.body.options;
    }
    async get(name: string){
        return this.options.find(x=>x.name===name);
    }
    async reply(type: number, data: object) {
        return this.res.send({
            type: type,
            data: data
        });
    }
    async editReply(token: string, data: object){

    }
    async followUp(token: string, data: object){

    }
    async update(token: string, data: object){
        
    }
    async deferReply(token: string, data: object){
        
    }
    async deferUpdate(token: string, data: object){
        
    }
};