# uv-picker 选择器

## 介绍

选择器组件，支持单列、多列选择。

## 基础用法

### 单列选择器

```vue
<template>
  <uv-picker
    :show="show"
    :columns="columns"
    @confirm="onConfirm"
    @cancel="onCancel"
  />
</template>

<script>
export default {
  data() {
    return {
      show: false,
      columns: ['选项1', '选项2', '选项3']
    }
  },
  methods: {
    onConfirm(value) {
      console.log('选中值：', value)
      this.show = false
    },
    onCancel() {
      this.show = false
    }
  }
}
</script>
```

### 多列选择器

```vue
<template>
  <uv-picker
    :show="show"
    :columns="columns"
    @confirm="onConfirm"
    @cancel="onCancel"
  />
</template>

<script>
export default {
  data() {
    return {
      show: false,
      columns: [
        ['杭州', '宁波', '温州'],
        ['上城区', '下城区', '江干区']
      ]
    }
  }
}
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| show | 是否显示选择器 | Boolean | false |
| columns | 对象数组，配置每一列显示的数据 | Array | [] |
| title | 顶部标题 | String | '' |
| confirmText | 确认按钮文字 | String | '确认' |
| cancelText | 取消按钮文字 | String | '取消' |
| loading | 是否显示加载状态 | Boolean | false |
| itemHeight | 选项高度 | Number | 44 |
| visibleItemCount | 可见的选项个数 | Number | 5 |
| defaultIndex | 单列选择时，默认选中项的索引 | Number/Array | 0 |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| confirm | 点击确认按钮时触发 | value: 选中值，index: 选中值对应的索引 |
| cancel | 点击取消按钮时触发 | - |
| change | 选项改变时触发 | value: 选中值，index: 选中值对应的索引 |

### Methods

| 方法名 | 说明 | 参数 |
|--------|------|------|
| setColumnValues | 设置对应列的选项 | columnIndex: 列序号，values: 选项数组 |
