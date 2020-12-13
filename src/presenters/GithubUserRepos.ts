import { IGithubUserReposService } from '../services/GithubUserRepos'

class GithubUserRepos {
    id: number
    name: string
    full_name: string
}

class GithubUserReposViewModel {
    owner_search: string
    repos: GithubUserRepos[]
}

export interface IGithubUserReposPresenterPresenter {
    view: GithubUserReposViewModel
    onMounted(): any
    onUnmounted(): any
}

export class GithubUserReposPresenter implements IGithubUserReposPresenterPresenter {

    public view: GithubUserReposViewModel

    constructor(
        private service: IGithubUserReposService
    ) {
        this.view = new GithubUserReposViewModel()
        this.view.owner_search = "chanasit"
        this.view.repos = []
    }
    test() {
        return this.service.getGithubUserRepos(this.view.owner_search)
    }

    onMounted() {
        this.service.getGithubUserRepos(this.view.owner_search).subscribe(n => {
            console.log(n)
						n.map( i => {
							this.view.repos.push(i)
						})
            console.log("success")
        })
    }

    onUnmounted() {
        throw new Error("Method not implemented.")
    }
}
