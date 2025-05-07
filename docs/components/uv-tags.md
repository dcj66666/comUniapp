# Tag 标签

用于标记和分类的标签组件。

## 基础用法

```vue
<template>
  <uv-tags text="标签"></uv-tags>
</template>
```

## 标签类型

```vue
<template>
  <uv-tags text="标签" type="primary"></uv-tags>
  <uv-tags text="标签" type="success"></uv-tags>
  <uv-tags text="标签" type="warning"></uv-tags>
  <uv-tags text="标签" type="error"></uv-tags>
</template>
```

## 标签形状

```vue
<template>
  <uv-tags text="标签" shape="circle"></uv-tags>
  <uv-tags text="标签" shape="square"></uv-tags>
</template>
```

## 标签大小

```vue
<template>
  <uv-tags text="标签" size="mini"></uv-tags>
  <uv-tags text="标签" size="default"></uv-tags>
  <uv-tags text="标签" size="large"></uv-tags>
</template>
```

## 镂空标签

```vue
<template>
  <uv-tags text="标签" plain></uv-tags>
  <uv-tags text="标签" type="primary" plain></uv-tags>
  <uv-tags text="标签" type="success" plain></uv-tags>
  <uv-tags text="标签" type="warning" plain></uv-tags>
  <uv-tags text="标签" type="error" plain></uv-tags>
</template>
```

## 可关闭标签

```vue
<template>
  <uv-tags text="标签" closable @close="close"></uv-tags>
  <uv-tags text="标签" type="primary" closable @close="close"></uv-tags>
  <uv-tags text="标签" type="success" closable @close="close"></uv-tags>
</template>

<script>
export default {
  methods: {
    close() {
      console.log('标签被关闭')
    }
  }
}
</script>
```

## 显示图标

```vue
<template>
  <uv-tags text="标签" icon="home"></uv-tags>
  <uv-tags text="标签" type="primary" icon="star"></uv-tags>
</template>
```

## 自定义颜色

```vue
<template>
  <uv-tags text="标签" color="#8A2BE2"></uv-tags>
  <uv-tags text="标签" color="#8A2BE2" plain></uv-tags>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| type | 主题类型，可选值为 `primary`、`success`、`warning`、`error` | `string` | `default` |
| disabled | 是否禁用 | `boolean` | `false` |
| size | 标签大小，可选值为 `mini`、`default`、`large` | `string` | `default` |
| shape | 标签形状，可选值为 `circle`、`square` | `string` | `square` |
| text | 标签文字 | `string \| number` | - |
| bgColor | 背景颜色 | `string` | - |
| color | 文字颜色，会覆盖`type`属性 | `string` | - |
| borderColor | 标签的边框颜色 | `string` | - |
| closeColor | 关闭按钮的颜色 | `string` | - |
| name | 点击时返回的回调参数 | `string \| number` | - |
| plainFill | 空心填充时是否填充背景色 | `boolean` | `false` |
| plain | 是否空心 | `boolean` | `false` |
| closable | 是否可关闭，设置为true，会显示右上角关闭按钮 | `boolean` | `false` |
| show | 是否显示标签 | `boolean` | `true` |
| icon | 图标名称，如设置图标名称，则不会显示文字内容 | `string` | - |
| customStyle | 自定义样式，对象形式 | `object` | - |
| index | 标识tag的下标，点击时候会返回此值 | `string \| number` | - |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击标签时触发 | name: 标签name参数，index: 标签index参数 |
| close | 点击关闭按钮时触发 | name: 标签name参数，index: 标签index参数 | 