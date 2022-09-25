type Nullable<T> = T | null;
interface Embed {
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
export type { Embed };
export default class EmbedBuilder {
    embed;
    constructor(embed?: Nullable<Embed>){
        this.embed = embed ?? {} as Embed;
    }
    setTitle(title: string){
        this.embed.title = title;
        return this;
    }
    setDescription(description: string){
        this.embed.description = description;
        return this;
    }
    setColor(color: string){
        this.embed.color = color;
        return this;
    }
    setFooter(footer: object){
        this.embed.footer = footer;
        return this;
    }
    setAuthor(author: object){
        this.embed.author = author;
        return this;
    }
    setUrl(url: string){
        this.embed.url = url;
        return this;
    }
    setImage(image: string){
        this.embed.image = {url: image};
        return this;
    }
    setThumbnail(image: string){
        this.embed.thumbnail= {url: image};
        return this;
    }
    addFields(data: object){
        if(this.embed.fields){
            this.embed.fields.push(data);
        } else {
            this.embed.fields = [];
            this.embed.fields.push(data);
        }
        return this;
    }
    toJSON(){
        return this.embed;
    }
}