# nfeng-utils

## Usage

### Install via NPM

- Get from npm:  ```npm install nfeng-utils --save ```


### Usage with build tools

HTML:
```
// import ES6 style
import utils from 'nfeng-utils';

// style="padding-top: 10px; margin-right: 10px;"
<div class="pt10 mr10"></div>
```

CSS:
```
// 内置了一些css handle
.center-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

JS:
```
// import ES6 style
import utils from 'nfeng-utils';

const a = [1,2,3]
const b = [2,4,5]

// 并集 [1,2,3,4,5]
utils.union(a, b)

// 交集 [2]
utils.intersection(a, b)

// 差集 [1,3]
utils.differenceNew(a, b)
```

### Properties

Properties that are currently available on the plugin:

 - ```utils.jquery.extend``` - jqeury的extend函数
 - ```utils.tool.deepCopy``` - 深拷贝
 - ```utils.tool.debounce``` - 防抖
 - ```utils.tool.throttle"``` - 限流
 - ```utils.tool.getBrowserInfo``` - 获取浏览器信息
 - ```utils.tree.translateDataToTree``` - 该方法用于将有父子关系的数组转换成树形结构的数组

### Questions, bugs

 - Create [an issue](https://github.com/N-feng/nfeng-utils/issues) or ping me on twitter [@nfeng](https://twitter.com/imnfeng)

