# uv-toolbar 工具栏

## 介绍

工具栏组件，一般用于表单、键盘等底部的操作栏，可自定义按钮的样式和布局。

## 基础用法

```vue
<template>
  <uv-toolbar
    :leftText="取消"
    :rightText="确定"
    @leftClick="cancel"
    @rightClick="confirm"
  ></uv-toolbar>
</template>

<script>
export default {
  methods: {
    cancel() {
      console.log('点击了取消')
    },
    confirm() {
      console.log('点击了确定')
    }
  }
}
</script>
```

## 自定义按钮样式

```vue
<template>
  <uv-toolbar
    leftIcon="arrow-left"
    leftText="返回"
    rightIcon="checkmark"
    rightText="完成"
    :leftIconSize="30"
    :rightIconSize="30"
    leftColor="#909399"
    rightColor="#2979ff"
  ></uv-toolbar>
</template>
```

## 自定义内容

```vue
<template>
  <uv-toolbar>
    <template #left>
      <view class="custom-left">
        <uv-icon name="home" size="24"></uv-icon>
        <text>首页</text>
      </view>
    </template>
    <template #default>
      <view class="custom-content">
        <text>标题</text>
      </view>
    </template>
    <template #right>
      <view class="custom-right">
        <uv-button type="primary" size="mini">提交</uv-button>
      </view>
    </template>
  </uv-toolbar>
</template>

<style>
.custom-left,
.custom-right {
  display: flex;
  align-items: center;
}
.custom-content {
  text-align: center;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| leftIcon | 左侧图标名称 | String | '' |
| rightIcon | 右侧图标名称 | String | '' |
| leftText | 左侧文字 | String | '' |
| rightText | 右侧文字 | String | '' |
| leftIconSize | 左侧图标大小，单位rpx | String / Number | 20 |
| rightIconSize | 右侧图标大小，单位rpx | String / Number | 20 |
| leftColor | 左侧文字颜色 | String | '#303133' |
| rightColor | 右侧文字颜色 | String | '#303133' |
| bgColor | 背景颜色 | String | '#ffffff' |
| borderTop | 是否显示上边框 | Boolean | false |
| borderBottom | 是否显示下边框 | Boolean | false |
| zIndex | 层级 | Number | 1 |
| height | 工具栏高度，单位rpx | String / Number | 100 |
| fixed | 是否固定在底部 | Boolean | true |
| safeAreaInsetBottom | 是否开启底部安全区适配 | Boolean | true |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| leftClick | 点击左侧按钮时触发 | - |
| rightClick | 点击右侧按钮时触发 | - |

### Slots

| 名称 | 说明 |
|------|------|
| left | 自定义左侧内容 |
| default | 自定义中间内容 |
| right | 自定义右侧内容 |

### 平台差异说明

| App（vue） | App（nvue） | H5 | 小程序 |
|------------|-------------|----|----|
| √ | √ | √ | √ | 