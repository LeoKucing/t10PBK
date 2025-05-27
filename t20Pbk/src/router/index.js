import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/costumer/Home.vue'
import Menu from '../components/costumer/Menu.vue'
import Cart from '../components/costumer/Cart.vue'
import History from '../components/costumer/History.vue'
import Login from '../components/costumer/Login.vue'
import AdminDashboard from '../components/admin/Dashboard.vue'
import ManageMenu from '../components/admin/ManageMenu.vue'
import ManageOrders from '../components/admin/ManageOrders.vue'
import Reports from '../components/admin/Reports.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/menu', name: 'Menu', component: Menu },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/history', name: 'History', component: History },
  { path: '/login', name: 'Login', component: Login },
  {
    path: '/admin',
    name: 'AdminDashboard',
    component: AdminDashboard,
    children: [
      { path: 'menu', name: 'ManageMenu', component: ManageMenu },
      { path: 'orders', name: 'ManageOrders', component: ManageOrders },
      { path: 'reports', name: 'Reports', component: Reports },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
