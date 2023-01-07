import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyDayView from '../views/MyDayView.vue'
import ImportantView from '../views/ImportantView.vue'
import PlannedView from '../views/PlannedView.vue'
import AssignedToMeView from '../views/AssignedToMeView.vue'
import TasksView from '../views/TasksView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/todo/myday',
      name: 'myday',
      component: MyDayView
    },
    {
      path: '/todo/important',
      name: 'important',
      component: ImportantView
    },
    {
      path: '/todo/planned',
      name: 'planned',
      component: PlannedView
    },
    {
      path: '/todo/assignedtome',
      name: 'assignedtome',
      component: AssignedToMeView
    },
    {
      path: '/todo/tasks',
      name: 'tasks',
      component: TasksView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
