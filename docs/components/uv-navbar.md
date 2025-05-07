# Navbar 导航栏

导航栏组件，用于显示页面顶部导航栏，支持自定义按钮、自定义内容等。

## 基础用法

```vue
<template>
  <uv-navbar title="标题"></uv-navbar>
</template>
```

## 返回按钮

```vue
<template>
  <uv-navbar title="标题" :back-icon-color="'#606266'" left-icon="arrow-left" @leftClick="goBack"></uv-navbar>
</template>

<script>
export default {
  methods: {
    goBack() {
      uni.navigateBack({
        delta: 1
      })
    }
  }
}
</script>
```

## 自定义左侧内容

```vue
<template>
  <uv-navbar title="标题">
    <template #left>
      <view style="font-size: 16px; margin-left: 15px">返回</view>
    </template>
  </uv-navbar>
</template>
```

## 自定义标题

```vue
<template>
  <uv-navbar>
    <template #center>
      <view>
        <text style="font-size: 16px; color: #303133">自定义标题</text>
      </view>
    </template>
  </uv-navbar>
</template>
```

## 自定义右侧内容

```vue
<template>
  <uv-navbar title="标题">
    <template #right>
      <uv-icon name="search" size="20"></uv-icon>
    </template>
  </uv-navbar>
</template>
```

## 自定义背景色

```vue
<template>
  <uv-navbar title="标题" :background="{ backgroundColor: '#3c9cff' }" title-color="#ffffff"></uv-navbar>
</template>
```

## 自定义高度

```vue
<template>
  <uv-navbar title="标题" height="66"></uv-navbar>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| title | 标题 | `string` | - |
| title-width | 标题宽度 | `string \| number` | `400rpx` |
| title-size | 标题字体大小 | `string \| number` | `16` |
| title-color | 标题颜色 | `string` | `#303133` |
| placeholder | 固定在顶部时是否生成一个等高元素，以防止塌陷 | `boolean` | `true` |
| fixed | 是否固定在顶部 | `boolean` | `true` |
| border | 是否显示下边框 | `boolean` | `false` |
| left-icon | 左侧图标 | `string` | `arrow-left` |
| left-text | 左侧文本 | `string` | - |
| left-color | 左侧文本颜色 | `string` | `#303133` |
| right-icon | 右侧图标 | `string` | - |
| right-text | 右侧文本 | `string` | - |
| right-color | 右侧文本颜色 | `string` | `#303133` |
| back-icon-color | 返回图标颜色 | `string` | `#303133` |
| back-text-color | 返回文本颜色 | `string` | `#303133` |
| background | 背景设置, 可以使用对象形式传入 backgroundColor 和 backgroundImage | `object` | `{ backgroundColor: '#ffffff' }` |
| z-index | 层级 | `string \| number` | `990` |
| custom-back | 自定义返回事件 | `boolean` | `false` |
| height | 导航栏高度 | `string \| number` | `44` |
| status-bar | 是否包含状态栏 | `boolean` | `true` |
| immersive | 是否沉浸式，允许fixed定位后导航栏塌陷，仅fixed定位下生效 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| leftClick | 点击左侧按钮时触发 | event: Event |
| rightClick | 点击右侧按钮时触发 | event: Event |

### Slots

| 名称 | 说明 |
|------|------|
| left | 自定义左侧内容 |
| center | 自定义标题内容 |
| right | 自定义右侧内容 | 