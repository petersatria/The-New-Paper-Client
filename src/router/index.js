import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import DetailView from '../views/DetailView.vue'
import BookmarkView from '../views/BookmarkView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import ArticlesView from '../views/ArticlesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/',
      component: HomeView,
      children: [
        {
          path: '',
          name: 'home',
          component: ArticlesView
        },
        {
          path: '/bookmarks',
          name: 'bookmarks',
          component: BookmarkView
        },
      ]
    },
    {
      path: '/articles/:id',
      name: 'article-detail',
      component: DetailView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (localStorage.access_token && to.name === 'login' || localStorage.access_token && to.name === 'register') {
    next({ name: 'home' })
  } else if (!localStorage.access_token && to.name === 'bookmarks') {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
