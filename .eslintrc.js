// eslint配置文件
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  globals: {
    Vue: false,
    weex: false,
    window: false
  },
  parser: 'babel-eslint',
  extends: 'airbnb-base',
  plugins: ['html'],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  rules: {
    "indent": ["error", 4], // 4个空格缩进
    'linebreak-style': 0,// 不校验换行符
    semi: ['error', 'never'],// 不使用分号 
    'no-debugger': 0,// 不校验debugger
    'no-console': 0,// 不校验console
    'no-new': 0,// new Vue要用
    'no-underscore-dangle': 0,// 可使用下划线命名
    'prefer-promise-reject-errors': 0,// reject不强制Error
    // 本项目的规则:
    'no-restricted-globals': 0, // 禁用特定的全局变量
    'no-param-reassign': 0, // 不允许对 function 的参数进行重新赋值
    'consistent-return': 0, // 要求 return 语句要么总是指定返回的值，要么不指定
    'no-multi-assign': 0, // 不允许在单个语句中使用多个分配
    'no-unused-expressions': 0, // 禁止出现未使用过的表达式
  }
}
