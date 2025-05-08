# Calendar 日历

日历组件，用于单个选择日期、多选日期、范围选择日期等，包含农历信息、自定义日期等功能。

## 基础用法

使用前需要先通过 ref 获取日历实例，然后调用 `open()` 方法打开日历。

```vue
<template>
  <view>
    <uv-button text="打开日历" @click="openCalendar"></uv-button>
    <uv-calendar 
      ref="calendar" 
      @confirm="calendarConfirm"
    ></uv-calendar>
  </view>
</template>

<script>
export default {
  methods: {
    openCalendar() {
      this.$refs.calendar.open();
    },
    calendarConfirm(e) {
      console.log('选择的日期:', e);
    }
  }
}
</script>
```

## 日期范围选择

通过设置 `mode` 为 `range` 来开启日期范围选择。

```vue
<template>
  <view>
    <uv-button text="选择日期范围" @click="openCalendar"></uv-button>
    <uv-calendar 
      ref="calendar" 
      mode="range"
      @confirm="calendarConfirm"
    ></uv-calendar>
  </view>
</template>

<script>
export default {
  methods: {
    openCalendar() {
      this.$refs.calendar.open();
    },
    calendarConfirm(e) {
      console.log('选择的日期范围:', e);
    }
  }
}
</script>
```

## 多选模式

通过设置 `mode` 为 `multiple` 来开启多选模式，可以选择多个不连续的日期。

```vue
<template>
  <view>
    <uv-button text="多选日期" @click="openCalendar"></uv-button>
    <uv-calendar 
      ref="calendar" 
      mode="multiple"
      @confirm="calendarConfirm"
    ></uv-calendar>
  </view>
</template>

<script>
export default {
  methods: {
    openCalendar() {
      this.$refs.calendar.open();
    },
    calendarConfirm(e) {
      console.log('选择的多个日期:', e);
    }
  }
}
</script>
```

## 自定义颜色

通过 `color` 属性设置日历主题颜色，会应用于底部按钮和选中的日期。

```vue
<template>
  <uv-calendar 
    ref="calendar" 
    color="#f56c6c"
  ></uv-calendar>
</template>
```

## 限制日期选择范围

通过 `minDate` 和 `maxDate` 属性可以限制可选择的日期范围。

```vue
<template>
  <uv-calendar 
    ref="calendar" 
    :minDate="minDate"
    :maxDate="maxDate"
  ></uv-calendar>
</template>

<script>
export default {
  data() {
    return {
      // 最小可选日期：当前日期
      minDate: new Date().getTime(),
      // 最大可选日期：当前日期后的30天
      maxDate: new Date().getTime() + 30 * 24 * 60 * 60 * 1000
    }
  }
}
</script>
```

## 自定义日期文本

通过 `formatter` 函数可以对日期进行自定义，添加额外的信息或样式。

```vue
<template>
  <uv-calendar 
    ref="calendar" 
    @mounted="setFormatter"
  ></uv-calendar>
</template>

<script>
export default {
  methods: {
    // 在组件挂载后设置formatter
    setFormatter() {
      // 必须通过ref调用setFormatter方法
      this.$refs.calendar.setFormatter((day) => {
        const date = new Date(day.date);
        // 将周末日期标记为红色
        if (date.getDay() === 0 || date.getDay() === 6) {
          day.bottomInfo = '周末';
          day.bottomInfoColor = '#f56c6c';
        }
        // 标记特定日期
        if (day.date === '2023-05-01') {
          day.topInfo = '劳动节';
          day.topInfoColor = '#3c9cff';
        }
        return day;
      });
    }
  }
}
</script>
```

## 显示农历

通过 `showLunar` 属性可以显示农历信息。

```vue
<template>
  <uv-calendar 
    ref="calendar" 
    showLunar
  ></uv-calendar>
</template>
```

## 日期范围限制天数

在日期范围选择模式下，通过 `maxRange` 属性可以限制最多可选的天数。

