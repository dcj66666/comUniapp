# uv-switch 开关

## 介绍

开关选择器，用于在打开和关闭状态之间进行切换。

## 基础用法

```vue
<template>
  <uv-switch v-model="checked" />
</template>

<script>
export default {
  data() {
    return {
      checked: false
    }
  }
}
</script>
```

## 自定义颜色

```vue
<template>
  <uv-switch
    v-model="checked"
    activeColor="#07c160"
    inactiveColor="#ee0a24"
  />
</template>
```

## 禁用状态

```vue
<template>
  <uv-switch v-model="checked" disabled />
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| v-model | 开关选中状态 | Boolean | false |
| disabled | 是否禁用 | Boolean | false |
| size | 开关尺寸，单位px | String/Number | 25 |
| activeColor | 打开时的背景色 | String | #2979ff |
| inactiveColor | 关闭时的背景色 | String | #ffffff |
| activeValue | 打开时的值 | Boolean/String/Number | true |
| inactiveValue | 关闭时的值 | Boolean/String/Number | false |
| loading | 是否显示加载中状态 | Boolean | false |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 开关状态改变时触发 | value: 开关选中状态 |
