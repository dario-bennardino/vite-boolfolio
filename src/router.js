import { createRouter, createWebHashHistory } from "vue-router";

import Home from './pages/Home.vue'
import Blog from './pages/Blog.vue'
import About from './pages/About.vue'
import Contacts from "./pages/Contacts.vue";
import Error404 from "./pages/Error404.vue";
import Projects from "./pages/Projects.vue";
import ProjectDetail from "./pages/ProjectDetail.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            //nome della rotta
            name: 'home',
            component: Home
        },
        {
            path: '/chi-siamo',
            //nome della rotta
            name: 'about',
            component: About
        },
        {
            path: '/blog',
            //nome della rotta
            name: 'blog',
            component: Blog
        },
        {
            path: '/contatti',
            //nome della rotta
            name: 'contacts',
            component: Contacts
        },
        {
            path: '/progetti',
            //nome della rotta
            name: 'projects',
            component: Projects
        },
        {
            path: '/dettaglio-progetto/:slug',
            //nome della rotta
            name: 'projectDetail',
            component: ProjectDetail
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'error404',
            component: Error404
        },

    ]
})

export { router }