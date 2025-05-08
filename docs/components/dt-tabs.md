# dt-tabs 标签页

## 介绍

标签页组件，用于在不同的内容区域之间进行切换。

## 基础用法

```vue
<template>
  <dt-tabs v-model="active">
    <dt-tab-item title="标签1">内容1</dt-tab-item>
    <dt-tab-item title="标签2">内容2</dt-tab-item>
    <dt-tab-item title="标签3">内容3</dt-tab-item>
  </dt-tabs>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>
```

## 自定义样式

```vue
<template>
  <dt-tabs v-model="active" :color="'#007AFF'">
    <dt-tab-item title="标签1">内容1</dt-tab-item>
    <dt-tab-item title="标签2">内容2</dt-tab-item>
    <dt-tab-item title="标签3">内容3</dt-tab-item>
  </dt-tabs>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| v-model | 当前选中标签的索引值 | Number | 0 |
| color | 标签选中时的颜色 | String | #2979ff |
| background | 标签栏背景色 | String | #ffffff |
| titleActiveColor | 标题选中时的颜色 | String | #2979ff |
| titleInactiveColor | 标题未选中时的颜色 | String | #666666 |
| lineWidth | 底部条宽度 | String/Number | 20 |
| lineHeight | 底部条高度 | String/Number | 3 |
| animated | 是否开启切换动画 | Boolean | true |
| swipeable | 是否可以滑动切换 | Boolean | true |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 切换标签时触发 | index: 当前选中标签的索引值 |
| click | 点击标签时触发 | index: 当前点击标签的索引值 |

### Slots

| 名称 | 说明 |
|------|------|
| default | 标签页内容 |
