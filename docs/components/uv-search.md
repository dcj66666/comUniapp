# uv-search 搜索

## 介绍

搜索组件，用于搜索场景的输入框组件。支持自定义样式、搜索框形状等特性。

## 基础用法

```vue
<template>
  <uv-search
    v-model="keyword"
    placeholder="请输入搜索关键词"
    @search="search"
  ></uv-search>
</template>

<script>
export default {
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    search(keyword) {
      console.log('搜索：', keyword)
    }
  }
}
</script>
```

## 自定义样式

```vue
<template>
  <uv-search
    v-model="keyword"
    placeholder="请输入搜索关键词"
    shape="round"
    bgColor="#f2f2f2"
    searchIconColor="#909399"
    color="#303133"
    placeholderColor="#909399"
  ></uv-search>
</template>
```

## 显示操作按钮

```vue
<template>
  <uv-search
    v-model="keyword"
    :showAction="true"
    actionText="搜索"
    @search="search"
    @custom="custom"
  ></uv-search>
</template>

<script>
export default {
  methods: {
    search(keyword) {
      console.log('搜索：', keyword)
    },
    custom() {
      console.log('点击自定义按钮')
    }
  }
}
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value/v-model | 输入框内容 | String | '' |
| placeholder | 占位文字内容 | String | '请输入搜索关键词' |
| shape | 搜索框形状，可选值：square/round | String | 'round' |
| clearabled | 是否显示清除按钮 | Boolean | true |
| focusColor | 输入框聚焦时的边框颜色 | String | '#2979ff' |
| searchIconColor | 搜索图标的颜色 | String | '#909399' |
| color | 输入框字体颜色 | String | '#303133' |
| placeholderColor | placeholder的颜色 | String | '#909399' |
| bgColor | 输入框背景颜色 | String | '#f2f2f2' |
| maxLength | 输入的最大字符数 | String / Number | '-1' |
| showAction | 是否显示右侧控件(右侧的"搜索"按钮) | Boolean | false |
| actionText | 右侧控件文字 | String | '搜索' |
| actionStyle | 右侧控件的样式，对象形式 | Object | {} |
| inputAlign | 输入框内容对齐方式，可选值：left/center/right | String | 'left' |
| disabled | 是否禁用输入框 | Boolean | false |
| readonly | 是否只读 | Boolean | false |
| animation | 是否开启动画 | Boolean | false |
| borderColor | 边框颜色 | String | 'transparent' |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| search | 用户确定搜索时触发 | value: 输入框的值 |
| custom | 点击右侧控件时触发 | - |
| clear | 点击清除按钮时触发 | - |
| focus | 输入框聚焦时触发 | event: Event |
| blur | 输入框失去焦点时触发 | event: Event |
| input | 输入框内容变化时触发 | value: 输入框的值 |

### Slots

| 名称 | 说明 |
|------|------|
| label | 自定义左侧标签 |
| action | 自定义右侧控件内容 |

### 平台差异说明

| App（vue） | App（nvue） | H5 | 小程序 |
|------------|-------------|----|----|
| √ | √ | √ | √ | 