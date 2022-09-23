import { Content } from "@angular/compiler/src/render3/r3_ast";
import { Kitchen } from "./kitchen";

export class Collection {

    id: string;
    name: string;
    description: string;
    image: string;
    kitchens: Kitchen[];
    contents: Content[];

    public constructor( id: string,
        name: string,
        description: string,
        image: string,
        kitchens: Kitchen[],
        contents: Content[]) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.image = image;
            this.kitchens = kitchens;
            this.contents = contents;

    }
    

}
