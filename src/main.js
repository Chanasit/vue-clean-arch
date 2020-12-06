import {createApp} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
// application
import App from './App.vue';
// component
import Home from './components/Home.vue';
// presenter
import {AppPresenter} from './presenters/Application';
// repositories
import {AppHttpClient} from './repositories/httpclients/Application';
// services
import {AppService} from './services/Application';

const r0 = new AppHttpClient()
const s0 = new AppService(r0)
const p0 = new AppPresenter(s0)


// router
const routes = [
	{path: '/', component: Home},
]
const router = createRouter({
	history: createWebHistory(),
	routes, // short for `routes: routes`
})

const presenter = {
	app: p0
}

// appplication
createApp(App)
	.provide("$presenter", presenter)
	.use(router)
	.mount('#app')
