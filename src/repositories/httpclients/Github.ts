import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {ajax} from 'rxjs/ajax'
import {GetGithubUserProfileDAO, GetGithubUserProfileAdapter} from './adapters/GetGithubUserProfile'
import {GetGithubUserReposDAO, GetGithubUserReposAdapter} from './adapters/GetGithubUserRepos'

export interface IGithubHttpClient {
	getGithubUserProfile(): Observable<GetGithubUserProfileDAO[]>
	getGithubUserRepos(owner: string): Observable<GetGithubUserReposDAO[]>
}

export class GithubHttpClient implements IGithubHttpClient {

	getGithubUserProfile(): Observable<GetGithubUserProfileDAO[]> {
		return ajax(`https://api.github.com/users?per_page=10`).pipe(map(r => new GetGithubUserProfileAdapter().adapt(r.response)))
	}
	getGithubUserRepos(owner: string): Observable<GetGithubUserReposDAO[]> {
		return ajax(`https://api.github.com/users/${owner}/repos`).pipe(map(r => new GetGithubUserReposAdapter().adapt(r.response)))
	}
}
