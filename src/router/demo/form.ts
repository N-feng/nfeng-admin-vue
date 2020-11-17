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
      {
        path: 'advancedForm',
        name: 'AdvancedFormDemo',
        component: () => import('@/views/demo/form/AdvancedForm.vue'),
        meta: {
          title: '可收缩表单',
        },
      },
      {
        path: 'ruleForm',
        name: 'RuleFormDemo',
        component: () => import('@/views/demo/form/RuleForm.vue'),
        meta: {
          title: '表单验证',
        },
      },
      {
        path: 'dynamicForm',
        name: 'DynamicFormDemo',
        component: () => import('@/views/demo/form/DynamicForm.vue'),
        meta: {
          title: '动态表单',
        },
      },
    ],
  },
];
