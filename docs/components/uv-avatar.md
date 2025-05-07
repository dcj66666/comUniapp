# Avatar 头像

用于展示用户头像的组件，支持图片、文字头像、图标头像等形式。

## 基础用法

```vue
<template>
  <uv-avatar src="https://example.com/avatar.jpg"></uv-avatar>
</template>
```

## 头像形状

```vue
<template>
  <uv-avatar src="https://example.com/avatar.jpg" shape="circle"></uv-avatar>
  <uv-avatar src="https://example.com/avatar.jpg" shape="square"></uv-avatar>
</template>
```

## 头像尺寸

```vue
<template>
  <uv-avatar src="https://example.com/avatar.jpg" size="large"></uv-avatar>
  <uv-avatar src="https://example.com/avatar.jpg" size="default"></uv-avatar>
  <uv-avatar src="https://example.com/avatar.jpg" size="mini"></uv-avatar>
  <!-- 自定义尺寸 -->
  <uv-avatar src="https://example.com/avatar.jpg" :size="60"></uv-avatar>
</template>
```

## 文字头像

```vue
<template>
  <uv-avatar text="U"></uv-avatar>
  <uv-avatar text="张"></uv-avatar>
  <uv-avatar text="张三"></uv-avatar>
</template>
```

## 图标头像

```vue
<template>
  <uv-avatar icon="home"></uv-avatar>
  <uv-avatar icon="user" iconColor="#3c9cff"></uv-avatar>
</template>
```

## 自定义样式

```vue
<template>
  <uv-avatar src="https://example.com/avatar.jpg" customStyle="backgroundColor: #3c9cff"></uv-avatar>
  <uv-avatar text="张" textColor="#fff" bgColor="#3c9cff"></uv-avatar>
  <uv-avatar icon="user" iconColor="#fff" bgColor="#3c9cff"></uv-avatar>
</template>
```

## 徽标

```vue
<template>
  <uv-avatar src="https://example.com/avatar.jpg">
    <template #badge>
      <uv-badge count="9" :absolute="true" :offset="[20, 20]"></uv-badge>
    </template>
  </uv-avatar>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| src | 头像图片路径 | `string` | - |
| shape | 头像形状，可选值为 `circle`、`square` | `string` | `circle` |
| size | 头像尺寸，可选值为 `large`、`default`、`mini`，或数字自定义尺寸 | `string \| number` | `default` |
| mode | 图片裁剪模式，参考 uni-app image 组件 | `string` | `aspectFill` |
| text | 文字头像内容 | `string` | - |
| bgColor | 背景颜色 | `string` | `#c0c4cc` |
| color | 文字颜色 | `string` | `#ffffff` |
| fontSize | 文字大小 | `string \| number` | `18` |
| icon | 图标头像图标名称 | `string` | - |
| iconColor | 图标颜色 | `string` | `#ffffff` |
| iconSize | 图标大小 | `string \| number` | `18` |
| customStyle | 自定义样式，对象形式 | `object` | - |
| mpAvatar | 微信小程序头像，在微信小程序中，如果使用了open-data标签，需要传入此值以辅助设置头像大小 | `boolean` | `false` |
| randomBgColor | 是否使用随机背景色 | `boolean` | `false` |
| defaultUrl | 加载失败的默认头像 | `string` | - |
| colorIndex | 如果配置了randomBgColor为true，此为指定的颜色索引值 | `string \| number` | - |
| name | 组名，用于使用`uvAvatar`父组件的avatarGroup使用 | `string` | - |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击头像时触发 | event: Event |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义头像内容 |
| badge | 徽标 | 