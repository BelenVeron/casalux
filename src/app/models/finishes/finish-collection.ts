import { Collection } from "./collection";


export class FinishCollection {
    id: string;
    name: string; 
    code: string;
    collections: Collection[];
    
    public constructor( 
        id: string,
        name: string,
        code: string,
        collections: Collection[]
        ) {
            this.id = id;
            this.name = name;
            this.code = code;
            this.collections = collections;
    }
}
