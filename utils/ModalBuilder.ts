type Nullable<T> = T | null;
interface Modal {
    title?: string;
    description?: string;
    color?: string;
    author?: object;
    footer?: object;
    url?: string;
    fields?: Array<object>;
    image?: {url: string};
    thumbnail?: {url: string};
}
export type { Modal };
export default class ModalBuilder {
    data;
    constructor(embed?: Nullable<Modal>){
        this.data = embed ?? {} as Modal;
    }
    setTitle(title: string){
        this.data.title = title;
        return this;
    }
    setDescription(description: string){
        this.data.description = description;
        return this;
    }
    setColor(color: string){
        this.data.color = color;
        return this;
    }                   
    setFooter(footer: object){
        this.data.footer = footer;
        return this;
    }
    setAuthor(author: object){
        this.data.author = author;
        return this;
    }
    setUrl(url: string){
        this.data.url = url;
        return this;
    }
    setImage(image: string){
        this.data.image = {url: image};
        return this;
    }
    setThumbnail(image: string){
        this.data.thumbnail= {url: image};
        return this;
    }
    addFields(data: object){
        if(this.data.fields){
            this.data.fields.push(data);
        } else {
            this.data.fields = [];
            this.data.fields.push(data);
        }
        return this;
    }
    toJSON(){
        return this.data;
    }
}