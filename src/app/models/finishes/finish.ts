export class Finish {
    id: string;
    name: string;
    image: string;
    code: string;

    public constructor( id: string,
        name: string,
        image: string,
        code: string) 
        {
        this.id = id;
        this.name = name;
        this.image = image;
        this.code = code;
    }
}