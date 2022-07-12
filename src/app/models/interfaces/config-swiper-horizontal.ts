import { SwiperOptions } from "swiper";

export interface ConfigSwiperHorizontal {
    
    // class of the swiper
    class?: string;

    // config of the swiper
    swiper?: SwiperOptions

    // class of the image
    imageClass?: string;

    // items to repeat in the ngFor in the image
    // can be .src (in the assets) or .image (external with url)
    items?: any[];

    // type of favorite in app-favorite
    typeFavorite?: string;

    // title in h3
    text?: string;
    
    // description in p
    description?: string;
}