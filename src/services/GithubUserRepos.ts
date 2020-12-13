import {Observable} from 'rxjs';
import {GetGithubUserReposDAO} from '../repositories/httpclients/adapters/GetGithubUserRepos';
import {IGithubHttpClient} from '../repositories/httpclients/Github'

export interface IGithubUserReposService {
	getGithubUserRepos(owner: string): Observable<GetGithubUserReposDAO[]>
}

export class GithubUserReposService implements IGithubUserReposService {
	constructor(
		private httpclient: IGithubHttpClient
	) {}

	getGithubUserRepos(owner: string): Observable<GetGithubUserReposDAO[]> {
		return this.httpclient.getGithubUserRepos(owner)
	}
}
