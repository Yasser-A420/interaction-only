type Nullable<T> = T | null;
interface Modal {
    Title?: string;
    custom_id?: string;
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
    constructor(modal?: Nullable<Modal>){
        this.data = modal ?? {} as Modal;
    }
    setTitle(title: string){
        this.data.Title = title;
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
    toJSON(){
        return this.data;
    }
}
