# Paging 分页

分页组件，基于优秀的 z-paging 组件进行封装，用于处理分页加载、下拉刷新、上拉加载更多等功能。

## 基础用法

基础的分页列表示例。

```vue
<template>
  <dt-paging ref="paging" @query="queryList">
    <view v-for="(item, index) in paging.dataList" :key="index" class="item">
      <text>{{ item.title }}</text>
    </view>
  </dt-paging>
</template>

<script>
export default {
  data() {
    return {
      // 使用refs引用paging组件
      paging: null
    }
  },
  onLoad() {
    this.paging = this.$refs.paging;
  },
  methods: {
    // 分页查询
    queryList(pageNo, pageSize) {
      // 模拟请求
      return new Promise((resolve) => {
        setTimeout(() => {
          let data = [];
          for (let i = 0; i < pageSize; i++) {
            const index = (pageNo - 1) * pageSize + i + 1;
            data.push({
              id: index,
              title: '列表项' + index
            });
          }
          // 模拟没有更多数据的情况
          if (pageNo >= 3) {
            // 没有更多数据了
            this.paging.completeByNoMore(data, true);
          } else {
            // 还有更多数据
            this.paging.complete(data);
          }
          resolve();
        }, 800);
      });
    }
  }
}
</script>

<style>
.item {
  padding: 24rpx;
  margin: 10rpx 20rpx;
  background-color: #f8f8f8;
  border-radius: 8rpx;
}
</style>
```

## 下拉刷新

通过配置 `refresher-enabled` 开启下拉刷新功能。

```vue
<template>
  <dt-paging 
    ref="paging" 
    @query="queryList"
    :refresher-enabled="true"
    :refresher-default-style="false"
    use-custom-refresher
  >
    <!-- 自定义下拉刷新 -->
    <template #refresher>
      <view class="custom-refresher">
        <view class="indicator">
          <text>{{ refresherStatus }}</text>
        </view>
      </view>
    </template>
    
    <!-- 列表内容 -->
    <view v-for="(item, index) in paging.dataList" :key="index" class="item">
      <text>{{ item.title }}</text>
    </view>
  </dt-paging>
</template>

<script>
export default {
  data() {
    return {
      paging: null,
      refresherStatus: '下拉刷新'
    }
  },
  onLoad() {
    this.paging = this.$refs.paging;
  },
  methods: {
    queryList(pageNo, pageSize) {
      // 实现同基础用法
    }
  },
  watch: {
    'paging.refresherStatus'(val) {
      switch (val) {
        case 1:
          this.refresherStatus = '下拉刷新';
          break;
        case 2:
          this.refresherStatus = '松开立即刷新';
          break;
        case 3:
          this.refresherStatus = '正在刷新...';
          break;
        case 4:
          this.refresherStatus = '刷新完成';
          break;
      }
    }
  }
}
</script>

<style>
.custom-refresher {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.indicator {
  color: #666;
  font-size: 28rpx;
}
</style>
```

## 空数据展示

通过 `empty-view` 插槽可以自定义空数据展示。

```vue
<template>
  <dt-paging ref="paging" @query="queryEmptyList">
    <!-- 自定义空数据 -->
    <template #empty>
      <view class="empty-view">
        <image src="/static/empty.png" mode="aspectFit" class="empty-image"></image>
        <text class="empty-text">暂无数据</text>
        <button class="refresh-btn" size="mini" @click="refreshList">刷新</button>
      </view>
    </template>
    
    <!-- 列表内容 -->
    <view v-for="(item, index) in paging.dataList" :key="index" class="item">
      <text>{{ item.title }}</text>
    </view>
  </dt-paging>
</template>

<script>
export default {
  data() {
    return {
      paging: null
    }
  },
  onLoad() {
    this.paging = this.$refs.paging;
  },
  methods: {
    queryEmptyList(pageNo, pageSize) {
      // 返回空数据
      setTimeout(() => {
        this.paging.complete([]);
      }, 500);
    },
    refreshList() {
      this.paging.reload();
    }
  }
}
</script>

<style>
.empty-view {
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.empty-image {
  width: 120rpx;
  height: 120rpx;
  margin-bottom: 20rpx;
}
.empty-text {
  font-size: 28rpx;
  color: #999;
  margin-bottom: 30rpx;
}
.refresh-btn {
  font-size: 24rpx;
  color: #666;
  background-color: #f5f5f5;
}
</style>
```

## 自定义加载更多

通过 `loading-more` 插槽可以自定义加载更多区域。

