import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'

interface IAppHttpClient {
    getGithubUser(): Observable<string>
    getCategory(): any
    getNotification(): any
}

export default class AppHttpClient implements IAppHttpClient {

    constructor() { }

    getGithubUser(): Observable<string> {
        return ajax(`https://api.github.com/users?per_page=5`).pipe(map(r => r.response))
    }

    getNotification() {
        throw new Error("Method not implemented.");
    }

    getCategory() {
        throw new Error("Method not implemented.");
    }
}
