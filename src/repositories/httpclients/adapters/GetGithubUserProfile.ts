import { Adapter } from '../../../utils/Adapter'

export class GetGithubUserProfileDAO {
	login: string
	id: number
	node_id: string
	avatar_url: string
	gravatar_id: ""
	url: string
	html_url: string
	followers_url: string
	following_url: string
	gists_url: string
	starred_url: string
	subscriptions_url: string
	organizations_url: string
	repos_url: string
	events_url: string
	received_events_url: string
	type: string
	site_admin: boolean
}

export class GetGithubUserProfileAdapter implements Adapter<GetGithubUserProfileDAO[]> {

	adapt(r: any): GetGithubUserProfileDAO[] {
		return r
	}
}
