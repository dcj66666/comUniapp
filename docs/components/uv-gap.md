# Gap 间隔

用于块级元素之间的间距，可设置间隙的大小和背景色。

## 基础用法

```vue
<template>
  <view>
    <view class="content">内容</view>
    <uv-gap height="20" bgColor="#f3f4f6"></uv-gap>
    <view class="content">内容</view>
  </view>
</template>
```

## 自定义高度

```vue
<template>
  <uv-gap height="10"></uv-gap>
  <uv-gap height="30"></uv-gap>
  <uv-gap height="50"></uv-gap>
</template>
```

## 自定义背景色

```vue
<template>
  <uv-gap height="20" bgColor="#3c9cff"></uv-gap>
  <uv-gap height="20" bgColor="#f3f4f6"></uv-gap>
  <uv-gap height="20" bgColor="#fff"></uv-gap>
</template>
```

## 自定义上下边距

```vue
<template>
  <uv-gap height="20" marginTop="20" marginBottom="20"></uv-gap>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| bgColor | 背景颜色 | `string` | `transparent` |
| height | 间隔高度，单位默认为rpx | `string \| number` | `20` |
| marginTop | 与上一个元素的间隔距离，单位默认为rpx | `string \| number` | `0` |
| marginBottom | 与下一个元素的间隔距离，单位默认为rpx | `string \| number` | `0` |
| customStyle | 自定义样式，对象形式 | `object` | - | 