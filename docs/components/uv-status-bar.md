# uv-status-bar 状态栏

## 介绍

状态栏组件主要用于适配不同设备的状态栏高度，可以适配iPhone、Android的状态栏，主要用于自定义导航栏的场景。

## 基础用法

```vue
<template>
  <view>
    <uv-status-bar></uv-status-bar>
    <view class="content">
      <!-- 页面内容 -->
    </view>
  </view>
</template>
```

## 自定义背景色

```vue
<template>
  <uv-status-bar bgColor="#2979ff"></uv-status-bar>
</template>
```

## 自定义内容

```vue
<template>
  <uv-status-bar>
    <view class="custom-content">
      <text>自定义状态栏内容</text>
    </view>
  </uv-status-bar>
</template>

<style>
.custom-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| bgColor | 背景颜色 | String | 'transparent' |
| customStyle | 自定义样式 | Object | {} |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义状态栏内容 |

### 平台差异说明

| App（vue） | App（nvue） | H5 | 小程序 |
|------------|-------------|----|----|
| √ | √ | √ | √ |

注意：H5端不显示状态栏，如果需要模拟状态栏，请自行添加一个固定高度的view。 