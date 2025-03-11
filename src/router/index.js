import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignInView from '../views/SignInView.vue'
import AboutView from '@/views/AboutView.vue'
import ServicesView from '@/views/ServicesView.vue'
import PartnersView from '@/views/PartnersView.vue'
import ComingSoonView from '@/views/ComingSoonView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   component: HomeView,
    // },
    // {
    //   path: '/signin',
    //   component: SignInView,
    // },
    // {
    //   path: '/about',
    //   component: AboutView,
    // },
    // {
    //   path: '/services',
    //   component: ServicesView,
    // },
    // {
    //   path: '/partners',
    //   component: PartnersView,
    // },
    {
      path: '/',
      component: ComingSoonView,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router
