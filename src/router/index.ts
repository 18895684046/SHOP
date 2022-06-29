import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Cookies from 'js-cookie'
import { Base64 } from 'js-base64'

// example
const Example = () => import('@/pages/Example/index.vue')

// example
const Example1 = () => import('@/pages/Example1/index.vue')

// 404
const NotFound = () => import('@/pages/NotFound/index.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/example',
    name: 'example',
    component: Example
  },
  {
    path: '/example1',
    name: 'example1',
    component: Example1
  },
  {
    path: '/example2',
    name: 'example2',
    component: Example
  },
  {
    path: '/example3',
    name: 'example3',
    component: Example
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFound
  }
]

const router = createRouter({
  // base url 在此定义项目的公共路由前缀 这里我用测试用例举例
  history: createWebHistory('/template/'),
  routes,
})

// 处理路由跳转页面时公用逻辑
router.beforeEach((to, from, next) => {
  const email = Cookies.get('email')
  const fullname = Cookies.get('fullname')

  if (!email || !fullname) {
    window.location.href = `${import.meta.env.VITE_LOGIN_URL}?next=${Base64.encode(window.location.href)}`
  } else {
    if (to.path === '/') {
      return next({
        name: 'example'
      })
    }

    next()
  }
})

export default router