type Nullable<T> = T | null;
import * as Types from "./typings";
const styles = {
    "Primary": 1,
    "Secondary": 2,
    "Success": 3,
    "Danger": 4,
    "Link": 5
};
export default class TextInputBuilder {
    data;
    constructor(button?: Nullable<Types.Button>){
        this.data = button ?? {type: 2} as Types.Button;
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
        this.data.style = styles[style as keyof typeof styles];
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
