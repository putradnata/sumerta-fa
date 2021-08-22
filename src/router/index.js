import { createRouter, createWebHistory } from 'vue-router'

import AdminDashboard from '../views/admin/dashboard.vue'
import IndexBanjar from '../views/admin/banjar/index.vue'
import FormCreateBanjar from '../views/admin/banjar/form.vue'

const routes = [
  {
    path: '/admin',
    name: 'Admin',
    component: AdminDashboard
  },
  {
    path: '/admin/banjar',
    name: 'IndexBanjar',
    component: IndexBanjar
  },
  {
    path: '/admin/banjar/create',
    name:'Form',
    component: FormCreateBanjar
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
