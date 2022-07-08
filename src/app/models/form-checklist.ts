import { FormItem } from "./form-item";

export interface FormChecklist {
    
   title?: string;
   description?: string;
   user?: string;
   items?: FormItem[];
}