# Sticky 吸顶

吸顶组件，用于将内容固定在页面顶部，类似于CSS中的 `position: sticky` 属性。

## 基础用法

基础的吸顶组件用法。

```vue
<template>
  <view>
    <view style="height: 200px; background-color: #f2f2f2;"></view>
    
    <uv-sticky>
      <view style="padding: 15px; background-color: #2979ff; color: #fff;">
        <text>吸顶内容</text>
      </view>
    </uv-sticky>
    
    <view style="height: 1000px; background-color: #f8f8f8;"></view>
  </view>
</template>
```

## 设置吸顶距离

通过 `offsetTop` 属性设置组件距离顶部多少距离时，进行吸顶操作。

```vue
<template>
  <view>
    <view style="height: 200px; background-color: #f2f2f2;"></view>
    
    <uv-sticky :offsetTop="50">
      <view style="padding: 15px; background-color: #2979ff; color: #fff;">
        <text>距离顶部50px时吸顶</text>
      </view>
    </uv-sticky>
    
    <view style="height: 1000px; background-color: #f8f8f8;"></view>
  </view>
</template>
```

## 设置背景色

通过 `bgColor` 属性设置吸顶区域背景颜色。

```vue
<template>
  <view>
    <view style="height: 200px; background-color: #f2f2f2;"></view>
    
    <uv-sticky bgColor="#f1f1f1">
      <view style="padding: 15px; background-color: #2979ff; color: #fff;">
        <text>自定义背景色的吸顶</text>
      </view>
    </uv-sticky>
    
    <view style="height: 1000px; background-color: #f8f8f8;"></view>
  </view>
</template>
```

## 禁用吸顶功能

通过 `disabled` 属性禁用吸顶功能。

```vue
<template>
  <view>
    <view style="height: 200px; background-color: #f2f2f2;"></view>
    
    <uv-sticky :disabled="true">
      <view style="padding: 15px; background-color: #2979ff; color: #fff;">
        <text>禁用吸顶功能</text>
      </view>
    </uv-sticky>
    
    <view style="height: 1000px; background-color: #f8f8f8;"></view>
  </view>
</template>
```

## 配合导航栏使用

结合自定义导航栏的示例。

```vue
<template>
  <view>
    <uv-navbar 
      title="自定义导航栏" 
      :fixed="true" 
      :isBack="true"
    ></uv-navbar>
    
    <view style="height: 200px; background-color: #f2f2f2;"></view>
    
    <uv-sticky :customNavHeight="44">
      <view style="padding: 15px; background-color: #2979ff; color: #fff;">
        <text>考虑导航栏高度的吸顶</text>
      </view>
    </uv-sticky>
    
    <view style="height: 1000px; background-color: #f8f8f8;"></view>
  </view>
</template>
```

## 配合标签页使用

在标签页中使用吸顶组件的示例。

```vue
<template>
  <view>
    <uv-tabs :list="list"></uv-tabs>
    
    <uv-sticky :offsetTop="50">
      <uv-tabs :list="subList" :current="current" @change="tabChange"></uv-tabs>
    </uv-sticky>
    
    <view style="height: 1000px; padding: 20px;">
      <view v-if="current === 0">
        选项卡1内容
      </view>
      <view v-if="current === 1">
        选项卡2内容
      </view>
      <view v-if="current === 2">
        选项卡3内容
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { name: '主标签页1' },
        { name: '主标签页2' }
      ],
      subList: [
        { name: '子选项卡1' },
        { name: '子选项卡2' },
        { name: '子选项卡3' }
      ],
      current: 0
    }
  },
  methods: {
    tabChange(index) {
      this.current = index
    }
  }
}
</script>
```

## 自定义吸顶样式

可以根据需要自定义吸顶内容的样式。

```vue
<template>
  <view>
    <view style="height: 200px; background-color: #f2f2f2;"></view>
    
    <uv-sticky :offsetTop="0" :zIndex="100">
      <template v-slot:default>
        <view class="custom-sticky">
          <view class="search-box">
            <uv-icon name="search" color="#999" size="18"></uv-icon>
            <text class="search-text">搜索</text>
          </view>
          <view class="filter-box">
            <view class="filter-item">
              <text>综合</text>
              <uv-icon name="arrow-down" color="#666" size="14"></uv-icon>
            </view>
            <view class="filter-item">
              <text>销量</text>
            </view>
            <view class="filter-item">
              <text>价格</text>
            </view>
          </view>
        </view>
      </template>
    </uv-sticky>
    
    <view style="height: 1000px; background-color: #f8f8f8;"></view>
  </view>
</template>

<style>
.custom-sticky {
  background-color: #ffffff;
  padding: 10px 15px;
}
.search-box {
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  height: 36px;
  border-radius: 18px;
  padding: 0 15px;
  margin-bottom: 10px;
}
.search-text {
  color: #999;
  font-size: 14px;
  margin-left: 5px;
}
.filter-box {
  display: flex;
  justify-content: space-around;
}
.filter-item {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #666;
}
</style>
```

## 监听吸顶状态

通过事件可以监听吸顶状态的变化。

```vue
<template>
  <view>
    <view style="height: 200px; background-color: #f2f2f2;"></view>
    
    <uv-sticky @fixed="onFixed">
      <view style="padding: 15px; background-color: #2979ff; color: #fff;">
        <text>{{ isFixed ? '已吸顶' : '未吸顶' }}</text>
      </view>
    </uv-sticky>
    
    <view style="height: 1000px; background-color: #f8f8f8;"></view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isFixed: false
    }
  },
  methods: {
    onFixed(isFixed) {
      this.isFixed = isFixed
      console.log('吸顶状态：', isFixed)
    }
  }
}
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| offsetTop | 吸顶容器到顶部某个距离的时候，进行吸顶，单位px | `String \| Number` | `0` |
| customNavHeight | 自定义导航栏的高度，单位px | `String \| Number` | H5: `44` 其他: `0` |
| disabled | 是否禁用吸顶功能 | `Boolean` | `false` |
| bgColor | 吸顶区域的背景颜色 | `String` | `transparent` |
| zIndex | z-index值 | `String \| Number` | - |
| index | 列表中的索引值 | `String \| Number` | - |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| fixed | 组件吸顶状态发生变化时触发 | isFixed: 是否处于吸顶状态 |

### Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽，用于放置需要吸顶的内容 |
``` 