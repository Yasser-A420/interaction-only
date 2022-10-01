type Nullable<T> = T | null;
import * as Types from "./typings";
export default class ModalBuilder {
    data;
    constructor(modal?: Nullable<Types.Modal>){
        this.data = modal ?? {} as Types.Modal;
    }
    setTitle(title: string){
        this.data.Title = title;
        return this;
    }
    setCustomId(id: string){
        this.data.custom_id = id;
        return this;
    }
    addComponents(fields: Array<any>){
        if(this.data.components){
            this.data.components.push(...fields);
        } else {
            this.data.components = [];
            this.data.components.push(...fields);
        }
        return this;
    }
    toJSON(){
        return this.data;
    }
}
