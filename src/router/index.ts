import { createRouter, createWebHistory } from 'vue-router'

import { DashboardView, LoginView } from '@/views'
import LayoutView from '@/layout/LayoutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/dashboard',
      component: LayoutView,
      children: [

        {
          path: '',
          name: 'dashboard',
          component: DashboardView,
        },

      ]
    }
    
  ],
})

export default router;
