import Vue from 'vue'
import VueRouter from 'vue-router'
import nprogress from 'nprogress'

Vue.use(VueRouter);

const Home = () => import('./components/Home.vue');
const Photos = () => import('./components/Photos.vue');
const Projects = () => import('./components/Projects.vue');
const Contact = () => import('./components/Contact.vue');

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/photos', name: 'photos', component: Photos },
    { path: '/projects', name: 'projects', component: Projects },
    { path: '/contact', name: 'contact', component: Contact },
]

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
    nprogress.start();
    next();
});

router.afterEach((to, from) => {
    nprogress.done();
});

const app = new Vue({
    router
}).$mount('#app')
