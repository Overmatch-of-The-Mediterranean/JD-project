import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home123" */ '../views/home/HomeView')
  },
  {
    path: '/shop/:id',
    name: 'shop',
    component: () => import(/* webpackChunkName: "shop123" */ '../views/shop/ShopView')
    // 登陆后不让再跳到register页面
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register123" */ '../views/register/RegisterView'),
    // 登陆后不让再跳到register页面
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'home' }) : next()
    }
  },
  {
    path: '/orderCreation',
    name: 'orderCreation',
    component: () => import(/* webpackChunkName: "register123" */ '../views/register/RegisterView'),
    // 登陆后不让再跳到register页面
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'home' }) : next()
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login123" */ '../views/login/LoginView'),
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
