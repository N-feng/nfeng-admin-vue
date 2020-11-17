export default [
  {
    path: "/form",
    component: () => import("@/layout/index.vue"),
    alwaysShow: true,
    meta: {
      title: "Form",
      icon: "table-2",
    },
    children: [
      {
        path: "basic",
        name: "FormBasicDemo",
        component: () => import("@/views/demo/form/Basic.vue"),
        meta: {
          title: "基础表单",
        },
      },
    ],
  },
];
