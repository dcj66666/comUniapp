# LoadingIcon 加载动画

加载动画组件，用于表示加载中的状态，目前用在 uv-load-more 加载更多和 switch 开关等组件的正在加载状态场景。

## 基础用法

```vue
<template>
  <uv-loading-icon></uv-loading-icon>
</template>
```

## 不同模式

通过 `mode` 属性设置加载动画的模式，有三种可选值：
- `circle`：圆形加载
- `spinner`：花朵状加载（默认）
- `semicircle`：半圆形加载

```vue
<template>
  <view class="example">
    <!-- 圆形加载 -->
    <view class="item">
      <uv-loading-icon mode="circle"></uv-loading-icon>
      <text class="title">circle</text>
    </view>
    
    <!-- 花朵状加载 -->
    <view class="item">
      <uv-loading-icon mode="spinner"></uv-loading-icon>
      <text class="title">spinner</text>
    </view>
    
    <!-- 半圆形加载 -->
    <view class="item">
      <uv-loading-icon mode="semicircle"></uv-loading-icon>
      <text class="title">semicircle</text>
    </view>
  </view>
</template>

<style>
.example {
  display: flex;
  justify-content: space-around;
}
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  margin-top: 10px;
  font-size: 14px;
}
</style>
```

## 自定义大小

通过 `size` 属性设置加载图标的大小。

```vue
<template>
  <view class="example">
    <uv-loading-icon size="18"></uv-loading-icon>
    <uv-loading-icon size="24"></uv-loading-icon>
    <uv-loading-icon size="36"></uv-loading-icon>
  </view>
</template>
```

## 自定义颜色

通过 `color` 属性设置加载图标的颜色。

```vue
<template>
  <view class="example">
    <uv-loading-icon color="#2979ff"></uv-loading-icon>
    <uv-loading-icon color="#f56c6c"></uv-loading-icon>
    <uv-loading-icon color="#5ac725"></uv-loading-icon>
  </view>
</template>
```

## 加载文字

通过 `text` 属性设置加载图标下方的提示文字。

```vue
<template>
  <uv-loading-icon text="加载中..."></uv-loading-icon>
</template>
```

## 文本颜色及大小

通过 `textColor` 和 `textSize` 属性分别设置文字的颜色和大小。

```vue
<template>
  <uv-loading-icon 
    text="加载中..." 
    textColor="#f56c6c" 
    textSize="16"
  ></uv-loading-icon>
</template>
```

## 垂直排列

通过 `vertical` 属性设置图标和文字垂直排列。

```vue
<template>
  <uv-loading-icon 
    text="加载中..." 
    vertical
  ></uv-loading-icon>
</template>
```

## 自定义动画

通过 `timingFunction` 和 `duration` 属性分别设置动画的过渡类型和执行周期时间。

```vue
<template>
  <view class="example">
    <uv-loading-icon timingFunction="ease-in"></uv-loading-icon>
    <uv-loading-icon timingFunction="linear" duration="1500"></uv-loading-icon>
    <uv-loading-icon timingFunction="ease-out" duration="800"></uv-loading-icon>
  </view>
</template>
```

## 显示/隐藏

通过 `show` 属性控制加载图标的显示状态。

```vue
<template>
  <view>
    <uv-button text="切换显示状态" @click="toggle"></uv-button>
    <uv-loading-icon :show="isShow" text="加载中..."></uv-loading-icon>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow;
    }
  }
}
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| show | 是否显示组件 | `Boolean` | `true` |
| color | 动画活动区域的颜色，只对 mode = flower 模式有效 | `String` | `#909193` |
| textColor | 提示文本的颜色 | `String` | `#909193` |
| vertical | 文字和图标是否垂直排列 | `Boolean` | `false` |
| mode | 模式选择，可选值为 `circle`、`spinner`、`semicircle` | `String` | `spinner` |
| size | 加载图标的大小，单位px | `String \| Number` | `24` |
| textSize | 文字大小 | `String \| Number` | `15` |
| textStyle | 文字样式 | `Object` | `{}` |
| text | 文字内容 | `String \| Number` | - |
| timingFunction | 动画模式，见[CSS animation-timing-function](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-timing-function) | `String` | `linear` |
| duration | 动画执行周期时间，单位ms | `String \| Number` | `1200` |
| inactiveColor | mode=circle时的暗边颜色 | `String` | - |
| customStyle | 定义需要用到的外部样式 | `Object` | - | 