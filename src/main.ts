import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Experience from './views/Experience.vue'
import Hobbies from './views/Hobbies.vue'
import Blog from './views/Blog.vue'



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/about', name: 'About', component: About},
        {path: '/contact', name: 'Contact', component: Contact},
        {path: '/experience', name: 'Experience', component: Experience},
        {path: '/hobbies', name: 'Hobbies', component: Hobbies},
        {path: '/Blog', name: 'Blog', component: Blog}
    ], 
});

createApp(App)
    .use(router)
    .mount('#app')
