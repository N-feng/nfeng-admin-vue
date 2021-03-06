import {
  registerMicroApps,
  // addGlobalUncaughtErrorHandler,
  start,
} from "qiankun";
// import NProgress from "nprogress";
// import { message } from "ant-design-vue";
// import "nprogress/nprogress.css";

// NProgress.configure({ parent: ".scrollbar.scroll" });

export default function(apps: []) {
  registerMicroApps(apps, {
    beforeLoad: () => {
      // 加载微应用前，加载进度条
      // NProgress.start();
      return Promise.resolve();
    },
    afterMount: () => {
      // NProgress.done();
      return Promise.resolve();
    },
  });

  // addGlobalUncaughtErrorHandler((event: any) => {
  //   const { msg } = event as any;
  //   NProgress.done();
  //   // 加载失败时提示
  //   if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
  //     message.error("微应用加载失败，请检查应用是否可运行");
  //   }
  // });

  start();
}
