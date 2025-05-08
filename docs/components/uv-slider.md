# uv-slider 滑块

## 介绍

滑块组件，用于在给定的范围内选择一个值。

## 基础用法

```vue
<template>
  <uv-slider v-model="value" @change="onChange" />
</template>

<script>
export default {
  data() {
    return {
      value: 0
    }
  },
  methods: {
    onChange(value) {
      console.log('当前值：', value)
    }
  }
}
</script>
```

## 设置步长

```vue
<template>
  <uv-slider v-model="value" :step="5" />
</template>
```

## 自定义样式

```vue
<template>
  <uv-slider
    v-model="value"
    activeColor="#07c160"
    inactiveColor="#dcdee0"
    :block-size="24"
  />
</template>
```

## 显示当前值

```vue
<template>
  <uv-slider v-model="value" :showValue="true" />
</template>
```

## 设置范围

```vue
<template>
  <uv-slider v-model="value" :min="-50" :max="50" />
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| v-model | 当前进度百分比 | Number | 0 |
| min | 最小值 | Number | 0 |
| max | 最大值 | Number | 100 |
| step | 步长 | Number | 1 |
| disabled | 是否禁用滑块 | Boolean | false |
| showValue | 是否显示当前值 | Boolean | false |
| activeColor | 进度条激活态颜色 | String | '#2979ff' |
| inactiveColor | 进度条非激活态颜色 | String | '#c0c4cc' |
| blockSize | 滑块大小，单位px | Number | 18 |
| blockColor | 滑块颜色 | String | '#ffffff' |
| barHeight | 进度条高度，单位px | Number | 4 |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 进度变化时触发 | value: 当前进度值 |
| changing | 拖动过程中触发 | value: 当前进度值 |
| start | 开始拖动时触发 | - |
| end | 结束拖动时触发 | - | 