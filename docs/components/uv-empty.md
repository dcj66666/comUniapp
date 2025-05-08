# Empty 空状态

空状态组件，用于表示内容为空或暂无数据的状态，提供各种场景下的图标选择。

## 基础用法

基础的空状态组件用法。

```vue
<template>
  <uv-empty text="暂无数据"></uv-empty>
</template>
```

## 不同场景图标

通过 `mode` 属性设置不同场景下的图标展示。

```vue
<template>
  <uv-empty mode="data" text="暂无数据"></uv-empty>
  <uv-empty mode="search" text="搜索结果为空"></uv-empty>
  <uv-empty mode="message" text="暂无消息"></uv-empty>
  <uv-empty mode="list" text="列表为空"></uv-empty>
  <uv-empty mode="network" text="网络错误"></uv-empty>
  <uv-empty mode="order" text="暂无订单"></uv-empty>
  <uv-empty mode="address" text="暂无地址"></uv-empty>
  <uv-empty mode="wifi" text="无网络连接"></uv-empty>
  <uv-empty mode="coupon" text="暂无优惠券"></uv-empty>
  <uv-empty mode="favor" text="暂无收藏"></uv-empty>
  <uv-empty mode="permission" text="无权限"></uv-empty>
  <uv-empty mode="history" text="无历史记录"></uv-empty>
  <uv-empty mode="news" text="无新闻"></uv-empty>
  <uv-empty mode="comment" text="暂无评论"></uv-empty>
  <uv-empty mode="page" text="页面不存在"></uv-empty>
</template>
```

## 自定义图标

通过 `icon` 属性可以自定义图标。

```vue
<template>
  <uv-empty 
    icon="/static/empty.png"
    text="自定义图片"
  ></uv-empty>
  
  <!-- 也可以使用内置图标 -->
  <uv-empty 
    icon="photo"
    text="使用内置图标"
  ></uv-empty>
</template>
```

## 自定义样式

通过各种样式属性自定义空状态组件的显示效果。

```vue
<template>
  <uv-empty 
    mode="search"
    text="自定义样式" 
    textColor="#909399"
    textSize="16"
    iconColor="#2979ff"
    iconSize="100"
    :width="200"
    :height="200"
    :marginTop="20"
  ></uv-empty>
</template>
```

## 添加操作按钮

结合插槽添加操作按钮的示例。

```vue
<template>
  <uv-empty mode="search" text="搜索结果为空">
    <view slot="bottom" class="slot-btn">
      <uv-button type="primary" size="small" text="重新搜索"></uv-button>
    </view>
  </uv-empty>
</template>

<style>
.slot-btn {
  margin-top: 20px;
}
</style>
```

## 在页面级别使用

在整个页面使用空状态组件。

```vue
<template>
  <view class="container">
    <uv-empty
      v-if="!hasData"
      mode="data"
      text="暂无数据"
      :marginTop="100"
    >
      <view slot="bottom" class="bottom-button">
        <uv-button type="primary" text="刷新" @click="refreshData"></uv-button>
      </view>
    </uv-empty>
    
    <view v-else class="content">
      <view v-for="(item, index) in dataList" :key="index" class="data-item">
        {{ item.name }}
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      hasData: false,
      dataList: []
    }
  },
  onLoad() {
    this.getData()
  },
  methods: {
    getData() {
      // 模拟获取数据
      setTimeout(() => {
        this.hasData = false
        this.dataList = []
      }, 500)
    },
    refreshData() {
      // 模拟刷新数据
      this.getData()
    }
  }
}
</script>

<style>
.container {
  width: 100%;
  min-height: 500rpx;
}
.bottom-button {
  margin-top: 30rpx;
}
.content {
  padding: 20rpx;
}
.data-item {
  padding: 20rpx;
  margin-bottom: 20rpx;
  background-color: #f8f8f8;
  border-radius: 8rpx;
}
</style>
```

## 作为组件内容为空的提示

在列表组件中使用空状态组件。

```vue
<template>
  <view class="list-container">
    <view class="list-header">
      <text class="list-title">我的收藏</text>
    </view>
    
    <view class="list-content">
      <template v-if="favorList.length > 0">
        <view v-for="(item, index) in favorList" :key="index" class="favor-item">
          <text>{{ item.name }}</text>
        </view>
      </template>
      <template v-else>
        <uv-empty 
          mode="favor" 
          text="暂无收藏内容"
          :marginTop="40"
          iconSize="80"
        ></uv-empty>
      </template>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      favorList: []
    }
  }
}
</script>

<style>
.list-container {
  background-color: #ffffff;
  border-radius: 8rpx;
  padding: 20rpx;
  margin: 20rpx;
  min-height: 400rpx;
}
.list-header {
  padding-bottom: 20rpx;
  border-bottom: 1px solid #eee;
}
.list-title {
  font-size: 32rpx;
  font-weight: bold;
}
.list-content {
  min-height: 300rpx;
  padding: 20rpx 0;
}
.favor-item {
  padding: 20rpx;
  border-bottom: 1px solid #eee;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| icon | 内置图标名称，或图片路径 | `String` | - |
| text | 提示文字 | `String` | - |
| textColor | 文字颜色 | `String` | `#c0c4cc` |
| textSize | 文字大小 | `String \| Number` | `14` |
| iconColor | 图标颜色 | `String` | `#c0c4cc` |
| iconSize | 图标大小 | `String \| Number` | `90` |
| mode | 选择预置的图标类型 | `String` | `data` |
| width | 图标宽度，单位px | `String \| Number` | `160` |
| height | 图标高度，单位px | `String \| Number` | `160` |
| show | 是否显示组件 | `Boolean` | `true` |
| marginTop | 组件距离上一个元素之间的距离，默认px单位 | `String \| Number` | `0` |

### mode 可选值

| 值 | 说明 |
|------|------|
| data | 数据为空 |
| search | 搜索结果为空 |
| message | 消息列表为空 |
| list | 列表为空 |
| address | 地址为空 |
| network | 网络错误 |
| order | 订单为空 |
| coupon | 优惠券为空 |
| favor | 收藏为空 |
| permission | 无权限 |
| history | 历史记录为空 |
| news | 新闻列表为空 |
| wifi | 无网络状态 |
| comment | 评论列表为空 |
| page | 页面不存在 |

### Slots

| 名称 | 说明 |
|------|------|
| default | 空状态内容 |
| bottom | 空状态底部内容，通常用于放置操作按钮 | 