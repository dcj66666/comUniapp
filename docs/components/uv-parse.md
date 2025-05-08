# uv-parse 富文本解析器

## 介绍

该组件一般用于富文本解析场景，比如解析文章内容，商品详情，带原生HTML标签的各类字符串等。

## 基础用法

```vue
<template>
  <uv-parse :content="htmlContent"></uv-parse>
</template>

<script>
export default {
  data() {
    return {
      htmlContent: '<div>这是一段HTML内容</div>'
    }
  }
}
</script>
```

## 自定义样式和配置

```vue
<template>
  <uv-parse
    :content="htmlContent"
    :lazyLoad="true"
    :selectable="true"
    :tagStyle="{
      p: 'color: red',
      img: 'width: 100%'
    }"
  ></uv-parse>
</template>
```

## 图片预览和链接处理

```vue
<template>
  <uv-parse
    :content="htmlContent"
    :previewImg="true"
    :copyLink="true"
    @imgtap="onImageTap"
    @linktap="onLinkTap"
  ></uv-parse>
</template>

<script>
export default {
  methods: {
    onImageTap(e) {
      console.log('点击了图片', e)
    },
    onLinkTap(e) {
      console.log('点击了链接', e)
    }
  }
}
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| content | 用于渲染的html字符串 | String | '' |
| containerStyle | 容器的样式 | String | '' |
| copyLink | 是否允许外部链接被点击时自动复制 | Boolean | true |
| domain | 主域名，用于拼接链接 | String | - |
| errorImg | 图片出错时的占位图链接 | String | '' |
| lazyLoad | 是否开启图片懒加载 | Boolean | false |
| loadingImg | 图片加载过程中的占位图链接 | String | '' |
| previewImg | 是否允许图片被点击时自动预览 | Boolean | true |
| showImgMenu | 是否允许图片被长按时显示菜单 | Boolean | true |
| tagStyle | 标签的默认样式 | Object | - |
| selectable | 是否开启长按复制 | Boolean / String | false |
| setTitle | 是否将title标签的内容设置到页面标题 | Boolean | true |
| useAnchor | 是否使用锚点链接 | Boolean / Number | false |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| load | dom结构加载完毕时触发 | - |
| ready | 所有图片加载完毕时触发 | - |
| imgtap | 图片被点击时触发 | event |
| linktap | 链接被点击时触发 | event |
| play | 音视频播放时触发 | event |
| error | 媒体加载出错时触发 | event |

### Methods

| 方法名 | 说明 | 参数 |
|--------|------|------|
| getText | 获取文本内容 | - |
| getRect | 获取内容大小和位置 | - |

### 平台差异说明

| App（vue） | App（nvue） | H5 | 小程序 |
|------------|-------------|----|----|
| √ | √ | √ | √ | 