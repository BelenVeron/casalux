import { DataOptions } from "./data-options";

export class Additional {

    msg: string;
    success: boolean;
    data: DataOptions;
    token: string;

    public constructor( msg: string,
        success: boolean,
        data: DataOptions,
        token: string) {
            this.msg = msg;
            this.success = success;
            this.data = data;
            this.token = token;
    }

}
