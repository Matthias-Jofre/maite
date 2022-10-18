import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import BarraBusqueda from '@/views/BarraBusquedaPage.vue'
import Pagina from '@/views/PaginaPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/busqueda',
    name: 'BarraBusqueda',
    component: BarraBusqueda
  },
  {
    path: '/pagina',
    name: 'Pagina',
    component: Pagina
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
