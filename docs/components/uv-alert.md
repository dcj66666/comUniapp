# uv-alert 警告框

## 介绍

警告框组件，用于展示重要的提示信息。

## 基础用法

```vue
<template>
  <uv-alert
    title="这是一条警告提示"
    type="warning"
  />
</template>
```

## 不同类型

```vue
<template>
  <!-- 主要提示 -->
  <uv-alert type="primary" title="主要提示" />
  
  <!-- 成功提示 -->
  <uv-alert type="success" title="成功提示" />
  
  <!-- 警告提示 -->
  <uv-alert type="warning" title="警告提示" />
  
  <!-- 错误提示 -->
  <uv-alert type="error" title="错误提示" />
</template>
```

## 可关闭的警告框

```vue
<template>
  <uv-alert
    title="可关闭的警告框"
    type="warning"
    closable
    @close="onClose"
  />
</template>

<script>
export default {
  methods: {
    onClose() {
      console.log('警告框已关闭')
    }
  }
}
</script>
```

## 带有辅助性文字介绍

```vue
<template>
  <uv-alert
    title="带有辅助性文字介绍"
    description="这是一段辅助性文字，可以用来补充说明"
    type="info"
  />
</template>
```

## 带有图标

```vue
<template>
  <uv-alert
    title="带有图标的警告框"
    type="success"
    show-icon
  />
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| title | 标题 | String | '' |
| type | 类型，可选值为 primary/success/warning/error/info | String | 'warning' |
| description | 辅助性文字 | String | '' |
| closable | 是否可关闭 | Boolean | false |
| showIcon | 是否显示图标 | Boolean | false |
| center | 文字是否居中 | Boolean | false |
| effect | 主题，可选值为 light/dark | String | 'light' |
| closeText | 关闭按钮自定义文本 | String | '' |
| customIcon | 自定义图标，传入图标组件 | String | '' |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| close | 关闭alert时触发 | - |

### Slots

| 名称 | 说明 |
|------|------|
| title | 自定义标题 |
| default | 自定义内容 |
| icon | 自定义图标 |
``` 