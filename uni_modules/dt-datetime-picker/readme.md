# wht-datetime-picker

一个功能强大、灵活的日期时间选择器组件，支持多种日期时间格式选择，包括日期范围选择和快捷选项。

## 特性

- 支持多种日期时间格式选择
- 支持日期范围选择
- 支持自定义快捷选项
- 灵活的显示控制
- 支持年份范围设置
- 可自定义高度

## 安装方法

在插件市场中搜索并导入 `wht-datetime-picker`，或者直接通过插件市场导入。

## 基础用法

```vue
<template>
  <wht-datetime-picker
    v-model="dateTime"
    mode="datetime"
    title="选择时间"
  />
</template>

<script>
export default {
  data() {
    return {
      dateTime: new Date()
    }
  }
}
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value/v-model | 绑定值 | `Date/Array/String/Number` | - |
| mode | 选择器类型 | `String` | 'datetime' |
| title | 选择器标题 | `String` | '选择时间' |
| showSeconds | 是否显示秒选择 | `Boolean` | false |
| startYear | 可选择的起始年份 | `Number` | 当前年份-5 |
| endYear | 可选择的结束年份 | `Number` | 当前年份+5 |
| quickOptions | 快捷选项配置 | `Array` | [] |
| height | 选择器高度 | `Number` | 264 |

### Mode 可选值

| 值 | 说明 |
|------|------|
| datetime | 日期时间选择 |
| date | 仅日期选择 |
| time | 仅时间选择 |
| year | 仅年份选择 |
| year-month | 年月选择 |
| month | 仅月份选择 |
| day | 仅日期选择 |
| hour-minute | 时分选择 |
| hour-minute-second | 时分秒选择 |
| datetime-range | 日期时间范围选择 |
| date-range | 日期范围选择 |
| time-range | 时间范围选择 |

### 快捷选项配置

quickOptions 的配置格式如下：

```javascript
[
  {
    label: '今天',
    value: new Date()
  },
  {
    label: '昨天',
    value: // 昨天的日期
  }
  // ... 更多选项
]
```

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| confirm | 点击确定按钮时触发 | 当前选择的值 |
| cancel | 点击取消按钮时触发 | - |

## 示例

### 基础日期时间选择

```vue
<template>
  <wht-datetime-picker
    v-model="dateTime"
    mode="datetime"
    title="选择日期和时间"
  />
</template>
```

### 日期范围选择

```vue
<template>
  <wht-datetime-picker
    v-model="dateRange"
    mode="date-range"
    title="选择日期范围"
  />
</template>
```

### 带快捷选项的选择器

```vue
<template>
  <wht-datetime-picker
    v-model="dateTime"
    mode="datetime"
    :quickOptions="[
      { label: '今天', value: new Date() },
      { label: '昨天', value: getYesterday() }
    ]"
  />
</template>
```

## 注意事项

1. 在范围选择模式下，value 需要传入数组格式：[startDate, endDate]
2. quickOptions 中的每个选项必须包含 label 和 value 属性
3. 自定义年份范围时，确保 startYear 小于 endYear