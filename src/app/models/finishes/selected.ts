import { Finish } from "./finish";
export class Selected {

    id: string;
    name: string; 
    type: string;
    finishes: Finish[];
    
    public constructor( 
        id: string,
        name: string,
        type: string,
        finishes: Finish[]
        ) {
            this.id = id;
            this.name = name;
            this.type = type;
            this.finishes = finishes;
    }
}