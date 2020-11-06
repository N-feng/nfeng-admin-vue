import {
  registerMicroApps,
  runAfterFirstMounted,
  // setDefaultMountApp,
  start,
  initGlobalState,
  addGlobalUncaughtErrorHandler,
} from "qiankun";

export default function startQiankun() {
  /**
   * Step1 初始化应用（可选）
   */

  // render({ loading: true });

  // const loader = (loading: any) => render({ loading });

  /**
   * Step2 注册子应用
   */

  registerMicroApps(
    [
    //   {
    //     name: "react",
    //     entry: "//localhost:7100",
    //     container: "#subapp-viewport",
    //     // loader,
    //     activeRule: "/micro-react",
    //   },
      {
        name: "nfeng-admin-vue",
        entry: "//localhost:7101",
        container: "#subapp-viewport",
        // loader,
        activeRule: "/micro-vue",
      },
    ],
    {
      beforeLoad: () => {
        // 加载微应用前，加载进度条
        // NProgress.start();
        return Promise.resolve();
      },
      afterMount: () => {
        // NProgress.done();
        return Promise.resolve();
      },
    }
  );

  addGlobalUncaughtErrorHandler((event: any) => {
    const { msg } = event as any;
    // NProgress.done();
    // 加载失败时提示
    if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
      // Message.error('微应用加载失败，请检查应用是否可运行');
    }
  });

    const { onGlobalStateChange, setGlobalState } = initGlobalState({
        user: 'qiankun',
    });

    onGlobalStateChange((value, prev) => console.log('[onGlobalStateChange - master]:', value, prev));

    setGlobalState({
        ignore: 'master',
        user: {
            name: 'master',
        },
    });

  /**
   * Step3 设置默认进入的子应用
   */
  // setDefaultMountApp('/react');

  /**
   * Step4 启动应用
   */
  start();

  runAfterFirstMounted(() => {
    console.log("[MainApp] first app mounted");
  });
}
