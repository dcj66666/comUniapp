# Icon 图标

用于展示 icon 图标。

## 基础用法

```vue
<template>
  <uv-icon name="photo"></uv-icon>
  <uv-icon name="plus" color="#3c9cff"></uv-icon>
  <uv-icon name="setting" size="28"></uv-icon>
</template>
```

## 自定义图标

```vue
<template>
  <uv-icon name="/static/custom-icon.png" size="40"></uv-icon>
</template>
```

## 图标颜色

```vue
<template>
  <uv-icon name="heart" color="#f56c6c"></uv-icon>
  <uv-icon name="star" color="#3c9cff"></uv-icon>
  <uv-icon name="checkbox-mark" color="#5ac725"></uv-icon>
</template>
```

## 图标大小

```vue
<template>
  <uv-icon name="photo" size="22"></uv-icon>
  <uv-icon name="photo" size="30"></uv-icon>
  <uv-icon name="photo" size="40"></uv-icon>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| name | 图标名称或图片链接 | `string` | - |
| color | 图标颜色 | `string` | `#606266` |
| size | 图标大小 | `string \| number` | `16` |
| bold | 是否显示粗体 | `boolean` | `false` |
| index | 用于在点击图标时，区分是哪一个图标被点击 | `string \| number` | - |
| hover-class | 图标按下去的样式类，用法同 uni 的 `hover-class` | `string` | - |
| custom-prefix | 自定义字体图标库前缀 | `string` | `uicon` |
| label | 图标右侧/下方的文字 | `string` | - |
| label-pos | 图标右侧/下方文字的位置，可选值为 `right`、`bottom` | `string` | `right` |
| label-size | 图标右侧/下方的文字大小 | `string \| number` | `15` |
| label-color | 图标右侧/下方的文字颜色 | `string` | `#606266` |
| width | 图标宽度，单位默认为 `rpx` | `string \| number` | - |
| height | 图标高度，单位默认为 `rpx` | `string \| number` | - |
| top | 图标到顶部的距离，单位默认为 `rpx` | `string \| number` | `0` |
| stop | 是否阻止事件传播 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击图标时触发 | index: 传入的index值 |

### 内置图标

这里列出了组件内置的部分图标：

level, column, camera, play-right, pause, stop, tags, bookmark-fill, share-fill, setting, minus, close, reload, plus, circle-close, help, close-circle, arrow-up, arrow-down, arrow-left, arrow-right, heart, star, home, shopping-cart, bell, search, trash, warning, info, checkmark, checkbox-mark, etc.

如需查看更多图标，请访问组件库官网或查阅相关文档。 