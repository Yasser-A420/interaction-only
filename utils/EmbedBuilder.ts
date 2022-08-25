type Nullable<T> = T | null;
interface Embed {
    title: string,
    description: string,
    color: string,
    author: object,
    footer: object,
    url: string,
    fields: Array<object>,
    image: {url: string},
    thumbnail: {url: string},
}
module.exports = class EmbedBuilder {
    embed;
    constructor(embed: Nullable<Embed>){
        this.embed = embed ?? {} as Embed;
    }
    setTitle(title: string){
        this.embed.title = title;
    }
    setDescription(description: string){
        this.embed.description = description;
    }
    setColor(color: string){
        this.embed.color = color;
    }
    setFooter(footer: object){
        this.embed.footer = footer;
    }
    setAuthor(author: object){
        this.embed.author = author;
    }
    setUrl(url: string){
        this.embed.url = url;
    }
    setImage(image: string){
        this.embed.image.url = image;
    }
    setThumbnail(image: string){
        this.embed.thumbnail.url = image;
    }
    addFields(data: object){
        this.embed.fields.push(data);
    }
}