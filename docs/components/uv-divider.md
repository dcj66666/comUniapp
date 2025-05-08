# uv-divider 分割线

## 介绍

分割线组件，用于将内容分隔为多个区域，可自定义样式、文字等。

## 基础用法

```vue
<template>
  <uv-divider></uv-divider>
</template>
```

## 展示文字

```vue
<template>
  <uv-divider text="文本内容"></uv-divider>
</template>
```

## 自定义样式

```vue
<template>
  <uv-divider
    text="自定义样式"
    textSize="28"
    textColor="#2979ff"
    lineColor="#2979ff"
    :hairline="false"
  ></uv-divider>
</template>
```

## 自定义内容

```vue
<template>
  <uv-divider>
    <view class="custom-content">
      <uv-icon name="star-fill" color="#2979ff"></uv-icon>
      <text>自定义内容</text>
    </view>
  </uv-divider>
</template>

<style>
.custom-content {
  display: flex;
  align-items: center;
  justify-content: center;
}
.custom-content text {
  margin-left: 10rpx;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| text | 文本内容 | String | '' |
| textSize | 文本大小，单位rpx | String / Number | 26 |
| textColor | 文本颜色 | String | '#909399' |
| lineColor | 线条颜色 | String | '#dcdfe6' |
| hairline | 是否使用细线条 | Boolean | true |
| margin | 组件上下边距，单位rpx | String / Number | 20 |
| dashed | 是否使用虚线 | Boolean | false |
| direction | 水平还是垂直类型，可选值：horizontal/vertical | String | 'horizontal' |
| bgColor | 背景颜色 | String | '#ffffff' |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义内容 |

### 平台差异说明

| App（vue） | App（nvue） | H5 | 小程序 |
|------------|-------------|----|----|
| √ | √ | √ | √ | 