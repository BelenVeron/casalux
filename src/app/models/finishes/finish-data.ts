import { Selected } from "./selected";
import { FinishCategory } from "./finish-category";
import { FinishColor } from "./finish-color";

export class FinishData {

    
    selected: Selected[];
    finishCategories: FinishCategory[];
    finishColors: FinishColor[];
    
    public constructor( 
        selected: Selected[],
        finishCategories: FinishCategory[],
        finishColors: FinishColor[]
        ) {
            this.selected = selected;
            this.finishCategories = finishCategories;
            this.finishColors = finishColors;
    }
}