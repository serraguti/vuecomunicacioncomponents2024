import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from './components/HomeComponent.vue'
import PadreDeportes from './components/PadreDeportes.vue'
import NumeroDoble from './components/NumeroDoble.vue'

const myRoutes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/numerodoble/:numero?", component: NumeroDoble
    },
    {
        path: "/deportes/:id?", component: PadreDeportes
    }
]

const router = createRouter({
    history: createWebHistory(), 
    routes: myRoutes
})
export default router;