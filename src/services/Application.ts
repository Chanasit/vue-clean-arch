import {Observable} from 'rxjs';
import {GetGithubUserProfileDAO} from '../repositories/httpclients/adapters/GetGithubUserProfile';
import {IAppHttpClient} from '../repositories/httpclients/Application'

export interface IAppService {
	getGithubUserProfile(): Observable<GetGithubUserProfileDAO[]>
}

export class AppService implements IAppService {
	constructor(
		private appHttpClient: IAppHttpClient
	) {}

	getGithubUserProfile(): Observable<GetGithubUserProfileDAO[]> {
		return this.appHttpClient.getGithubUserProfile()
	}
}
