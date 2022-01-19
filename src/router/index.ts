import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Cookies from 'js-cookie'
import { Base64 } from 'js-base64'

// 404
const NotFound = () => import('@/pages/NotFound/index.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFound
  }
]

const router = createRouter({
  // base url 在此定义项目的公共路由前缀 这里我用测试用例举例
  history: createWebHistory('/testcase/'),
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