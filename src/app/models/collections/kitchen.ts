import { Photo } from "./photo";

export class Kitchen {
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
