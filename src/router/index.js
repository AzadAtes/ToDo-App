import { createRouter, createWebHistory } from 'vue-router'
import MyDayView from '../views/MyDayView.vue'
import ImportantView from '../views/ImportantView.vue'
import PlannedView from '../views/PlannedView.vue'
import TasksView from '../views/TasksView.vue'
import SearchView from '../views/SearchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'today',
      component: MyDayView
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
      path: '/todo/tasks',
      name: 'tasks',
      component: TasksView
    },
    {
      path: '/todo/search',
      name: 'search',
      component: SearchView,
    }
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('../views/AboutView.vue')
  ]
})

export default router
