# uv-vtabs 纵向标签页

## 介绍

纵向标签页组件，用于在左右两侧进行内容切换展示。常用于分类选择、目录导航等场景。

## 基础用法

```vue
<template>
  <uv-vtabs
    v-model="activeTab"
    :tabs="tabs"
    @change="onChange"
  >
    <uv-vtabs-content
      v-for="(item, index) in tabs"
      :key="index"
      :tab-index="index"
    >
      {{ item.content }}
    </uv-vtabs-content>
  </uv-vtabs>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      tabs: [
        { title: '标签1', content: '内容1' },
        { title: '标签2', content: '内容2' },
        { title: '标签3', content: '内容3' }
      ]
    }
  },
  methods: {
    onChange(index) {
      console.log('当前选中标签：', index)
    }
  }
}
</script>
```

## 自定义样式

```vue
<template>
  <uv-vtabs
    v-model="activeTab"
    :tabs="tabs"
    activeColor="#07c160"
    inactiveColor="#666666"
    lineColor="#07c160"
    :tabWidth="100"
  >
    <!-- 标签页内容 -->
  </uv-vtabs>
</template>
```

## 徽标提示

```vue
<template>
  <uv-vtabs v-model="activeTab" :tabs="tabs">
    <template #tab="{ tab, index }">
      <text>{{ tab.title }}</text>
      <uv-badge v-if="tab.badge" :content="tab.badge" />
    </template>
  </uv-vtabs>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { title: '标签1', badge: '5' },
        { title: '标签2', badge: '新' },
        { title: '标签3' }
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
| v-model | 当前选中标签的索引值 | Number | 0 |
| tabs | 标签页数据 | Array | [] |
| tabWidth | 标签栏宽度，单位px | Number | 80 |
| activeColor | 选中标签的颜色 | String | '#2979ff' |
| inactiveColor | 未选中标签的颜色 | String | '#666666' |
| lineColor | 指示线颜色 | String | '#2979ff' |
| lineWidth | 指示线宽度，单位px | Number | 3 |
| lineHeight | 指示线高度，单位px | Number | 20 |
| scrollable | 是否可滚动 | Boolean | true |
| duration | 动画时长，单位秒 | Number | 0.3 |
| sticky | 是否使用粘性布局 | Boolean | false |
| offsetTop | 粘性布局时距离顶部的距离，单位px | Number | 0 |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 切换标签时触发 | index: 当前选中标签的索引值 |
| click | 点击标签时触发 | index: 当前点击标签的索引值 |
| scroll | 滚动时触发 | { scrollTop: 距离顶部位置, isFixed: 是否吸顶 } |

### Slots

| 名称 | 说明 | 参数 |
|------|------|------|
| default | 标签页内容插槽 | - |
| tab | 自定义标签内容 | { tab: 标签对象, index: 标签索引, active: 是否选中 } |

### Tabs 数据结构

| 键名 | 说明 | 类型 |
|------|------|------|
| title | 标题 | String |
| disabled | 是否禁用 | Boolean |
| badge | 徽标内容 | String/Number | 