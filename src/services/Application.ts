export interface IAppService {
    getApplicationNotify(): string
}

export class AppService implements IAppService {
    constructor() { }
    getApplicationNotify(): string {
        throw new Error("Method not implemented.");
    }
}
