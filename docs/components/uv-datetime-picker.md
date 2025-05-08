# uv-datetime-picker 日期时间选择器

## 介绍

日期时间选择器组件，支持选择年月日时分，可自定义日期时间范围、格式等。

## 基础用法

```vue
<template>
  <uv-datetime-picker
    v-model="show"
    :value="datetime"
    @confirm="onConfirm"
  />
</template>

<script>
export default {
  data() {
    return {
      show: false,
      datetime: ''
    }
  },
  methods: {
    onConfirm(value) {
      this.datetime = value
      this.show = false
    }
  }
}
</script>
```

## 选择日期时间

```vue
<template>
  <uv-datetime-picker
    v-model="show"
    :value="datetime"
    type="datetime"
    @confirm="onConfirm"
  />
</template>
```

## 选择时间

```vue
<template>
  <uv-datetime-picker
    v-model="show"
    :value="time"
    type="time"
    @confirm="onConfirm"
  />
</template>
```

## 自定义格式

```vue
<template>
  <uv-datetime-picker
    v-model="show"
    :value="datetime"
    format="YYYY年MM月DD日 HH时mm分"
    @confirm="onConfirm"
  />
</template>
```

## 设置时间范围

```vue
<template>
  <uv-datetime-picker
    v-model="show"
    :value="datetime"
    :min-date="minDate"
    :max-date="maxDate"
    @confirm="onConfirm"
  />
</template>

<script>
export default {
  data() {
    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 11, 31)
    }
  }
}
</script>
```

## 设置默认值

```vue
<template>
  <uv-datetime-picker
    v-model="show"
    :value="datetime"
    :default-date="new Date()"
    @confirm="onConfirm"
  />
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| v-model | 是否显示选择器 | Boolean | false |
| value | 选中的日期时间 | String | - |
| type | 选择器类型，可选值为 datetime/date/time | String | 'datetime' |
| minDate | 可选的最小日期 | Date | 十年前 |
| maxDate | 可选的最大日期 | Date | 十年后 |
| minHour | 可选的最小小时 | Number | 0 |
| maxHour | 可选的最大小时 | Number | 23 |
| minMinute | 可选的最小分钟 | Number | 0 |
| maxMinute | 可选的最大分钟 | Number | 59 |
| format | 日期格式化 | String | 'YYYY-MM-DD HH:mm' |
| defaultDate | 默认选中的日期 | Date | new Date() |
| title | 标题 | String | '' |
| confirmText | 确认按钮文字 | String | '确认' |
| cancelText | 取消按钮文字 | String | '取消' |
| showToolbar | 是否显示顶部栏 | Boolean | true |
| loading | 是否显示加载状态 | Boolean | false |
| filter | 选项过滤函数 | Function | - |
| formatter | 选项格式化函数 | Function | - |
| itemHeight | 选项高度 | Number | 44 |
| visibleItemCount | 可见的选项个数 | Number | 5 |
| showChinese | 是否显示中文年月日 | Boolean | false |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| confirm | 点击确认按钮时触发 | value: 当前选中的日期时间 |
| cancel | 点击取消按钮时触发 | - |
| change | 选项改变时触发 | { column: 改变的列索引, index: 选中项的索引, value: 选中项的值 } |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义整个顶部栏的内容 |
| title | 自定义标题内容 |

### 方法

| 方法名 | 说明 | 参数 |
|--------|------|------|
| getFormatValue | 获取格式化后的日期时间 | format: 格式化模板 |
| getPicker | 获取 Picker 实例，用于调用 Picker 的方法 | - | 