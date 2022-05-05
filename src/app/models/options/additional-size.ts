import { AdditionalColor } from "./additional-color";

export class AdditionalSize {

    id: string;
    name: string; 
    additionalColors: AdditionalColor[];

    public constructor( 
        id: string,
        name: string,
        additionalColors: AdditionalColor[],
        ) {
            this.id = id;
            this.name = name;
            this.additionalColors = additionalColors;
    }
}