```vue
<template>
  <dt-paging 
    ref="paging" 
    @query="queryList"
  >
    <!-- 自定义加载更多视图 -->
    <template #loadingMore="{ status }">
      <view class="custom-loading-more">
        <view v-if="status === 'loading'">
          <text>努力加载中...</text>
        </view>
        <view v-else-if="status === 'noMore'">
          <text>没有更多数据了</text>
        </view>
        <view v-else>
          <text>上拉加载更多</text>
        </view>
      </view>
    </template>
    
    <!-- 列表内容 -->
    <view v-for="(item, index) in paging.dataList" :key="index" class="item">
      <text>{{ item.title }}</text>
    </view>
  </dt-paging>
</template>

<script>
export default {
  data() {
    return {
      paging: null
    }
  },
  onLoad() {
    this.paging = this.$refs.paging;
  },
  methods: {
    queryList(pageNo, pageSize) {
      // 实现同基础用法
    }
  }
}
</script>

<style>
.custom-loading-more {
  width: 100%;
  height: 60rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24rpx;
  color: #999;
  padding: 20rpx 0;
}
</style>
```

## 使用虚拟列表

对于大量数据的情况，可以开启虚拟列表功能提高性能。

```vue
<template>
  <dt-paging 
    ref="paging" 
    @query="queryLargeList"
    use-virtual-list
    :virtual-list-props="{
      cellKey: 'id',  // 数据的唯一id字段名
      cellHeight: 80, // 列表项的高度，单位px
      bufferHeight: 500 // 列表缓冲区高度
    }"
  >
    <view 
      v-for="(item, index) in paging.virtualList" 
      :key="item.id" 
      class="virtual-item"
      :style="{ height: '80px' }"
    >
      <text>{{ item.title }}</text>
      <text class="sub-text">{{ item.desc }}</text>
    </view>
  </dt-paging>
</template>

<script>
export default {
  data() {
    return {
      paging: null
    }
  },
  onLoad() {
    this.paging = this.$refs.paging;
  },
  methods: {
    queryLargeList(pageNo, pageSize) {
      // 模拟生成大量数据
      return new Promise((resolve) => {
        setTimeout(() => {
          let data = [];
          for (let i = 0; i < pageSize; i++) {
            const index = (pageNo - 1) * pageSize + i + 1;
            data.push({
              id: index,
              title: '虚拟列表项' + index,
              desc: '这是一个使用虚拟列表渲染的列表项，可以高效处理大量数据'
            });
          }
          
          // 模拟总共有1000条数据
          if ((pageNo - 1) * pageSize + pageSize >= 1000) {
            this.paging.completeByNoMore(data, true);
          } else {
            this.paging.complete(data);
          }
          resolve();
        }, 500);
      });
    }
  }
}
</script>

<style>
.virtual-item {
  padding: 24rpx;
  margin: 10rpx 20rpx;
  background-color: #f8f8f8;
  border-radius: 8rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.sub-text {
  font-size: 24rpx;
  color: #999;
  margin-top: 10rpx;
}
</style>
```

## 聊天记录模式

聊天记录通常是倒序加载且不需要下拉刷新，可以通过配置 `auto-show-back-to-top` 实现此类需求。

