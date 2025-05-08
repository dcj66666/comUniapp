# uv-waterfall 瀑布流

## 介绍

瀑布流组件，用于展示不规则的图片或商品列表，可以根据内容自动排列，实现瀑布流布局。

## 基础用法

```vue
<template>
  <uv-waterfall
    :list="list"
    @change="change"
  >
    <template #default="{item}">
      <view class="item">
        <image :src="item.image" mode="widthFix"></image>
        <view class="title">{{ item.title }}</view>
        <view class="price">¥{{ item.price }}</view>
      </view>
    </template>
  </uv-waterfall>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          image: 'https://example.com/1.jpg',
          title: '商品1',
          price: '99.00'
        },
        {
          image: 'https://example.com/2.jpg',
          title: '商品2',
          price: '199.00'
        }
        // ... 更多数据
      ]
    }
  },
  methods: {
    change(e) {
      console.log('布局完成', e)
    }
  }
}
</script>

<style>
.item {
  background-color: #ffffff;
  border-radius: 8rpx;
  margin: 10rpx;
  padding: 10rpx;
}
.title {
  font-size: 28rpx;
  margin-top: 10rpx;
}
.price {
  font-size: 32rpx;
  color: #ff0000;
  margin-top: 10rpx;
}
</style>
```

## 自定义列数和间距

```vue
<template>
  <uv-waterfall
    :list="list"
    :columnCount="3"
    :columnGap="20"
    :leftGap="20"
    :rightGap="20"
  >
    <!-- 内容插槽 -->
  </uv-waterfall>
</template>
```

## 加载更多

```vue
<template>
  <uv-waterfall
    :list="list"
    :loading="loading"
    :finished="finished"
    @scrolltolower="loadMore"
  >
    <!-- 内容插槽 -->
    <template #loading>
      <view class="loading">加载中...</view>
    </template>
    <template #finished>
      <view class="finished">没有更多了</view>
    </template>
  </uv-waterfall>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      page: 1
    }
  },
  methods: {
    async loadMore() {
      if (this.loading || this.finished) return
      this.loading = true
      // 模拟请求数据
      const res = await this.fetchData(this.page)
      this.list.push(...res.data)
      this.loading = false
      if (res.isEnd) {
        this.finished = true
      } else {
        this.page++
      }
    }
  }
}
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| list | 要渲染的数据列表 | Array | [] |
| columnCount | 瀑布流列数 | Number | 2 |
| columnGap | 列间距，单位rpx | Number | 10 |
| leftGap | 左边距，单位rpx | Number | 10 |
| rightGap | 右边距，单位rpx | Number | 10 |
| loading | 是否处于加载状态 | Boolean | false |
| finished | 是否已加载完成 | Boolean | false |
| idKey | 数据列表中唯一标识的键名 | String | 'id' |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 瀑布流布局完成时触发 | - |
| scrolltolower | 滚动到底部时触发 | - |
| itemClick | 点击项目时触发 | item: 当前点击的数据项 |

### Slots

| 名称 | 说明 | 参数 |
|------|------|------|
| default | 自定义每项内容 | item: 当前项数据 |
| loading | 自定义加载中提示内容 | - |
| finished | 自定义加载完成提示内容 | - |

### 平台差异说明

| App（vue） | App（nvue） | H5 | 小程序 |
|------------|-------------|----|----|
| √ | √ | √ | √ | 