
import 'bootstrap/dist/css/bootstrap.css'
import './assets/scss/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import 'bootstrap/dist/js/bootstrap.js'

// createApp(App).mount('#app')
// aggiungo use(router)
createApp(App).use(router).mount('#app')

