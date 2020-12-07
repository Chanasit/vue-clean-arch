import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {ajax} from 'rxjs/ajax'
import {GetGithubUserProfileDAO, GetGithubUserProfileAdapter} from './adapters/GetGithubUserProfile'

export interface IAppHttpClient {
	getGithubUserProfile(): Observable<GetGithubUserProfileDAO[]>
}

export class AppHttpClient implements IAppHttpClient {

	constructor() {}

	getGithubUserProfile(): Observable<GetGithubUserProfileDAO[]> {
		return ajax(`https://api.github.com/users?per_page=10`).pipe(map(r => new GetGithubUserProfileAdapter().adapt(r.response)))
	}

}
