interface Adapter<T> {
	adapt(r: any): T
}

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

export class GetGithubUserProfileAdapter implements Adapter<Array<GetGithubUserProfileDAO>> {

	adapt(r: any): Array<GetGithubUserProfileDAO> {
		console.log(r)
		let listDAO = new Array<GetGithubUserProfileDAO>()

		r.map( (it: GetGithubUserProfileDAO) => {
			let dao = new GetGithubUserProfileDAO()
			dao.login = it.login
			dao.site_admin = it.site_admin
			dao.id = it.id
			dao.node_id = it.node_id
			dao.avatar_url = it.avatar_url
			dao.gravatar_id = it.gravatar_id
			dao.url = it.url
			dao.html_url = it.html_url
			dao.following_url = it.following_url
			listDAO.push(dao)
		})

		return listDAO
	}
}
