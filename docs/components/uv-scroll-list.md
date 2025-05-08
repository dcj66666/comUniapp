# uv-scroll-list 横向滚动列表

## 介绍

横向滚动列表组件，用于展示一组水平滚动的内容，常用于商品分类、标签列表等场景。

## 基础用法

```vue
<template>
  <uv-scroll-list :list="list" @click="onClick">
    <template #default="{item}">
      <view class="scroll-item">
        <image :src="item.image" mode="aspectFill"></image>
        <text>{{ item.title }}</text>
      </view>
    </template>
  </uv-scroll-list>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          image: 'https://example.com/1.jpg',
          title: '分类1'
        },
        {
          image: 'https://example.com/2.jpg',
          title: '分类2'
        }
        // ... 更多数据
      ]
    }
  },
  methods: {
    onClick(item) {
      console.log('点击了：', item)
    }
  }
}
</script>

<style>
.scroll-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10rpx;
}
.scroll-item image {
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
}
.scroll-item text {
  font-size: 24rpx;
  margin-top: 10rpx;
}
</style>
```

## 自定义样式

```vue
<template>
  <uv-scroll-list
    :list="list"
    :indicatorWidth="50"
    :indicatorBarWidth="20"
    indicatorColor="#909399"
    indicatorActiveColor="#2979ff"
    :showIndicator="true"
  >
    <!-- 列表内容 -->
  </uv-scroll-list>
</template>
```

## 指示器位置

```vue
<template>
  <uv-scroll-list
    :list="list"
    indicatorPosition="topRight"
    :showIndicator="true"
  >
    <!-- 列表内容 -->
  </uv-scroll-list>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| list | 要渲染的数据列表 | Array | [] |
| indicatorWidth | 指示器整体的宽度，单位rpx | Number | 100 |
| indicatorBarWidth | 指示器小块的宽度，单位rpx | Number | 30 |
| showIndicator | 是否显示指示器 | Boolean | false |
| indicatorColor | 指示器非激活部分的颜色 | String | '#f2f2f2' |
| indicatorActiveColor | 指示器激活部分的颜色 | String | '#2979ff' |
| indicatorPosition | 指示器位置，可选值：topLeft/topCenter/topRight/bottomLeft/bottomCenter/bottomRight | String | 'bottomCenter' |
| scrollable | 是否可以滚动 | Boolean | true |
| interval | 自动滚动时间间隔，单位ms | Number | 3000 |
| duration | 滚动动画时长，单位ms | Number | 300 |
| circular | 是否循环滚动 | Boolean | false |
| autoplay | 是否自动滚动 | Boolean | false |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击列表项时触发 | item: 当前点击项的数据 |
| change | 滚动切换时触发 | index: 当前滚动到的索引 |

### Slots

| 名称 | 说明 | 参数 |
|------|------|------|
| default | 自定义列表项内容 | item: 当前项数据 |
| indicator | 自定义指示器 | - |

### 平台差异说明

| App（vue） | App（nvue） | H5 | 小程序 |
|------------|-------------|----|----|
| √ | √ | √ | √ | 