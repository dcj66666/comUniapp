# uv-back-top 返回顶部

## 介绍

返回顶部组件，主要用于长页面中，一键返回页面顶部的场景。支持自定义图标、样式、滚动阈值等特性。

## 基础用法

```vue
<template>
  <view>
    <scroll-view scroll-y="true" @scroll="onScroll">
      <!-- 页面内容 -->
      <uv-back-top></uv-back-top>
    </scroll-view>
  </view>
</template>

<script>
export default {
  methods: {
    onScroll(e) {
      // 监听滚动事件
    }
  }
}
</script>
```

## 自定义样式

```vue
<template>
  <uv-back-top
    :scrollTop="scrollTop"
    :top="100"
    :bottom="100"
    :right="20"
    :mode="circle"
    :icon="custom-icon"
    :iconStyle="{ color: '#fff' }"
    :customStyle="{ backgroundColor: '#1989fa' }"
  ></uv-back-top>
</template>
```

## 自定义内容

```vue
<template>
  <uv-back-top :scrollTop="scrollTop">
    <view class="custom-back-top">
      <text>返回顶部</text>
    </view>
  </uv-back-top>
</template>

<style>
.custom-back-top {
  background-color: rgba(0, 0, 0, 0.3);
  padding: 10px;
  border-radius: 4px;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| scrollTop | 页面滚动距离 | Number | 0 |
| top | 距离页面顶部多少距离显示，单位px | Number | 400 |
| bottom | 按钮距离底部距离，单位px | Number | 100 |
| right | 按钮距离右侧距离，单位px | Number | 20 |
| zIndex | 组件层级 | Number | 9 |
| icon | 图标，可选值：arrow-upward/arrow-up/top/custom-icon | String | 'arrow-upward' |
| iconSize | 图标大小，单位px | Number | 19 |
| mode | 按钮形状，可选值：circle/square | String | 'circle' |
| duration | 滚动到顶部的动画时长，单位ms | Number | 300 |
| customStyle | 自定义样式对象 | Object | {} |
| iconStyle | 图标自定义样式 | Object | {} |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击按钮时触发 | event: Event |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义按钮内容 |

### 平台差异说明

| App（vue） | App（nvue） | H5 | 小程序 |
|------------|-------------|----|----|
| √ | √ | √ | √ | 