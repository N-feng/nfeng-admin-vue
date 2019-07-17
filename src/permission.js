import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import router from './router'
import { getToken } from '@/utils/auth'


NProgress.configure({ showSpinner: false })

// 判断路由权限是否允许role
// function hasPermission(roles, permissionRoles) {
//   // admin权限
//   if (roles.indexOf('admin') >= 0) return true
//   // 页面没有限制
//   if (!permissionRoles) return true
//   return roles.some(role => permissionRoles.indexOf(role) >= 0)
// }

const whiteList = ['/login', '/signup']// no redirect whitelist

router.beforeEach((to, from, next) => {
  // 进度条开始走起
  NProgress.start()
  // 如果有token
  if (getToken()) {
    // console.log(to.path)
    if (to.path === '/login') {
      next({ path: '/admin' })
      NProgress.done()
    } else {
      next()
    }
  } else if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
    next()
  } else {
    // console.log(to)
    // next(`/login?redirect=${to.fullPath}`) // 否则全部重定向到登录页
    // 组装多个查询参数登陆地址
    const url = `/login?path=${to.path}&query=${JSON.stringify(to.query)}`
    next(url)
    NProgress.done()
  }
})

router.afterEach(() => {
  NProgress.done()
})
