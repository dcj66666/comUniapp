# uv-notify 消息通知

## 介绍

消息通知组件，用于页面顶部消息通知、活动提醒等场景。

## 基础用法

```vue
<template>
  <uv-notify
    v-model="show"
    type="primary"
    message="这是一条通知消息"
  />
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>
```

## 通知类型

```vue
<template>
  <!-- 主要通知 -->
  <uv-notify type="primary" message="主要通知" />
  
  <!-- 成功通知 -->
  <uv-notify type="success" message="成功通知" />
  
  <!-- 警告通知 -->
  <uv-notify type="warning" message="警告通知" />
  
  <!-- 错误通知 -->
  <uv-notify type="error" message="错误通知" />
</template>
```

## 自定义样式

```vue
<template>
  <uv-notify
    message="自定义样式"
    color="#fff"
    background="#ad0000"
  />
</template>
```

## 自定义时长

```vue
<template>
  <uv-notify
    message="自定义时长"
    :duration="5000"
  />
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| v-model | 是否显示通知 | Boolean | false |
| type | 通知类型，可选值为 primary/success/warning/error | String | 'primary' |
| message | 展示文案 | String | '' |
| duration | 展示时长(ms)，值为 0 时，通知不会消失 | Number | 3000 |
| color | 字体颜色 | String | '' |
| background | 背景颜色 | String | '' |
| fontSize | 字体大小，单位px | Number | 14 |
| safeAreaInsetTop | 是否留出顶部安全距离（状态栏高度） | Boolean | false |
| top | 距离顶部的距离，单位px | Number | 0 |
| zIndex | 通知栏层级 | Number | 9999 |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| open | 通知展示时触发 | - |
| close | 通知关闭时触发 | - |
| click | 点击通知时触发 | event: Event |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义通知内容 |

### 方法

通过 this.$uv.notify 调用

```js
// 显示通知
this.$uv.notify('提示内容')

// 显示成功通知
this.$uv.notify.success('成功通知')

// 显示自定义配置通知
this.$uv.notify({
  type: 'warning',
  message: '警告通知',
  duration: 5000
}) 