# DatetimePicker 日期时间选择器

日期时间选择器组件，支持多种日期时间格式选择，包括日期范围选择和快捷选项。

## 基础用法

基础的日期时间选择器用法。

```vue
<template>
  <view>
    <view class="button" @click="showPicker">
      <text>选择日期时间: {{ formatDate }}</text>
    </view>
    
    <dt-datetime-picker
      v-model="dateTime"
      mode="datetime"
      ref="dtPicker"
    />
  </view>
</template>

<script>
export default {
  data() {
    return {
      dateTime: new Date()
    }
  },
  computed: {
    formatDate() {
      if (!this.dateTime) return '请选择';
      const date = new Date(this.dateTime);
      return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
    }
  },
  methods: {
    showPicker() {
      this.$refs.dtPicker.show();
    }
  }
}
</script>

<style>
.button {
  margin: 20px;
  padding: 10px 15px;
  background-color: #f8f8f8;
  border-radius: 4px;
}
</style>
```

## 不同选择模式

通过 `mode` 属性可以设置不同的选择模式。

```vue
<template>
  <view>
    <view class="button" @click="showDatePicker">
      <text>选择日期: {{ formatDate }}</text>
    </view>
    
    <view class="button" @click="showTimePicker">
      <text>选择时间: {{ formatTime }}</text>
    </view>
    
    <view class="button" @click="showYearMonthPicker">
      <text>选择年月: {{ formatYearMonth }}</text>
    </view>
    
    <dt-datetime-picker
      v-model="date"
      mode="date"
      ref="datePicker"
    />
    
    <dt-datetime-picker
      v-model="time"
      mode="time"
      ref="timePicker"
    />
    
    <dt-datetime-picker
      v-model="yearMonth"
      mode="year-month"
      ref="yearMonthPicker"
    />
  </view>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
      time: new Date(),
      yearMonth: new Date()
    }
  },
  computed: {
    formatDate() {
      if (!this.date) return '请选择';
      const date = new Date(this.date);
      return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    },
    formatTime() {
      if (!this.time) return '请选择';
      const date = new Date(this.time);
      return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
    },
    formatYearMonth() {
      if (!this.yearMonth) return '请选择';
      const date = new Date(this.yearMonth);
      return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    }
  },
  methods: {
    showDatePicker() {
      this.$refs.datePicker.show();
    },
    showTimePicker() {
      this.$refs.timePicker.show();
    },
    showYearMonthPicker() {
      this.$refs.yearMonthPicker.show();
    }
  }
}
</script>
```

## 日期范围选择

通过设置 `mode` 为范围相关模式可选择日期范围。

```vue
<template>
  <view>
    <view class="button" @click="showRangePicker">
      <text>选择日期范围: {{ formatRange }}</text>
    </view>
    
    <dt-datetime-picker
      v-model="dateRange"
      mode="date-range"
      ref="rangePicker"
      @confirm="onRangeConfirm"
    />
  </view>
</template>

<script>
export default {
  data() {
    return {
      dateRange: [new Date(), new Date(new Date().getTime() + 86400000)]
    }
  },
  computed: {
    formatRange() {
      if (!this.dateRange || !Array.isArray(this.dateRange)) return '请选择';
      
      const formatDate = (date) => {
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
      };
      
      return `${formatDate(new Date(this.dateRange[0]))} 至 ${formatDate(new Date(this.dateRange[1]))}`;
    }
  },
  methods: {
    showRangePicker() {
      this.$refs.rangePicker.show();
    },
    onRangeConfirm(e) {
      console.log('日期范围选择结果:', e);
    }
  }
}
</script>
```

## 快捷选项

通过 `quickOptions` 属性可以设置快捷选项。

```vue
<template>
  <view>
    <view class="button" @click="showQuickPicker">
      <text>带快捷选项的选择器: {{ formatDate }}</text>
    </view>
    
    <dt-datetime-picker
      v-model="dateTime"
      mode="datetime"
      ref="quickPicker"
      :quickOptions="quickOptions"
    />
  </view>
</template>

<script>
export default {
  data() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    return {
      dateTime: new Date(),
      quickOptions: [
        { label: '今天', value: today },
        { label: '昨天', value: yesterday },
        { label: '明天', value: tomorrow },
        { label: '一周后', value: new Date(today.getTime() + 7 * 86400000) }
      ]
    }
  },
  computed: {
    formatDate() {
      if (!this.dateTime) return '请选择';
      const date = new Date(this.dateTime);
      return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
    }
  },
  methods: {
    showQuickPicker() {
      this.$refs.quickPicker.show();
    }
  }
}
</script>
```

## 设置年份范围

通过 `startYear` 和 `endYear` 属性可以设置可选择的年份范围。

```vue
<template>
  <view>
    <view class="button" @click="showYearRangePicker">
      <text>自定义年份范围: {{ formatDate }}</text>
    </view>
    
    <dt-datetime-picker
      v-model="date"
      mode="date"
      ref="yearRangePicker"
      :startYear="2010"
      :endYear="2030"
    />
  </view>
</template>

<script>
export default {
  data() {
    return {
      date: new Date()
    }
  },
  computed: {
    formatDate() {
      if (!this.date) return '请选择';
      const date = new Date(this.date);
      return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    }
  },
  methods: {
    showYearRangePicker() {
      this.$refs.yearRangePicker.show();
    }
  }
}
</script>
```

## 显示秒选择

通过 `showSeconds` 属性可以设置是否显示秒选择。

```vue
<template>
  <view>
    <view class="button" @click="showSecondsPicker">
      <text>显示秒选择: {{ formatTime }}</text>
    </view>
    
    <dt-datetime-picker
      v-model="time"
      mode="time"
      ref="secondsPicker"
      :showSeconds="true"
    />
  </view>
</template>

<script>
export default {
  data() {
    return {
      time: new Date()
    }
  },
  computed: {
    formatTime() {
      if (!this.time) return '请选择';
      const date = new Date(this.time);
      return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
    }
  },
  methods: {
    showSecondsPicker() {
      this.$refs.secondsPicker.show();
    }
  }
}
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| value/v-model | 绑定值 | `Date/Array/String/Number` | - |
| mode | 选择器类型 | `String` | `datetime` |
| title | 选择器标题 | `String` | `选择时间` |
| showSeconds | 是否显示秒选择 | `Boolean` | `false` |
| startYear | 可选择的起始年份 | `Number` | 当前年份-5 |
| endYear | 可选择的结束年份 | `Number` | 当前年份+5 |
| quickOptions | 快捷选项配置 | `Array` | `[]` |
| height | 选择器高度 | `Number` | `264` |

### mode 可选值

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

### quickOptions 配置

`quickOptions` 的配置格式如下：

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
| change | 选择器值改变时触发 | 当前选择的值 |
| confirm | 点击确认按钮时触发 | 当前选择的值 |
| cancel | 点击取消按钮时触发 | - |

### Methods

| 方法名 | 说明 | 参数 |
|------|------|------|
| show | 显示选择器 | 可选，显示时设置的初始值 |
| hide | 隐藏选择器 | - | 