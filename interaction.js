module.exports = class Interaction {
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }
    async reply(type, data) {
        return this.res.send({
            type: type,
            data: data
        });
    }
    async editReply(token, data){

    }
    async followUp(token, data){

    }
    async update(token, data){
        
    }
}