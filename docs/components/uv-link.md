# Link 链接

用于页面中跳转链接的按钮组件。

## 基础用法

```vue
<template>
  <uv-link href="https://www.example.com">默认链接</uv-link>
</template>
```

## 链接类型

```vue
<template>
  <uv-link href="https://www.example.com" type="primary">主要链接</uv-link>
  <uv-link href="https://www.example.com" type="success">成功链接</uv-link>
  <uv-link href="https://www.example.com" type="warning">警告链接</uv-link>
  <uv-link href="https://www.example.com" type="error">错误链接</uv-link>
  <uv-link href="https://www.example.com" type="info">信息链接</uv-link>
</template>
```

## 自定义样式

```vue
<template>
  <uv-link href="https://www.example.com" color="#19be6b" fontSize="20">自定义颜色和大小</uv-link>
  <uv-link href="https://www.example.com" text="自定义文本"></uv-link>
  <uv-link href="https://www.example.com" underLine>下划线</uv-link>
</template>
```

## 显示图标

```vue
<template>
  <uv-link href="https://www.example.com" icon="home">带图标的链接</uv-link>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| href | 链接地址，会用`uni.navigateTo`或`uni.switchTab`等进行跳转 | `string` | - |
| text | 链接文本 | `string` | - |
| icon | 链接图标 | `string` | - |
| type | 链接类型，可选值为 `primary`、`success`、`warning`、`error`、`info` | `string` | `primary` |
| size | 字体大小 | `string \| number` | `15` |
| color | 链接文字颜色 | `string` | - |
| fontSize | 字体大小 | `string \| number` | `15` |
| underLine | 是否显示下划线 | `boolean` | `false` |
| lineColor | 下划线颜色，默认同`color`参数颜色 | `string` | - |
| mpTips | 链接按下去的提示文字，只有`open-type`配置了才有效 | `string` | - |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击链接时触发 | event: Event |

### Slots

| 名称 | 说明 |
|------|------|
| default | 链接的文字内容 | 