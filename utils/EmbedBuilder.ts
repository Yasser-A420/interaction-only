type Nullable<T> = T | null;
import * as Types from "./typings";
export default class EmbedBuilder {
    data;
    constructor(embed?: Nullable<Types.Embed>){
        this.data = embed ?? {} as Types.Embed;
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
    addFields(...data: Array<object>){
        if(this.data.fields){
            this.data.fields.push(...data);
        } else {
            this.data.fields = [];
            this.data.fields.push(...data);
        }
        return this;
    }
    toJSON(){
        return this.data;
    }
}