import { AdditionalSize } from "./additional-size";

export class AdditionalType {

    id: string;
    name: string; 
    additionalSizes: AdditionalSize[];

    public constructor( 
        id: string,
        name: string,
        additionalSizes: AdditionalSize[],
        ) {
            this.id = id;
            this.name = name;
            this.additionalSizes = additionalSizes;
    }

}
