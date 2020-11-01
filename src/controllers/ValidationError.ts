import { HttpError } from "routing-controllers";

export default class ValidationError extends HttpError {
    public operationName: string;
    public args: any[];

    constructor(operationName: string, args: any[] = []) {
        super(400);
        Object.setPrototypeOf(this, ValidationError.prototype);
        this.operationName = operationName;
        this.args = args; // can be used for internal logging
    }

    toJSON() {
        return {
            status: this.httpCode,
            failedOperation: this.operationName
        }
    }
}