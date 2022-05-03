import { Photo } from "../collections/photo";

export class Model {
    id: string;
    name: string; 
    photos: Photo[];

    public constructor( 
        id: string,
        name: string,
        photos: Photo[],
        ) {
            this.id = id;
            this.name = name;
            this.photos = photos;
    }
}
