import {Observable} from 'rxjs';
import {IAppHttpClient} from '../repositories/httpclients/Application'

export interface IAppService {
	getGithubUserProfile(): Observable<string>
}

export class AppService implements IAppService {
	constructor(
		private appHttpClient: IAppHttpClient
	) {}

	getGithubUserProfile(): Observable<string> {
		return this.appHttpClient.getGithubUserProfile()
	}
}
