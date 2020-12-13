import {createApp} from 'vue';

import {createRouter, createWebHistory} from 'vue-router';
// application
import App from './App.vue';
// component
import GithubUserRepos from './components/GithubUserRepos.vue';
// repositories
import {GithubHttpClient} from './repositories/httpclients/Github';
// services
import {GithubUserReposService} from './services/GithubUserRepos';
// presenter
import {GithubUserReposPresenter} from './presenters/GithubUserRepos';

const r0 = new GithubHttpClient()
const s0 = new GithubUserReposService(r0)
const p0 = new GithubUserReposPresenter(s0)


// router
const routes = [
	{path: '/', component: GithubUserRepos},
]
const router = createRouter({
	history: createWebHistory(),
	routes: routes
})

const presenter = {
	github_user_repos: p0
}

createApp(App)
	.provide("$presenter", presenter)
	.use(router)
	.mount('#app')
