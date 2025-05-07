# Cell 单元格

用于列表展示，可包含标题、描述、图标等内容。

## 基础用法

```vue
<template>
  <uv-cell title="单元格" value="内容"></uv-cell>
  <uv-cell title="单元格" value="内容" label="描述信息"></uv-cell>
</template>
```

## 单元格大小

```vue
<template>
  <uv-cell title="单元格" value="内容" size="large"></uv-cell>
  <uv-cell title="单元格" value="内容" size="normal"></uv-cell>
  <uv-cell title="单元格" value="内容" size="small"></uv-cell>
</template>
```

## 显示图标

```vue
<template>
  <uv-cell title="单元格" icon="star"></uv-cell>
  <uv-cell title="单元格" icon="heart" value="内容"></uv-cell>
</template>
```

## 显示箭头

```vue
<template>
  <uv-cell title="单元格" is-link></uv-cell>
  <uv-cell title="单元格" is-link value="内容"></uv-cell>
  <uv-cell title="单元格" is-link value="内容" arrow-direction="down"></uv-cell>
</template>
```

## 页面跳转

```vue
<template>
  <uv-cell title="单元格" is-link url="/pages/index/index"></uv-cell>
  <uv-cell title="单元格" is-link url="/pages/index/index" link-type="redirectTo"></uv-cell>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| title | 左侧标题 | `string` | - |
| value | 右侧内容 | `string` | - |
| label | 标题下方的描述信息 | `string` | - |
| icon | 左侧图标名称 | `string` | - |
| icon-color | 图标颜色 | `string` | - |
| icon-size | 图标大小 | `string \| number` | `16` |
| is-link | 是否显示右侧箭头 | `boolean` | `false` |
| arrow-direction | 箭头方向，可选值为 `left`、`up`、`down` | `string` | `right` |
| url | 点击后跳转的链接地址 | `string` | - |
| link-type | 链接跳转类型，可选值为 `navigateTo`、`redirectTo`、`switchTab`、`reLaunch` | `string` | `navigateTo` |
| size | 单元格大小，可选值为 `large`、`normal`、`small` | `string` | `normal` |
| center | 是否居中显示 | `boolean` | `false` |
| required | 是否显示表单必填星号 | `boolean` | `false` |
| clickable | 是否开启点击反馈 | `boolean` | `false` |
| border | 是否显示边框 | `boolean` | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击单元格时触发 | - |

### Slots

| 名称 | 说明 |
|------|------|
| title | 自定义标题 |
| value | 自定义右侧内容 |
| label | 自定义描述信息 |
| icon | 自定义图标 |
| right-icon | 自定义右侧图标 |

## 注意事项

1. 可以通过 `icon` 属性设置左侧图标
2. 可以通过 `is-link` 属性显示右侧箭头
3. 可以通过 `url` 和 `link-type` 属性设置跳转链接
4. 可以通过 `size` 属性设置单元格大小
5. 可以通过 `center` 属性设置内容居中
6. 可以通过 `required` 属性显示必填星号
7. 可以通过 `clickable` 属性开启点击反馈
8. 可以通过 `border` 属性控制是否显示边框 