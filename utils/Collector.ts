import Client from "../index";
import { EventEmitter } from "node:events";
import Interaction from "./Interaction";
import * as Types from "./typings";
interface CollectorOptions {
    filter?: any;
    max?: number;
    timeout?: number;
}
export default class Collector extends EventEmitter {
    interaction: Interaction;
    collected: number;
    collector: Client;
    timer: NodeJS.Timer | undefined;
    filter: Function;
    options: CollectorOptions;
    constructor(interaction: Interaction, options?: CollectorOptions){
        super();
        this.interaction = interaction;
        this.collected = 0;
        this.options = options ?? {};
        this.filter = options?.filter ?? (() => true);
        this.collector = interaction.client.on("interaction", (value: Interaction) => {this.emit("collect", value); this.collected++; if(options?.max && this.collected === options?.max){this.end("max")}});
        this.timer = options?.timeout ? setTimeout(()=>{this.end("timeout")}, this.options.timeout) : undefined;
    }
    resetTimer(newTimeout?: number){
        clearTimeout(this.timer);
        this.timer = setTimeout(()=>{this.end("timeout")}, (newTimeout ?? this.options.timeout));
    }
    collection(...args: Array<Interaction>){
        const pass = this.filter(args[0]);
        if(!pass) return;
        this.emit("collect", args[0]);
        this.collected++; 
        if(this.collected && this.collected === this.options.max){
            this.end();
        }
    }
    end(reason?: string){
        this.interaction.client.removeListener("interaction", this.collection);
        clearTimeout(this.timer);
        this.emit("end", reason);
        return true;
    }
}
