import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MeigenGet from '../views/MeigenGetView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('../views/FavoritesView.vue'),
    },
    {
      path: '/meigenget',
      name: 'meigenget',
      component: MeigenGet,
    },
    {
      path: '/meigenquiz',
      name: 'meigenquiz',
      component: () => import('../views/MeigenQuizView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/MeigenLogin.vue'),
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: () => import('../views/TimelineView.vue'),
    },
  ],
})

export default router
