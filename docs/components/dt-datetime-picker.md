# DateTimePicker 日期时间选择器

用于选择日期和时间的组件，支持日期、时间、日期时间三种模式。

## 基础用法

```vue
<template>
  <dt-datetime-picker
    v-model="value"
    mode="datetime"
    title="选择时间"
  />
</template>

<script>
export default {
  data() {
    return {
      value: new Date()
    }
  }
}
</script>
```

## 不同模式

### 日期选择

```vue
<dt-datetime-picker
  v-model="date"
  mode="date"
  title="选择日期"
/>
```

### 时间选择

```vue
<dt-datetime-picker
  v-model="time"
  mode="time"
  title="选择时间"
/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model | 绑定值 | `Date` | - |
| mode | 选择器类型，可选值为 `date`、`time`、`datetime` | `string` | `datetime` |
| title | 标题 | `string` | - |
| min-date | 可选的最小日期 | `Date` | 十年前 |
| max-date | 可选的最大日期 | `Date` | 十年后 |
| formatter | 选项格式化函数 | `(type, value) => value` | - |
| show-toolbar | 是否显示顶部工具栏 | `boolean` | `true` |
| loading | 是否显示加载状态 | `boolean` | `false` |
| item-height | 选项高度 | `number` | `44` |
| visible-item-count | 可见的选项个数 | `number` | `5` |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 当值变化时触发的事件 | 当前值 |
| confirm | 点击完成按钮时触发的事件 | 当前值 |
| cancel | 点击取消按钮时触发的事件 | - |

### Slots

| 名称 | 说明 |
|------|------|
| title | 自定义标题 |
| confirm | 自定义确认按钮文字 |
| cancel | 自定义取消按钮文字 |

## 示例

### 自定义格式化

```vue
<template>
  <dt-datetime-picker
    v-model="value"
    :formatter="formatter"
    title="选择时间"
  />
</template>

<script>
export default {
  data() {
    return {
      value: new Date()
    }
  },
  methods: {
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`
      }
      if (type === 'month') {
        return `${value}月`
      }
      if (type === 'day') {
        return `${value}日`
      }
      if (type === 'hour') {
        return `${value}时`
      }
      if (type === 'minute') {
        return `${value}分`
      }
      return value
    }
  }
}
</script>
```

### 限制日期范围

```vue
<template>
  <dt-datetime-picker
    v-model="value"
    :min-date="minDate"
    :max-date="maxDate"
    title="选择时间"
  />
</template>

<script>
export default {
  data() {
    return {
      value: new Date(),
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 11, 31)
    }
  }
}
</script>
``` 