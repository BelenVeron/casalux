import { AdditionalImage } from "./additional-image";

export class AdditionalColor {

    id: string;
    name: string;
    colorImage: string;
    price: string;
    stock: string;
    additionalImages: AdditionalImage[];

    public constructor( 
        id: string,
        name: string,
        colorImage: string,
        price: string,
        stock: string,
        additionalImages: AdditionalImage[]
        ) {
            this.additionalImages = additionalImages;
            this.id = id;
            this.name = name;
            this.colorImage = colorImage;
            this.price = price;
            this.stock = stock;

    }
}
