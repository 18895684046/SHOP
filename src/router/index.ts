import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import Cookies from 'js-cookie'
import { Base64 } from 'js-base64'

// example
const Example = () => import('@/pages/Example/index.vue')

// example
const Example1 = () => import('@/pages/Example1/index.vue')

// 404
const NotFound = () => import('@/pages/NotFound/index.vue')
// 分类页面
const Classify = () => import('@/pages/Classify/index.vue')
// 购物车
const Cart = () => import('@/pages/Cart/index.vue')
// 登录页面
const Login = () => import('@/pages/Login/index.vue')
//  注册页面
const Registe = () => import('@/pages/Registe/index.vue')

//  订单基本信息
const OrderBase = () => import('@/pages/OrderBase/index.vue')

//  收货地址
const ShipAddress = () => import('@/pages/ShipAddress/index.vue')

//  搜索显标签页面
const SearchTags = () => import('@/pages/SearchTags/index.vue')

//  商品列表页
const ShopList = () => import('@/pages/ShopList/index.vue')

// 单个商品详情
const GoodDetail = () => import('@/pages/GoodDetail/index.vue')

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
    path: '/goodDetail/:id',
    name: 'goodDetail',
    component: GoodDetail
  },
  {
    path: '/classify',
    name: 'classify',
    component: Classify
  },
  {
    path: '/searchtags',
    name: 'searchtags',
    component: SearchTags
  },
  {
    path: '/shoplist',
    name: 'shoplist',
    component: ShopList
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
    meta: {
      keepAlive: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/registe',
    name: 'registe',
    component: Registe
  },
  {
    path: '/orderbase',
    name: 'orderbase',
    props:true,
    component: OrderBase,
  },
  {
    path: '/shipaddress',
    name: 'shipaddress',
    component: ShipAddress
  },
  
  {
    path: '/',
    redirect: '/example'
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

// // 处理路由跳转页面时公用逻辑
// router.beforeEach((to, from, next) => {
//   const email = Cookies.get('email')
//   const fullname = Cookies.get('fullname')

//   if (!email || !fullname) {
//     window.location.href = `${import.meta.env.VITE_LOGIN_URL}?next=${Base64.encode(window.location.href)}`
//   } else {
//     if (to.path === '/') {
//       return next({
//         name: 'example'
//       })
//     }

//     next()
//   }
// })

export default router