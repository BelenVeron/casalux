import { Category } from "./category";
import { SubcategoryAdditional } from "./subcategory-additional";
import { AdditionalSelected } from "./additional-selected";

export class Data {

    categories: Category[];
    subcategoryAdditionals: SubcategoryAdditional[];
    additionalSelected: AdditionalSelected[];
    additionalTypeID: number;
    additionalSizeID: number;
    additionalColorID: number;
    additionalPrice: string;

    public constructor( categories: Category[],
        subcategoryAdditionals: SubcategoryAdditional[],
        additionalSelected: AdditionalSelected[],
        additionalTypeID: number,
        additionalSizeID: number,
        additionalColorID: number,
        additionalPrice: string) {
            this.categories = categories;
            this.subcategoryAdditionals = subcategoryAdditionals;
            this.additionalSelected = additionalSelected;
            this.additionalTypeID = additionalTypeID;
            this.additionalSizeID = additionalSizeID;
            this.additionalColorID = additionalColorID;
            this.additionalPrice = additionalPrice;

    }
    

}
