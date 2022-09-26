type Nullable<T> = T | null;
interface Button {
    label?: string;
    custom_id?: string;
    url?: string;
    disabled?: Boolean
    type: Number;
    style?: Number
}
export type { Button };
export default class ButtonBuilder {
    data;
    constructor(button?: Nullable<Button>){
        this.data = button ?? {} as Button;
        this.data.type = 2;
    }
    setLabel(title: string){
        this.data.label = title;
        return this;
    }
    setCustomId(id: string){
        this.data.custom_id = id;
        return this;
    }
    setStyle(style: string){
        this.data.style = style === "Primary" ? 1 : 2;
        return this;
    }
    setUrl(url: string){
        this.data.url = url;
        return this;
    }
    setDisabled(disabled: Boolean){
        this.data.disabled = disabled;
        return this;
    }
    toJSON(){
        return this.data;
    }
}
