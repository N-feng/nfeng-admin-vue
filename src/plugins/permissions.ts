/**
 * @author chuzhixin 1204505056@qq.com
 * @description 路由守卫，目前两种模式：all模式与intelligence模式
 */
import router from "@/router";

import store from "@/store";
import getPageTitle from "@/utils/pageTitle";
import { getToken } from "@/utils/auth";
// import defaultSettings from "@/config";

// const {
//   authentication,
//   loginInterception,
//   recordRoute,
//   routesWhiteList,
// } = defaultSettings;

const whiteList = ["/login", "/register", "/callback", "/404", "/403"];
router.beforeEach(async (to: any, from, next) => {
  // let hasToken = store.getters["user/accessToken"];
  // if (!loginInterception) hasToken = true;
  const token = getToken("token");
  if (token) {
    //token存在
    if (to.path === "/login") {
      //如果login直接跳转首页
      next({ path: "/" });
    }
    if (!store.getters["routes/hasInited"]) {
      store.dispatch("routes/addRouters");
    }
    const hasRoles =
      store.getters["acl/admin"] ||
      store.getters["acl/role"].length > 0 ||
      store.getters["acl/ability"].length > 0;
    if (!hasRoles) {
    //   if (loginInterception) {
        await store.dispatch("user/getUserInfo");
    //   } else {
    //     //loginInterception为false（关闭登录拦截时）时，创建虚拟角色
    //     await store.dispatch("user/setVirtualRoles");
    //   }

    //   let accessRoutes = [];
    //   if (authentication === "intelligence") {
    //     accessRoutes = await store.dispatch("routes/setRoutes");
    //   } else if (authentication === "all") {
    //     accessRoutes = await store.dispatch("routes/setAllRoutes");
    //   }

    //   router.addRoutes(accessRoutes);
    //   next({ ...to, replace: true });
    //   return;
    }
    next();
  } else if (whiteList.indexOf(to.path) !== -1) {
    // 白名单直接放行
    next();
  } else {
    // token不存在
    // if (recordRoute)
    next({ path: "/login", query: { redirect: to.path }, replace: true });
    // else next({ path: "/login", replace: true });
  }
});

router.afterEach((to) => {
  document.title = getPageTitle(to.meta.title);
});
