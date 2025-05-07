# DateTimePicker 日期时间选择器

用于选择日期和时间的组件。

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

### 自定义格式化

```vue
<dt-datetime-picker
  v-model="value"
  :formatter="formatter"
  title="选择时间"
/>

<script>
export default {
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
      return value
    }
  }
}
</script>
``` 