export default [
  {
    path: "/table",
    component: () => import("@/layout/index.vue"),
    alwaysShow: true,
    meta: {
      title: "Table",
      icon: "table-2",
    },
    children: [
      {
        path: "basic",
        name: "Basic",
        component: () => import("@/views/demo/table/Basic.vue"),
        meta: {
          title: "基础表格",
          // icon: "table-2",
        },
      },
      {
        path: "customerCell",
        name: "CustomerCell",
        component: () => import("@/views/demo/table/CustomerCell.vue"),
        meta: {
          title: "自定义列",
          // icon: "table-2",
        },
      },
      {
        path: "formTable",
        name: "FormTable",
        component: () => import("@/views/demo/table/FormTable.vue"),
        meta: {
          title: "开启搜索区域",
          // icon: "table-2",
        },
      },
    ],
  },
];
