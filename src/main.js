import {createApp} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';

// component
import Home from './components/Home.vue'
import AppService from './services/Application.ts'

// router
const routes = [
	{path: '/', component: Home},
]
const router = createRouter({
	history: createWebHistory(),
	routes, // short for `routes: routes`
})

// presenter
import AppPresenter from './presenters/Application.ts'
const presenter = {
	app: new AppPresenter(new AppService())
}

// appplication
createApp(App)
	.provide("$presenter", presenter)
	.use(router)
	.mount('#app')