```vue
<template>
  <dt-paging 
    ref="paging" 
    @query="queryChatList"
    :refresher-enabled="false"
    :auto-clean-list-when-reload="false"
    use-chat-record-mode
    :auto-show-back-to-top="true"
  >
    <view v-for="(item, index) in paging.dataList" :key="index" class="chat-item">
      <view :class="['chat-content', item.isSelf ? 'self' : 'other']">
        <text>{{ item.content }}</text>
      </view>
    </view>
  </dt-paging>
</template>

<script>
export default {
  data() {
    return {
      paging: null,
      allChatList: [] // 模拟聊天记录数据
    }
  },
  onLoad() {
    this.paging = this.$refs.paging;
    
    // 模拟生成聊天记录数据
    for (let i = 1; i <= 100; i++) {
      this.allChatList.push({
        id: i,
        content: '这是第' + i + '条聊天消息',
        isSelf: i % 3 === 0,
        time: new Date().getTime() - (100 - i) * 60000
      });
    }
  },
  methods: {
    queryChatList(pageNo, pageSize) {
      return new Promise((resolve) => {
        setTimeout(() => {
          // 倒序获取聊天记录
          const startIndex = this.allChatList.length - pageNo * pageSize;
          const endIndex = this.allChatList.length - (pageNo - 1) * pageSize;
          
          let currentPageData = [];
          if (startIndex < 0) {
            // 已经没有更多历史记录了
            currentPageData = this.allChatList.slice(0, endIndex);
            this.paging.completeByNoMore(currentPageData, true);
          } else {
            currentPageData = this.allChatList.slice(startIndex, endIndex);
            this.paging.complete(currentPageData);
          }
          resolve();
        }, 500);
      });
    },
    
    // 模拟发送新消息
    sendMessage(content) {
      const newMsg = {
        id: this.allChatList.length + 1,
        content: content,
        isSelf: true,
        time: new Date().getTime()
      };
      this.allChatList.push(newMsg);
      
      // 追加到现有列表
      this.paging.completeByNoMore([newMsg, ...this.paging.dataList], false);
    }
  }
}
</script>

<style>
.chat-item {
  padding: 20rpx;
  display: flex;
  flex-direction: column;
}
.chat-content {
  max-width: 70%;
  padding: 20rpx;
  border-radius: 10rpx;
  font-size: 28rpx;
}
.self {
  align-self: flex-end;
  background-color: #a0cfff;
  color: #303133;
}
.other {
  align-self: flex-start;
  background-color: #f8f8f8;
  color: #303133;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| default-page-no | 自定义初始pageNo | `Number` | `1` |
| default-page-size | 自定义pageSize | `Number` | `15` |
| paging-style | z-paging的样式 | `Object` | - |
| auto | z-paging mounted后自动调用reload方法 | `Boolean` | `true` |
| refresher-enabled | 是否开启自定义下拉刷新 | `Boolean` | `true` |
| use-custom-refresher | 是否使用自定义的下拉刷新 | `Boolean` | `true` |
| refresher-default-style | 自定义下拉刷新默认样式 | `Boolean` | `true` |
| auto-hide-keyboard-when-reload | reload时自动隐藏键盘 | `Boolean` | `true` |
| auto-clean-list-when-reload | reload时立即自动清空原list | `Boolean` | `true` |
| use-chat-record-mode | 使用聊天记录模式 | `Boolean` | `false` |
| auto-show-back-to-top | 自动显示返回顶部按钮 | `Boolean` | `false` |
| use-virtual-list | 是否使用虚拟列表 | `Boolean` | `false` |
| virtual-list-props | 虚拟列表配置 | `Object` | - |
| auto-scroll-to-top-when-reload | reload时自动滚动到顶部 | `Boolean` | `true` |
| show-refresher-when-reload | 列表刷新时自动显示下拉刷新view | `Boolean` | `false` |
| auto-hide-loading-after-first-loaded | 第一次加载后自动隐藏loading slot | `Boolean` | `true` |
| empty-view-text | 空数据图文字内容 | `String` | `暂无数据` |
| show-loading-more-when-reload | 列表刷新时显示加载更多view | `Boolean` | `false` |
| loading-more-enabled | 是否启用加载更多 | `Boolean` | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| query | 查询列表数据 | `(pageNo, pageSize)` |
| listChange | 分页渲染的数组改变 | `list` |
| refresherRefresh | 自定义下拉刷新被触发 | - |
| refresherRestore | 自定义下拉刷新被复位 | - |
| loadingMoreLoading | 加载更多中 | - |
| loadingMoreComplete | 加载更多完成 | - |
| loadingMoreNoMore | 没有更多数据了 | - |
| scrolltolower | 滚动到底部 | `event` |
| backToTopClick | 点击了返回顶部按钮 | `(handler)` |

### Methods

| 方法名 | 说明 | 参数 |
|------|------|------|
| reload | 重新加载分页数据，pageNo恢复为默认值 | `(animate)` |
| refresh | 刷新列表数据，pageNo和pageSize不会重置 | - |
| complete | 请求结束(成功) | `(data, success)` |
| completeByNoMore | 请求结束(成功)，自行判断是否有更多数据 | `(data, noMore, success)` |
| completeByTotal | 请求结束(成功)，通过total判断是否有更多数据 | `(data, total, success)` |
| completeLoading | 处理完成loading状态 | - |
| clean | 清空分页数据 | - |
| refreshToPage | 刷新列表数据至指定页 | `(pageNo)` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 列表内容 |
| refresher | 自定义下拉刷新view |
| loading | 自定义页面加载view |
| empty | 自定义空数据view |
| loadingMore | 自定义底部加载更多view |
| backToTop | 自定义返回顶部view | 