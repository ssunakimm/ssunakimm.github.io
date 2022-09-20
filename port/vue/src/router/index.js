import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Detail from '../views/Detail.vue'
import List from '../views/List.vue'
import Add from '../views/Add.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail,
    props: true
  },
  {
    path: '/list',
    name: 'list',
    component: List
  },
  {
    path: '/add',
    name: 'add',
    component: Add
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
