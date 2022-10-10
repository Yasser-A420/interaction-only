import Interaction from "./Interaction";
import * as Types from "./typings";
export default class Collector {
    interaction: Interaction
    constructor(interaction: Interaction){
        this.interaction = interaction;
    }
}