```vue
<template>
  <uv-calendar 
    ref="calendar" 
    mode="range"
    :maxRange="7"
    rangePrompt="最多只能选择7天"
  ></uv-calendar>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| title | 标题内容 | `string` | `日期选择` |
| showTitle | 是否显示标题 | `boolean` | `true` |
| showSubtitle | 是否显示副标题 | `boolean` | `true` |
| mode | 日期类型选择，可选值为 `single`、`multiple`、`range` | `string` | `single` |
| startText | mode=range时，第一个日期底部的提示文字 | `string` | `开始` |
| endText | mode=range时，最后一个日期底部的提示文字 | `string` | `结束` |
| customList | 自定义列表 | `array` | `[]` |
| color | 主题色，对底部按钮和选中日期有效 | `string` | `#3c9cff` |
| minDate | 最小的可选日期 | `string \| number` | `0` |
| maxDate | 最大可选日期 | `string \| number` | `0` |
| defaultDate | 默认选中的日期，mode为multiple或range是必须为数组格式 | `array \| string \| date \| null` | `null` |
| maxCount | mode=multiple时，最多可选多少个日期 | `string \| number` | `Number.MAX_SAFE_INTEGER` |
| rowHeight | 日期行高 | `string \| number` | `56` |
| formatter | 日期格式化函数 | `function \| null` | `null` |
| showLunar | 是否显示农历 | `boolean` | `false` |
| showMark | 是否显示月份背景色 | `boolean` | `true` |
| confirmText | 确定按钮的文字 | `string` | `确定` |
| confirmDisabledText | 确认按钮处于禁用状态时的文字 | `string` | `确定` |
| closeOnClickOverlay | 是否允许点击遮罩关闭日历 | `boolean` | `false` |
| closeOnClickConfirm | 是否允许点击确认按钮关闭日历 | `boolean` | `true` |
| readonly | 是否为只读状态，只读状态下禁止选择日期 | `boolean` | `false` |
| showConfirm | 是否展示确认按钮 | `boolean` | `true` |
| maxRange | 日期区间最多可选天数，默认无限制，mode = range时有效 | `number \| string` | `Number.MAX_SAFE_INTEGER` |
| rangePrompt | 范围选择超过最多可选天数时的提示文案，mode = range时有效 | `string` | - |
| showRangePrompt | 范围选择超过最多可选天数时，是否展示提示文案，mode = range时有效 | `boolean` | `true` |
| allowSameDay | 是否允许日期范围的起止时间为同一天，mode = range时有效 | `boolean` | `false` |
| round | 圆角值 | `boolean \| string \| number` | `0` |
| monthNum | 最多展示月份数量 | `number \| string` | `3` |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| confirm | 点击确定按钮时触发 | 选择日期相关的返回参数 |
| close | 日历关闭时触发 | - |
| change | 点击日期时触发 | 选中的日期信息 |

### Methods

| 方法名 | 说明 | 参数 |
|------|------|------|
| open | 打开日历弹窗 | - |
| close | 关闭日历弹窗 | - |
| setFormatter | 设置日期格式化函数 | Function(day) |

### formatter 回调参数

| 参数 | 说明 | 类型 |
|------|------|------|
| day | 日期信息 | `object` |

### day 对象结构

| 参数 | 说明 | 类型 |
|------|------|------|
| date | 日期，格式为YYYY-MM-DD | `string` |
| timestamp | 时间戳 | `number` |
| day | 日 | `number` |
| month | 月 | `number` |
| year | 年 | `number` |
| isToday | 是否为今天 | `boolean` |
| disable | 是否禁用 | `boolean` |
| lunar | 农历信息 | `object` |
| topInfo | 上方提示信息 | `string` |
| bottomInfo | 下方提示信息 | `string` |
| topInfoColor | 上方提示信息颜色 | `string` |
| bottomInfoColor | 下方提示信息颜色 | `string` | 