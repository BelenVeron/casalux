import { Category } from "./category";
import { SubcategoryAdditional } from "./subcategory-additional";
import { AdditionalSelected } from "./additional-selected";
import { AdditionalImage } from "./additional-image";
import { AdditionalColor } from "./additional-color";
import { AdditionalType } from "./additional-type";
import { AdditionalSize } from "./additional-size";

export class DataOptions {

    categorys: Category[];
    additionalSubcategoryID: string;
    subcategoryAdditionals: SubcategoryAdditional[];
    additionalID: string;
    additionalTypes: AdditionalType[];
    additionalTypeID: string;
    additionalSizes: AdditionalSize[];
    additionalSizeID: string;
    additionalColors: AdditionalColor[];
    additionalColorID: string;
    additionalPrice: string;
    additionalStock: string;
    additionalImages: AdditionalImage[];

    additionalSelected: AdditionalSelected[];
    

    public constructor( categorys: Category[],
        subcategoryAdditionals: SubcategoryAdditional[],
        additionalSelected: AdditionalSelected[],
        additionalSubcategoryID: string,
        additionalTypeID: string,
        additionalSizes: AdditionalSize[],
        additionalID: string,
        additionalTypes: AdditionalType[],
        additionalImages: AdditionalImage[],
        additionalColors: AdditionalColor[],
        additionalSizeID: string,
        additionalColorID: string,
        additionalStock: string,
        additionalPrice: string) {
            this.categorys = categorys;
            this.subcategoryAdditionals = subcategoryAdditionals;
            this.additionalSubcategoryID = additionalSubcategoryID;
            this.additionalStock = additionalStock;
            this.additionalID = additionalID;
            this.additionalTypes = additionalTypes;
            this.additionalSelected = additionalSelected;
            this.additionalTypeID = additionalTypeID;
            this.additionalSizeID = additionalSizeID;
            this.additionalColorID = additionalColorID;
            this.additionalColors = additionalColors;
            this.additionalPrice = additionalPrice;
            this.additionalImages = additionalImages;
            this.additionalSizes = additionalSizes;

    }
    

}
