# Image 图片

用于展示图片，支持懒加载、加载中状态、加载失败状态等。

## 基础用法

```vue
<template>
  <uv-image src="https://example.com/image.jpg" width="200" height="200"></uv-image>
</template>
```

## 填充模式

```vue
<template>
  <uv-image src="https://example.com/image.jpg" width="200" height="200" mode="aspectFill"></uv-image>
  <uv-image src="https://example.com/image.jpg" width="200" height="200" mode="widthFix"></uv-image>
  <uv-image src="https://example.com/image.jpg" width="200" height="200" mode="heightFix"></uv-image>
</template>
```

## 图片形状

```vue
<template>
  <uv-image src="https://example.com/image.jpg" width="200" height="200" shape="circle"></uv-image>
  <uv-image src="https://example.com/image.jpg" width="200" height="200" radius="10"></uv-image>
</template>
```

## 加载中

```vue
<template>
  <uv-image src="https://example.com/image.jpg" width="200" height="200" loading></uv-image>
</template>
```

## 加载失败

```vue
<template>
  <uv-image src="https://example.com/error.jpg" width="200" height="200" error-icon="photo"></uv-image>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| src | 图片链接 | `string` | - |
| mode | 图片裁剪、缩放模式 | `string` | `aspectFill` |
| width | 图片宽度 | `string \| number` | `300` |
| height | 图片高度 | `string \| number` | `225` |
| shape | 图片形状，可选值为 `square`、`circle` | `string` | `square` |
| radius | 圆角大小，单位默认为 `rpx` | `string \| number` | `0` |
| loading-icon | 加载中的图标，或者小图片 | `string` | `photo` |
| error-icon | 加载失败的图标，或者小图片 | `string` | `error-circle` |
| show-loading | 是否显示加载中状态 | `boolean` | `true` |
| show-error | 是否显示加载错误状态 | `boolean` | `true` |
| fade | 是否需要淡入效果 | `boolean` | `true` |
| webp | 只支持网络资源，只对微信小程序有效 | `boolean` | `false` |
| duration | 搭配 `fade` 参数使用，控制淡入效果的过渡时间 | `string \| number` | `500` |
| bg-color | 背景颜色，用于深色页面显示浅色图片时，不会产生灰色阴影 | `string` | `#f3f4f6` |
| lazy-load | 是否懒加载，仅针对微信小程序、App、百度小程序、字节跳动小程序有效 | `boolean` | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击图片时触发 | event: Event |
| error | 图片加载失败时触发 | event: Event |
| load | 图片加载成功时触发 | event: { width, height }, 图片宽高信息 | 