import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'

export interface IAppHttpClient {
    getGithubUserProfile(): Observable<string>
}

export class AppHttpClient implements IAppHttpClient {

    constructor() { }

    getGithubUserProfile(): Observable<string> {
        return ajax(`https://api.github.com/users?per_page=10`).pipe(map(r => r.response))
    }

}
