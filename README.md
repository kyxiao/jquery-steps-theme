# jquery-steps-theme

基于 Gulp4，使用 sass 为 [jquery-steps](https://github.com/rstaib/jquery-steps) 插件编写的一些主题样式，支持自定义拓展

目前写了 4 套样式 `.wizard`（可省略）、`.wizard-round`、`.wizard-tabcontrol`、`.wizard-sub`，

使用方法很简单，参照原插件，设置 `cssClass` 就可以了

```js
import "jquery-steps-theme/dist/css/style.css";

$("#example-basic").steps({
  headerTag: "h3",
  bodyTag: "section",
  autoFocus: true,
  cssClass: "wizard-round",
  titleTemplate: '<span class="number">#index#</span> #title#',
  labels: {
    previous: "上一步",
    next: "下一步",
    finish: "完成",
  },
});
```

[查看Demo](https://kyxiao.github.io/jquery-steps-theme/)

## 运行

```bash
npm i
gulp
# http://localhost:8000
```
