# uv-number-box 数字输入框

## 介绍

数字输入框组件，用于购物车商品数量、表单数量输入等场景。

## 基础用法

```vue
<template>
  <uv-number-box v-model="value" />
</template>

<script>
export default {
  data() {
    return {
      value: 1
    }
  }
}
</script>
```

## 设置步长

```vue
<template>
  <uv-number-box v-model="value" :step="2" />
</template>
```

## 设置限制

```vue
<template>
  <uv-number-box
    v-model="value"
    :min="1"
    :max="10"
    @overlimit="onOverlimit"
  />
</template>

<script>
export default {
  methods: {
    onOverlimit(type) {
      console.log(type) // 'min' 或 'max'
    }
  }
}
</script>
```

## 自定义大小

```vue
<template>
  <uv-number-box
    v-model="value"
    :size="28"
    :input-width="50"
  />
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| v-model | 输入值 | Number | 1 |
| min | 最小值 | Number | 1 |
| max | 最大值 | Number | 99999 |
| step | 步长 | Number | 1 |
| size | 组件整体大小，单位px | Number | 35 |
| inputWidth | 输入框宽度，单位px | Number | 35 |
| disabled | 是否禁用 | Boolean | false |
| disabledInput | 是否禁用输入框 | Boolean | false |
| asyncChange | 是否开启异步变更，开启后需要手动控制输入值 | Boolean | false |
| color | 图标颜色 | String | '#323233' |
| backgroundColor | 背景颜色 | String | '#f2f3f5' |
| iconSize | 图标大小，单位px | Number | 15 |
| decimalLength | 显示的小数位数 | Number | 0 |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 值改变时触发 | value: 当前值 |
| focus | 输入框聚焦时触发 | event: Event |
| blur | 输入框失焦时触发 | event: Event |
| overlimit | 点击不可用的按钮时触发 | type: 'min' 或 'max' | 