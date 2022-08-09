import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/login/LoginView'
import HomeView from '../views/home/HomeView'
import RegisterView from '../views/register/RegisterView'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    // 登陆后不让再跳到register页面
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'home' }) : next()
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    // 登陆后不让再跳到Login页面
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'home' }) : next()
    }

  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage
  isLogin || to.name === 'Login' || to.name === 'register' ? next() : next({ name: 'Login' })
})
export default router
