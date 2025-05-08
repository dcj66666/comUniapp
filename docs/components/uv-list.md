# uv-list 列表

## 介绍

列表组件，用于展示一组数据，支持上拉加载和下拉刷新。

## 基础用法

```vue
<template>
  <uv-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <uv-list-item
      v-for="item in list"
      :key="item.id"
      :title="item.title"
    />
  </uv-list>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    }
  },
  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push({
            id: this.list.length + 1,
            title: `列表项 ${this.list.length + 1}`
          })
        }
        // 加载状态结束
        this.loading = false
        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 1000)
    }
  }
}
</script>
```

## 下拉刷新

```vue
<template>
  <uv-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
    @refresh="onRefresh"
    :enablePullRefresh="true"
  >
    <uv-list-item
      v-for="item in list"
      :key="item.id"
      :title="item.title"
    />
  </uv-list>
</template>

<script>
export default {
  methods: {
    onRefresh() {
      // 清空列表数据
      this.list = []
      // 重新加载数据
      this.onLoad()
    }
  }
}
</script>
```

## 错误提示

```vue
<template>
  <uv-list
    v-model="loading"
    :error="error"
    error-text="请求失败，点击重试"
    @load="onLoad"
  >
    <uv-list-item
      v-for="item in list"
      :key="item.id"
      :title="item.title"
    />
  </uv-list>
</template>
```

## API

### List Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| v-model | 是否处于加载状态 | Boolean | false |
| finished | 是否已加载完成 | Boolean | false |
| error | 是否加载失败 | Boolean | false |
| offset | 滚动条与底部距离小于 offset 时触发 load 事件 | Number | 300 |
| loading-text | 加载过程中的提示文案 | String | '加载中...' |
| finished-text | 加载完成后的提示文案 | String | '' |
| error-text | 加载失败后的提示文案 | String | '' |
| enablePullRefresh | 是否启用下拉刷新 | Boolean | false |
| immediateCheck | 是否在初始化时立即检查是否需要加载更多 | Boolean | true |

### List Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| load | 滚动条与底部距离小于 offset 时触发 | - |
| refresh | 下拉刷新时触发 | - |
| scroll | 滚动时触发 | { scrollTop: 距离顶部位置 } |

### ListItem Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| title | 标题 | String | '' |
| desc | 描述信息 | String | '' |
| thumb | 左侧图片 | String | '' |
| arrow | 是否显示右侧箭头 | Boolean | false |
| clickable | 是否开启点击反馈 | Boolean | false |
| border | 是否显示下边框 | Boolean | true |

### ListItem Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击时触发 | event: Event |

### ListItem Slots

| 名称 | 说明 |
|------|------|
| title | 自定义标题 |
| desc | 自定义描述信息 |
| thumb | 自定义左侧图片 |
| extra | 自定义右侧内容 | 