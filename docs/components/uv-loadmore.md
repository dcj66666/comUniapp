# Loadmore 加载更多

加载更多组件，用于列表加载更多数据的场景，有加载前、加载中、没有更多数据三种状态。

## 基础用法

加载更多组件的基本使用，通过 `status` 控制组件状态。

```vue
<template>
  <view>
    <view class="list">
      <view class="list-item" v-for="(item, index) in list" :key="index">
        列表项 {{item}}
      </view>
    </view>
    
    <uv-loadmore :status="status" @loadmore="loadmore"></uv-loadmore>
  </view>
</template>

<script>
export default {
  data() {
    return {
      status: 'loadmore', // 加载状态
      list: [1, 2, 3, 4, 5], // 列表数据
      page: 1, // 当前页码
      totalPage: 3 // 总页数
    }
  },
  methods: {
    loadmore() {
      // 改变状态为加载中
      this.status = 'loading';
      
      // 模拟请求
      setTimeout(() => {
        if(this.page < this.totalPage) {
          // 新增数据
          for(let i = 0; i < 5; i++) {
            this.list.push(this.list.length + 1);
          }
          // 页码加1
          this.page++;
          // 恢复加载更多状态
          this.status = 'loadmore';
        } else {
          // 没有更多了
          this.status = 'nomore';
        }
      }, 1000);
    }
  }
}
</script>

<style>
.list {
  padding: 15px;
}
.list-item {
  padding: 15px;
  margin-bottom: 10px;
  background-color: #f8f8f8;
  border-radius: 4px;
}
</style>
```

## 不同状态展示

通过 `status` 属性控制组件状态：
- `loadmore`：加载前的状态
- `loading`：加载中的状态
- `nomore`：没有更多的状态

```vue
<template>
  <view>
    <view class="example">
      <text class="title">加载前</text>
      <uv-loadmore status="loadmore"></uv-loadmore>
    </view>
    
    <view class="example">
      <text class="title">加载中</text>
      <uv-loadmore status="loading"></uv-loadmore>
    </view>
    
    <view class="example">
      <text class="title">没有更多</text>
      <uv-loadmore status="nomore"></uv-loadmore>
    </view>
  </view>
</template>

<style>
.example {
  margin: 20px 0;
}
.title {
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
  color: #909399;
  text-align: center;
}
</style>
```

## 自定义提示文字

通过 `loadmoreText`、`loadingText` 和 `nomoreText` 属性分别自定义三种状态下的提示文字。

```vue
<template>
  <view>
    <uv-loadmore 
      status="loadmore" 
      loadmoreText="点击加载更多"
    ></uv-loadmore>
    
    <uv-loadmore 
      status="loading" 
      loadingText="正在努力加载..."
    ></uv-loadmore>
    
    <uv-loadmore 
      status="nomore" 
      nomoreText="我是有底线的"
    ></uv-loadmore>
  </view>
</template>
```

## 自定义图标

通过 `icon` 属性控制是否显示加载中的图标，默认为 `true`。
通过 `loadingIcon` 属性设置加载中图标的样式，有三种可选值：
- `circle`：圆形加载
- `spinner`：花朵状加载（默认）
- `semicircle`：半圆形加载

```vue
<template>
  <view>
    <uv-loadmore 
      status="loading" 
      loadingIcon="circle"
    ></uv-loadmore>
    
    <uv-loadmore 
      status="loading" 
      loadingIcon="spinner"
    ></uv-loadmore>
    
    <uv-loadmore 
      status="loading" 
      loadingIcon="semicircle"
    ></uv-loadmore>
    
    <!-- 不显示图标 -->
    <uv-loadmore 
      status="loading" 
      :icon="false"
    ></uv-loadmore>
  </view>
</template>
```

## 自定义颜色和大小

通过 `color` 属性设置文字颜色，`fontSize` 设置文字大小，`iconSize` 设置图标大小，`iconColor` 设置图标颜色。

```vue
<template>
  <view>
    <uv-loadmore 
      status="loading" 
      color="#f56c6c" 
      fontSize="16" 
      iconSize="20"
      iconColor="#f56c6c"
    ></uv-loadmore>
  </view>
</template>
```

## 点状样式

通过设置 `isDot` 属性为 `true`，可以让【没有更多】状态显示为一个点，而不是文字，常用于底部的"没有更多"提示。

