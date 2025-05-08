# uv-tabbar 底部导航栏

## 介绍

底部导航栏组件，用于在不同页面之间进行切换，支持自定义图标、徽标、样式等。

## 基础用法

```vue
<template>
  <uv-tabbar v-model="current" :list="list"></uv-tabbar>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      list: [
        {
          pagePath: '/pages/index/index',
          iconPath: '/static/home.png',
          selectedIconPath: '/static/home-active.png',
          text: '首页'
        },
        {
          pagePath: '/pages/category/category',
          iconPath: '/static/category.png',
          selectedIconPath: '/static/category-active.png',
          text: '分类'
        },
        {
          pagePath: '/pages/cart/cart',
          iconPath: '/static/cart.png',
          selectedIconPath: '/static/cart-active.png',
          text: '购物车'
        },
        {
          pagePath: '/pages/user/user',
          iconPath: '/static/user.png',
          selectedIconPath: '/static/user-active.png',
          text: '我的'
        }
      ]
    }
  }
}
</script>
```

## 自定义样式

```vue
<template>
  <uv-tabbar
    v-model="current"
    :list="list"
    :activeColor="#1989fa"
    :inactiveColor="#7d7e80"
    :border="false"
    :fixed="true"
    :safeAreaInsetBottom="true"
  ></uv-tabbar>
</template>
```

## 显示徽标

```vue
<template>
  <uv-tabbar v-model="current">
    <uv-tabbar-item
      v-for="(item, index) in list"
      :key="index"
      :icon="item.icon"
      :text="item.text"
      :dot="index === 1"
      :badge="index === 2 ? '5' : ''"
    ></uv-tabbar-item>
  </uv-tabbar>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value/v-model | 当前选中标签的索引 | Number | 0 |
| list | 导航栏数据 | Array | [] |
| activeColor | 选中标签的颜色 | String | '#1989fa' |
| inactiveColor | 未选中标签的颜色 | String | '#7d7e80' |
| fixed | 是否固定在底部 | Boolean | true |
| border | 是否显示上边框 | Boolean | true |
| zIndex | 元素层级 | Number | 1 |
| safeAreaInsetBottom | 是否开启底部安全区适配 | Boolean | true |
| placeholder | 固定在底部时，是否在标签位置生成一个等高的占位元素 | Boolean | true |

### TabbarItem Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| text | 标签文字 | String | '' |
| icon | 图标路径 | String | '' |
| iconSize | 图标大小，单位px | Number | 20 |
| badge | 图标右上角徽标文字 | String / Number | '' |
| dot | 是否显示图标右上角小红点 | Boolean | false |
| pagePath | 页面路径 | String | '' |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 切换标签时触发 | index: 当前选中项的索引 |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义标签栏的内容 |

### 平台差异说明

| App（vue） | App（nvue） | H5 | 小程序 |
|------------|-------------|----|----| 