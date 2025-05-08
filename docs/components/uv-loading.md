# Loading 加载

加载组件，用于显示正在加载中的状态，一般用于提交表单或者操作需要等待的场景。

## 基础用法

通过 `show` 控制加载器的显示与隐藏。

```vue
<template>
  <view>
    <uv-loading show></uv-loading>
  </view>
</template>
```

## 加载文字

通过 `text` 属性设置加载中的文字提示。

```vue
<template>
  <view>
    <uv-loading show text="加载中..."></uv-loading>
  </view>
</template>
```

## 不同模式

通过 `mode` 属性设置加载的不同样式，mode有三种取值：
- `circle`：圆环加载
- `semi-circle`：半圆加载
- `circular`：圆点旋转加载

```vue
<template>
  <view class="example">
    <view class="item">
      <uv-loading show mode="circle" text="circle"></uv-loading>
    </view>
    <view class="item">
      <uv-loading show mode="semi-circle" text="semi-circle"></uv-loading>
    </view>
    <view class="item">
      <uv-loading show mode="circular" text="circular"></uv-loading>
    </view>
  </view>
</template>

<style>
.example {
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
}
.item {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
```

## 自定义颜色

通过 `color` 属性设置加载图标的颜色。

```vue
<template>
  <view>
    <uv-loading show color="#f56c6c" text="红色加载"></uv-loading>
  </view>
</template>
```

## 自定义大小

通过 `size` 属性设置加载图标的大小。

```vue
<template>
  <view class="example">
    <uv-loading show size="24" text="小尺寸"></uv-loading>
    <uv-loading show size="38" text="中尺寸"></uv-loading>
    <uv-loading show size="52" text="大尺寸"></uv-loading>
  </view>
</template>
```

## 垂直排列

默认情况下，图标和文字是水平排列的，通过设置 `vertical` 属性为 `true` 可以使图标和文字垂直排列。

```vue
<template>
  <view>
    <uv-loading show vertical text="垂直排列"></uv-loading>
  </view>
</template>
```

## 自定义文字样式

通过 `textSize` 和 `textColor` 分别设置文字的大小和颜色。

```vue
<template>
  <view>
    <uv-loading 
      show 
      text="自定义文字样式" 
      textSize="16" 
      textColor="#3c9cff"
    ></uv-loading>
  </view>
</template>
```

## 在按钮内显示

加载组件通常用于按钮的加载状态。

```vue
<template>
  <view>
    <uv-button 
      :loading="loading" 
      @click="showLoading"
      text="提交"
    ></uv-button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    }
  },
  methods: {
    showLoading() {
      this.loading = true;
      // 模拟请求
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    }
  }
}
</script>
```

## 全屏加载

通过自定义样式，可以实现全屏加载效果。

```vue
<template>
  <view>
    <uv-button text="显示全屏加载" @click="showFullScreenLoading"></uv-button>
    <view v-if="fullScreenLoading" class="full-screen-loading">
      <uv-loading 
        show 
        vertical 
        text="加载中..." 
        textColor="#ffffff" 
        color="#ffffff"
      ></uv-loading>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      fullScreenLoading: false
    }
  },
  methods: {
    showFullScreenLoading() {
      this.fullScreenLoading = true;
      // 模拟请求
      setTimeout(() => {
        this.fullScreenLoading = false;
      }, 2000);
    }
  }
}
</script>

<style>
.full-screen-loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| show | 是否显示加载 | `Boolean` | `true` |
| color | 加载图标的颜色 | `String` | `#c8c9cc` |
| size | 加载图标的大小，单位px | `String \| Number` | `34` |
| text | 加载文字内容 | `String` | - |
| textSize | 加载文字的大小 | `String \| Number` | `15` |
| textColor | 加载文字的颜色 | `String` | `#606266` |
| vertical | 文字和加载图标是否垂直排列 | `Boolean` | `false` |
| mode | 加载图标的样式，可选值为 `circle`、`semi-circle`、`circular` | `String` | `circle` |
| timingFunction | 加载动画的动画函数 | `String` | `ease-in-out` |
| duration | 加载动画执行周期时间，单位ms | `String \| Number` | `1200` |
| inactiveColor | 加载图标的非激活颜色 | `String` | - | 