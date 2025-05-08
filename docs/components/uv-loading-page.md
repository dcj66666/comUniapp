# LoadingPage 加载页

加载页组件，是一个页面级的加载效果，可以在页面初始化数据等场景使用，与骨架屏有相似之处。

## 基础用法

加载页默认显示动画和文字，通过 `loading` 属性控制显示和隐藏。

```vue
<template>
  <view>
    <uv-loading-page loading></uv-loading-page>
    <view>页面内容</view>
  </view>
</template>
```

## 自定义加载文字

通过 `loadingText` 属性设置加载提示文字。

```vue
<template>
  <view>
    <uv-loading-page 
      loading 
      loadingText="数据加载中..."
    ></uv-loading-page>
  </view>
</template>
```

## 自定义文字颜色和大小

通过 `color` 属性设置文字颜色，`fontSize` 属性设置文字大小。

```vue
<template>
  <view>
    <uv-loading-page 
      loading 
      loadingText="数据加载中..."
      color="#f56c6c" 
      fontSize="18"
    ></uv-loading-page>
  </view>
</template>
```

## 自定义背景色

通过 `bgColor` 属性可以设置加载页的背景色。

```vue
<template>
  <view>
    <uv-loading-page 
      loading 
      loadingText="数据加载中..."
      bgColor="#f9f9f9"
    ></uv-loading-page>
  </view>
</template>
```

## 自定义加载图标

通过 `loadingMode` 属性设置加载动画的模式，有三种可选值：
- `circle`：圆形加载（默认）
- `spinner`：花朵状加载
- `semicircle`：半圆形加载

```vue
<template>
  <view>
    <uv-loading-page 
      loading 
      loadingText="正在加载..."
      loadingMode="spinner"
    ></uv-loading-page>
  </view>
</template>
```

## 自定义加载图标颜色和大小

通过 `loadingColor` 属性设置加载图标的颜色，`iconSize` 属性设置图标大小。

```vue
<template>
  <view>
    <uv-loading-page 
      loading 
      loadingText="正在加载..."
      loadingColor="#3c9cff"
      iconSize="32"
    ></uv-loading-page>
  </view>
</template>
```

## 使用图片替代加载动画

通过 `image` 属性可以设置图片替代默认的加载动画。

```vue
<template>
  <view>
    <uv-loading-page 
      loading 
      loadingText="正在加载..."
      image="/static/logo.png"
    ></uv-loading-page>
  </view>
</template>
```

## 异步关闭加载页

在实际应用中，通常需要在数据加载完成后关闭加载页面，可以通过控制 `loading` 属性达到此目的。

```vue
<template>
  <view>
    <uv-loading-page 
      :loading="isLoading" 
      loadingText="数据加载中..."
    ></uv-loading-page>
    <view v-if="!isLoading">
      <!-- 实际内容 -->
      <view>加载完成后的内容</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
      list: []
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      // 模拟异步请求
      setTimeout(() => {
        this.list = ['数据1', '数据2', '数据3'];
        // 数据加载完成后关闭加载页
        this.isLoading = false;
      }, 2000);
    }
  }
}
</script>
```

## 自定义过渡时间

通过 `duration` 属性可以设置关闭加载页时的过渡时间，单位为毫秒。

```vue
<template>
  <view>
    <uv-loading-page 
      :loading="isLoading" 
      loadingText="数据加载中..."
      duration="500"
    ></uv-loading-page>
  </view>
</template>
```

## 自定义内容插槽

通过默认插槽可以自定义加载页的内容。

```vue
<template>
  <view>
    <uv-loading-page :loading="isLoading">
      <view class="custom-content">
        <uv-icon name="photo" size="32" color="#3c9cff"></uv-icon>
        <text class="text">自定义加载提示</text>
        <text class="sub-text">请耐心等待...</text>
      </view>
    </uv-loading-page>
  </view>
</template>

<style>
.custom-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text {
  margin-top: 15px;
  font-size: 16px;
  color: #303133;
}
.sub-text {
  margin-top: 5px;
  font-size: 14px;
  color: #909399;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| loadingText | 提示内容 | `String \| Number` | - |
| image | 文字上方用于替换loading动画的图片 | `String` | - |
| loadingMode | 加载动画的模式，可选值为 `circle`、`spinner`、`semicircle` | `String` | `circle` |
| loading | 是否加载中 | `Boolean` | `false` |
| bgColor | 背景色 | `String` | `#fff` |
| color | 文字颜色 | `String` | `#C8C8C8` |
| fontSize | 文字大小 | `String \| Number` | `16` |
| iconSize | 图标大小 | `String \| Number` | `26` |
| loadingColor | 加载中图标的颜色，只能rgb或者十六进制颜色值 | `String` | `#C8C8C8` |
| duration | 过渡时间，单位ms | `String \| Number` | `300` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义加载页内容 | 