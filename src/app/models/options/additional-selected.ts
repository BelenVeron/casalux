import { AdditionalType } from "./additional-type";

export class AdditionalSelected {

    id: string;
    name: string;
    details: string;
    technicalInfo: string;
    unit: string;
    additionalTypes: AdditionalType[];

    public constructor( 
        id: string,
        name: string,
        details: string,
        technicalInfo: string,
        unit: string,
        additionalTypes: AdditionalType[]
        ) {
            this.additionalTypes = additionalTypes;
            this.id = id;
            this.name = name;
            this.details = details;
            this.technicalInfo = technicalInfo;
            this.unit = unit;

    }
}
