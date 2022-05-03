import { Content } from "./content";
import { Model } from "./model";


export class Closet {
    id: string;
    name: string;
    description: string;
    image: string;
    models: Model[];
    contents: Content[];

    public constructor( id: string,
        name: string,
        description: string,
        image: string,
        models: Model[],
        contents: Content[]) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.image = image;
            this.models = models;
            this.contents = contents;

    }
}
