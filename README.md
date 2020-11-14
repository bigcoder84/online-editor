# online-editor

online-editor是一个富文本转HTML工具。

最近在工作中遇到一个问题，产品经理需要让我将接近800字的说明放到页面的一个Dialog中，由于HTML无法保证原有的格式，所以不能无法复制到代码。然后突发奇想想到了使用富文本转成HTML，但是发现市面上貌似没有类似的工具可以使用，自己就借助 [wangEditor](https://github.com/wangeditor-team/wangEditor/) 富文本组件实现了一个简单的富文本转HTML工具。

在线地址：http://editor.bigcoder.cn

## 安装依赖
```
npm install
```

### 编译运行（开发环境）
```
npm run serve
```

### 编译构建
```
npm run build
```
