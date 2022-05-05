import { Data } from "./data";

export class Additional {

    msg: string;
    success: boolean;
    data: Data;
    token: string;

    public constructor( msg: string,
        success: boolean,
        data: Data,
        token: string) {
            this.msg = msg;
            this.success = success;
            this.data = data;
            this.token = token;
    }

}
