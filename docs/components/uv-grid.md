# Grid 宫格

宫格组件，用于展示一些同类的信息，常用于一些导航类的场景。

## 基础用法

```vue
<template>
  <uv-grid :col="3">
    <uv-grid-item v-for="(item, index) in 6" :key="index">
      <uv-icon name="photo" size="22"></uv-icon>
      <text class="grid-text">图片{{ index + 1 }}</text>
    </uv-grid-item>
  </uv-grid>
</template>

<style>
.grid-text {
  font-size: 14px;
  margin-top: 10px;
  color: #909399;
}
</style>
```

## 自定义列数

通过 `col` 属性设置宫格列数，默认为3列。

```vue
<template>
  <uv-grid :col="4">
    <uv-grid-item v-for="(item, index) in 8" :key="index">
      <uv-icon name="photo" size="22"></uv-icon>
      <text class="grid-text">图片{{ index + 1 }}</text>
    </uv-grid-item>
  </uv-grid>
</template>
```

## 显示边框

通过 `border` 属性可以显示宫格边框。

```vue
<template>
  <uv-grid :col="3" border>
    <uv-grid-item v-for="(item, index) in 6" :key="index">
      <uv-icon name="photo" size="22"></uv-icon>
      <text class="grid-text">图片{{ index + 1 }}</text>
    </uv-grid-item>
  </uv-grid>
</template>
```

## 设置背景色

通过 `bgColor` 属性设置宫格背景色。

```vue
<template>
  <uv-grid :col="4">
    <uv-grid-item v-for="(item, index) in 8" :key="index" bgColor="#f4f4f5">
      <uv-icon name="photo" size="22"></uv-icon>
      <text class="grid-text">图片{{ index + 1 }}</text>
    </uv-grid-item>
  </uv-grid>
</template>
```

## 不同对齐方式

通过 `align` 属性设置宫格对齐方式，可选值为 `left`、`center`、`right`，表现为宫格数量少的时候，是靠左、居中还是靠右。

```vue
<template>
  <uv-grid :col="4" align="center">
    <uv-grid-item v-for="(item, index) in 3" :key="index">
      <uv-icon name="photo" size="22"></uv-icon>
      <text class="grid-text">图片{{ index + 1 }}</text>
    </uv-grid-item>
  </uv-grid>
</template>
```

## 宫格内容自定义

通过 slot 可以自定义宫格内容，如添加徽标、图文等。

```vue
<template>
  <uv-grid :col="3" border>
    <uv-grid-item>
      <uv-badge :value="20" :max="99">
        <uv-icon name="photo" size="22"></uv-icon>
      </uv-badge>
      <text class="grid-text">有徽标</text>
    </uv-grid-item>
    <uv-grid-item>
      <image src="/static/logo.png" style="width: 40px; height: 40px;"></image>
      <text class="grid-text">图片</text>
    </uv-grid-item>
    <uv-grid-item>
      <view style="text-align: center;">
        <text style="font-size: 24px; color: #3c9cff;">¥99</text>
        <text class="grid-text">价格</text>
      </view>
    </uv-grid-item>
  </uv-grid>
</template>
```

## 可点击宫格

通过 `@click` 事件监听宫格点击。

```vue
<template>
  <uv-grid :col="3" @click="click">
    <uv-grid-item v-for="(item, index) in 6" :key="index" :name="index">
      <uv-icon :name="icons[index]" size="22"></uv-icon>
      <text class="grid-text">{{ texts[index] }}</text>
    </uv-grid-item>
  </uv-grid>
</template>

<script>
export default {
  data() {
    return {
      icons: ['home', 'photo', 'account', 'search', 'star', 'map'],
      texts: ['首页', '相册', '我的', '搜索', '收藏', '定位']
    }
  },
  methods: {
    click(name) {
      uni.showToast({
        title: `点击了第${name+1}个宫格`,
        icon: 'none'
      })
    }
  }
}
</script>
```

## API

### Grid Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| col | 宫格的列数 | `string \| number` | `3` |
| border | 是否显示边框 | `boolean` | `false` |
| align | 宫格对齐方式，可选值为 `left`、`center`、`right` | `string` | `left` |
| customStyle | 自定义样式 | `object` | - |

### GridItem Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| name | 宫格的标识，点击宫格时返回 | `string \| number \| null` | `null` |
| bgColor | 宫格的背景颜色 | `string` | `transparent` |
| customStyle | 自定义样式 | `object` | - |

### Grid Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击宫格时触发 | name: 点击的宫格的name标识 |

### GridItem Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击宫格时触发 | name: 点击的宫格的name标识 |

### GridItem Slots

| 名称 | 说明 |
|------|------|
| default | 宫格内容 | 