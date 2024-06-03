import { createRouter, createWebHashHistory } from "vue-router";

import Home from './pages/Home.vue'
import Home from './pages/Contacts.vue'
import Home from './pages/Blog.vue'
import Home from './pages/About.vue'
import Home from './pages/Error404.vue'
import Contacts from "./pages/Contacts.vue";
import Error404 from "./pages/Error404.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            //nome della rotta
            nome: 'home',
            component: Home
        },
        {
            path: '/chi-siamo',
            //nome della rotta
            nome: 'about',
            component: About
        },
        {
            path: '/blog',
            //nome della rotta
            nome: 'blog',
            component: Blog
        },
        {
            path: '/contatti',
            //nome della rotta
            nome: 'contacts',
            component: Contacts
        },
        {
            path: '/errors',
            //nome della rotta
            nome: 'errors404',
            component: Error404
        },

    ]
})

export { router }