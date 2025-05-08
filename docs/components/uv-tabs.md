# Tabs 标签页

标签页组件，用于在不同的内容区域之间进行切换。

## 基础用法

```vue
<template>
  <uv-tabs :list="list" @change="change"></uv-tabs>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { name: '关注' },
        { name: '推荐' },
        { name: '电影' },
        { name: '科技' }
      ]
    }
  },
  methods: {
    change(index) {
      console.log('当前选中的标签索引：', index)
    }
  }
}
</script>
```

## 自定义样式

通过 `activeStyle` 和 `inactiveStyle` 属性可以分别设置激活和非激活状态的标签样式。

```vue
<template>
  <uv-tabs
    :list="list"
    :activeStyle="{ color: '#f56c6c', fontWeight: 'bold' }"
    :inactiveStyle="{ color: '#909399' }"
  ></uv-tabs>
</template>
```

## 不可滚动

默认情况下，当标签数量较多时，标签栏可以横向滚动。通过设置 `scrollable` 为 `false`，可以禁止滚动，标签会平分所有宽度。

```vue
<template>
  <uv-tabs :list="list" :scrollable="false"></uv-tabs>
</template>
```

## 徽标提示

通过在list数组中设置badge属性，可以在标签右上角显示徽标。

```vue
<template>
  <uv-tabs :list="list"></uv-tabs>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { name: '关注' },
        { name: '推荐', badge: { isDot: true } },
        { name: '电影', badge: { value: 5 } },
        { name: '科技', badge: { value: 99, max: 99 } }
      ]
    }
  }
}
</script>
```

## 禁用标签

通过在list数组中设置disabled属性，可以禁用某个标签。

```vue
<template>
  <uv-tabs :list="list"></uv-tabs>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { name: '关注' },
        { name: '推荐' },
        { name: '电影', disabled: true },
        { name: '科技' }
      ]
    }
  }
}
</script>
```

## 自定义滑块样式

通过 `lineWidth`、`lineHeight` 和 `lineColor` 属性可以自定义底部滑块的样式。

```vue
<template>
  <uv-tabs
    :list="list"
    lineColor="#f56c6c"
    :lineWidth="30"
    :lineHeight="6"
  ></uv-tabs>
</template>
```

## 配合swiper使用

可以搭配swiper组件实现内容区域滑动切换的效果。

```vue
<template>
  <view>
    <uv-tabs :list="list" :current="current" @change="tabsChange"></uv-tabs>
    <swiper
      :current="current"
      @change="swiperChange"
      :style="{ height: '300px' }"
    >
      <swiper-item v-for="(item, index) in list" :key="index">
        <view class="swiper-item">
          {{ item.name }}的内容区域
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { name: '关注' },
        { name: '推荐' },
        { name: '电影' },
        { name: '科技' }
      ],
      current: 0
    }
  },
  methods: {
    tabsChange(index) {
      this.current = index
    },
    swiperChange(e) {
      this.current = e.detail.current
    }
  }
}
</script>

<style>
.swiper-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #f8f8f8;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| list | 标签数组，元素为对象 | `array` | `[]` |
| duration | 滑块移动一次所需的时间，单位ms | `number` | `300` |
| lineColor | 滑块颜色 | `string` | `#3c9cff` |
| activeStyle | 菜单选中时的样式 | `string \| object` | `{ color: '#303133' }` |
| inactiveStyle | 菜单非选中时的样式 | `string \| object` | `{ color: '#606266' }` |
| lineWidth | 滑块长度，单位px | `string \| number` | `20` |
| lineHeight | 滑块高度，单位px | `string \| number` | `3` |
| lineBgSize | 滑块背景显示大小，当滑块背景设置为图片时使用 | `string` | `cover` |
| itemStyle | 菜单item的样式 | `string \| object` | `{ height: '44px' }` |
| scrollable | 菜单是否可滚动 | `boolean` | `true` |
| current | 当前选中标签的索引 | `string \| number` | `0` |
| keyName | 从list元素对象中读取的键名 | `string` | `name` |
| customStyle | 自定义外部样式 | `string \| object` | - |

### list数组对象属性

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| name | 标签名称 | `string` | - |
| disabled | 是否禁用标签 | `boolean` | `false` |
| badge | 徽标配置，参考uv-badge组件 | `object` | - |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 标签改变时触发 | index: 当前选中标签的索引 |
| click | 点击标签时触发 | index: 点击的标签索引 |

### Slots

| 名称 | 说明 |
|------|------|
| left | 标签左侧内容 |
| right | 标签右侧内容 | 