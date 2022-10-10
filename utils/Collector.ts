import { EventEmitter } from "node:events";
import Interaction from "./Interaction";
import * as Types from "./typings";
export default class Collector extends EventEmitter {
    interaction: Interaction
    constructor(interaction: Interaction){
        this.interaction = interaction;
    }
}
