import {createApp} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';

// application
import App from './App.vue'

// component
import Home from './components/Home.vue'
import {AppService} from './services/Application.ts'

// router
const routes = [
	{path: '/', component: Home},
]
const router = createRouter({
	history: createWebHistory(),
	routes, // short for `routes: routes`
})

import {AppHttpClient} from './repositories/httpclients/Application'

// presenter
import {AppPresenter} from './presenters/Application.ts'
const presenter = {
	app: new AppPresenter(new AppService(new AppHttpClient()))
}

// appplication
createApp(App)
	.provide("$presenter", presenter)
	.use(router)
	.mount('#app')
