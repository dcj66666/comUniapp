# Text 文本

用于显示文本内容，支持文本类型、大小、颜色等属性自定义。

## 基础用法

```vue
<template>
  <uv-text text="这是一段文本"></uv-text>
</template>
```

## 主题颜色

```vue
<template>
  <uv-text text="主色文本" type="primary"></uv-text>
  <uv-text text="成功文本" type="success"></uv-text>
  <uv-text text="警告文本" type="warning"></uv-text>
  <uv-text text="错误文本" type="error"></uv-text>
</template>
```

## 文字大小

```vue
<template>
  <uv-text text="超大号文本" size="40"></uv-text>
  <uv-text text="大号文本" size="24"></uv-text>
  <uv-text text="正常文本" size="16"></uv-text>
  <uv-text text="小号文本" size="14"></uv-text>
</template>
```

## 显示图标

```vue
<template>
  <uv-text text="图标文本" icon="photo"></uv-text>
  <uv-text text="图标文本" icon="share" iconStyle="color: #3c9cff; font-size: 24px"></uv-text>
</template>
```

## 显示模式

```vue
<template>
  <uv-text text="这是一段很长的文本，会被省略" mode="price"></uv-text>
  <uv-text text="这是一段很长的文本，会被省略" mode="date"></uv-text>
  <uv-text text="这是一段很长的文本，会被省略" mode="phone"></uv-text>
  <uv-text text="这是一段很长的文本，会被省略" mode="name"></uv-text>
  <uv-text text="这是一段很长的文本，会被省略" mode="link"></uv-text>
</template>
```

## 文字截断

```vue
<template>
  <uv-text text="这是一段很长的文本，会被省略" lines="1"></uv-text>
  <uv-text text="这是一段很长的文本，会被省略，这是一段很长的文本，会被省略" lines="2"></uv-text>
</template>
```

## 点击事件

```vue
<template>
  <uv-text text="可点击的文本" @click="onClick"></uv-text>
</template>

<script>
export default {
  methods: {
    onClick() {
      console.log('文本被点击')
    }
  }
}
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| type | 文本主题，可选值为 `primary`、`success`、`warning`、`error`、`info` | `string` | - |
| show | 是否显示 | `boolean` | `true` |
| text | 显示的文本内容 | `string \| number` | - |
| prefixIcon | 前置图标 | `string` | - |
| suffixIcon | 后置图标 | `string` | - |
| iconStyle | 图标样式 | `string \| object` | - |
| mode | 文本处理的匹配模式，可选值为 `price`、`date`、`phone`、`name`、`link` | `string` | - |
| href | mode=link下，点击链接的跳转地址，要带上http(s) | `string` | - |
| format | 格式化规则 | `string \| function` | - |
| call | mode=phone时，点击文本是否拨打电话 | `boolean` | `false` |
| openType | 小程序的打开方式 | `string` | - |
| bold | 是否粗体 | `boolean` | `false` |
| block | 是否块状 | `boolean` | `false` |
| lines | 文本显示的行数，如果设置，超出此行数将会显示省略号 | `string \| number` | - |
| color | 文本颜色 | `string` | `#303133` |
| size | 字体大小 | `string \| number` | `15` |
| align | 文本对齐方式，可选值为 `left`、`center`、`right` | `string` | `left` |
| lineHeight | 文本行高 | `string \| number` | - |
| decoration | 文字装饰，可选值为 `none`、`underline`、`line-through` | `string` | `none` |
| margin | 外边距，设置格式同 CSS 的 margin | `string \| number` | `0` |
| padding | 内边距，设置格式同 CSS 的 padding | `string \| number` | `0` |
| family | 字体系列 | `string` | - |
| lineBreak | 是否换行显示 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击文本时触发 | event: Event | 