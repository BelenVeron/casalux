import { Subcategory } from "./subcategory";

export class Category {

    id: string;
    name: string; 
    subcategories: Subcategory[];

    public constructor( 
        id: string,
        name: string,
        subcategories: Subcategory[],
        ) {
            this.id = id;
            this.name = name;
            this.subcategories = subcategories;
    }
}
