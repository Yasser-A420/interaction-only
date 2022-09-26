type Nullable<T> = T | null;
interface Modal {
    Title: string;
    custom_id: string;
    components: Array<any>;
}
export type { Modal };
export default class ModalBuilder {
    data;
    constructor(modal?: Nullable<Modal>){
        this.data = modal ?? {title: "", custom_id: "", components: []} as Modal;
    }
    setTitle(title: string){
        this.data.Title = title;
        return this;
    }
    setCustomId(id: string){
        this.data.custom_id = id;
        return this;
    }
    addComponents(fields){
        this.data.components.push(...fields);
        return this;
    }
    toJSON(){
        return this.data;
    }
}
