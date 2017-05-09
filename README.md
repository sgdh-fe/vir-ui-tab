# vir-ui-tab

## 依赖安装

### npm

```sh
npm install Vir
```
### script 标签

```html
<script src="https://unpkg.com/vir"></script>
```

## 安装

### npm

```sh
npm install vir-ui-tab
```

### script 标签

```html
<script src="https://unpkg.com/vir-ui-tab"></script>
<!-- 全局变量 VirUiTab -->
```

## 基本使用

```js
const Tab = require('vir-ui-tab')(
/* 默认值
  {
    index : 0,
    eventType : 'click', // click or mouseover
    navSelector : 'ol > li',
    containerSelector : 'ul > li',
    navCurrentClass : 'cur',
    containerCurrentClass : 'cur'
  }
*/
)

var tab = new Tab({
  el: '.tab'
})
tab.$watch('state', function (result) {
  var index = result.value
  console.log('初始化完成', this.get('index'))
})

tab.$watch('index', function (result) {
  var index = result.value
  this.$$('ul > li').eq(index).html(index)
})



/*
  手动初始化首屏
  tab.set('index', 0, {
    force: true
  })
*/
```

## 例子

[base tab](http://htmlpreview.github.io/?https://github.com/sgdh-fe/vir-ui-tab/blob/master/examples/index.html)