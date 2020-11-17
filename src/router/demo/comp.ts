export default [
  {
    path: "/comp",
    component: () => import("@/layout/index.vue"),
    alwaysShow: true,
    meta: {
      title: "组件",
      icon: "apps-line",
    },
    children: [
      {
        path: "icon",
        name: "Icon",
        component: () => import("@/views/demo/comp/Icon.vue"),
        meta: {
          title: "图标",
          icon: "remixicon-line",
        },
      },
      {
        path: "img-preview",
        name: "ImgPreview",
        component: () => import("@/views/demo/comp/ImgPreview.vue"),
        meta: {
          title: "图片预览",
          // icon: "table-2",
        },
      },
      {
        path: "description",
        name: "Description",
        component: () => import("@/views/demo/comp/Description.vue"),
        meta: {
          title: "详情组件",
          // icon: "table-2",
        },
      },
    ],
  },
];