```vue
<template>
  <view>
    <uv-loadmore 
      status="nomore" 
      :isDot="true"
    ></uv-loadmore>
  </view>
</template>
```

## 带线条样式

通过设置 `line` 属性为 `true`，可以在文字左右两边显示横线，有分割线的效果。

```vue
<template>
  <view>
    <uv-loadmore 
      status="nomore" 
      :line="true"
    ></uv-loadmore>
  </view>
</template>
```

## 自定义线条颜色和样式

当设置 `line` 为 `true` 时，可以通过 `lineColor` 设置线条颜色，通过 `dashed` 设置线条是否为虚线。

```vue
<template>
  <view>
    <uv-loadmore 
      status="nomore" 
      :line="true"
      lineColor="#f56c6c"
      :dashed="true"
    ></uv-loadmore>
  </view>
</template>
```

## 上下边距设置

通过 `marginTop` 和 `marginBottom` 属性可以设置上下边距，单位为px。

```vue
<template>
  <view>
    <uv-loadmore 
      status="nomore" 
      marginTop="30"
      marginBottom="30"
    ></uv-loadmore>
  </view>
</template>
```

## 在下拉刷新中应用

结合页面的下拉刷新功能，可以实现下拉刷新和上拉加载更多的完整列表体验。

```vue
<template>
  <view>
    <view class="list">
      <view class="list-item" v-for="(item, index) in list" :key="index">
        列表项 {{item}}
      </view>
    </view>
    
    <uv-loadmore :status="status" @loadmore="loadmore"></uv-loadmore>
  </view>
</template>

<script>
export default {
  data() {
    return {
      status: 'loadmore',
      list: [],
      page: 1,
      totalPage: 3
    }
  },
  onLoad() {
    this.getList();
  },
  // 下拉刷新
  onPullDownRefresh() {
    this.page = 1;
    this.list = [];
    this.status = 'loadmore';
    this.getList().then(() => {
      // 停止下拉刷新
      uni.stopPullDownRefresh();
    });
  },
  // 触底加载更多
  onReachBottom() {
    if(this.status !== 'nomore') {
      this.loadmore();
    }
  },
  methods: {
    // 获取列表数据
    getList() {
      return new Promise((resolve) => {
        setTimeout(() => {
          for(let i = 0; i < 10; i++) {
            this.list.push(`${this.page}-${i+1}`);
          }
          
          if(this.page >= this.totalPage) {
            this.status = 'nomore';
          } else {
            this.status = 'loadmore';
          }
          
          resolve();
        }, 1000);
      });
    },
    // 加载更多
    loadmore() {
      if(this.status === 'loading') return;
      if(this.page >= this.totalPage) {
        this.status = 'nomore';
        return;
      }
      
      this.status = 'loading';
      this.page++;
      this.getList();
    }
  }
}
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| status | 组件状态，可选值为 `loadmore`、`loading`、`nomore` | `String` | `loadmore` |
| bgColor | 组件背景色 | `String` | `transparent` |
| icon | 是否显示加载中的图标 | `Boolean` | `true` |
| fontSize | 字体大小 | `String \| Number` | `14` |
| iconSize | 图标大小 | `String \| Number` | `16` |
| color | 字体颜色 | `String` | `#606266` |
| loadingIcon | 加载中状态的图标，可选值为 `spinner`、`circle`、`semicircle` | `String` | `spinner` |
| loadmoreText | 加载前的提示语 | `String` | `加载更多` |
| loadingText | 加载中提示语 | `String` | `正在加载...` |
| nomoreText | 没有更多的提示语 | `String` | `没有更多了` |
| isDot | 在"没有更多"状态下，是否显示粗点 | `Boolean` | `false` |
| iconColor | 加载中图标的颜色 | `String` | `#b7b7b7` |
| marginTop | 上边距 | `String \| Number` | `10` |
| marginBottom | 下边距 | `String \| Number` | `10` |
| height | 高度，单位px | `String \| Number` | `auto` |
| line | 是否显示左右分割线 | `Boolean` | `false` |
| lineColor | 线条颜色 | `String` | `#E6E8EB` |
| dashed | 是否虚线，true-虚线，false-实线 | `Boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| loadmore | 点击加载更多按钮时触发 | - | 