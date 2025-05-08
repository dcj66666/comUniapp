# uv-tooltip 文字提示

## 介绍

文字提示组件，用于展示鼠标悬停时的提示信息，支持多种展示方式和自定义样式。

## 基础用法

```vue
<template>
  <uv-tooltip text="这是一段提示文字">
    <button>鼠标悬停查看提示</button>
  </uv-tooltip>
</template>
```

## 不同位置

```vue
<template>
  <uv-tooltip text="上方提示" placement="top">
    <button>上方提示</button>
  </uv-tooltip>
  
  <uv-tooltip text="下方提示" placement="bottom">
    <button>下方提示</button>
  </uv-tooltip>
  
  <uv-tooltip text="左侧提示" placement="left">
    <button>左侧提示</button>
  </uv-tooltip>
  
  <uv-tooltip text="右侧提示" placement="right">
    <button>右侧提示</button>
  </uv-tooltip>
</template>
```

## 自定义样式

```vue
<template>
  <uv-tooltip
    text="自定义样式的提示"
    bgColor="#2979ff"
    color="#ffffff"
    :fontSize="28"
    :borderRadius="10"
  >
    <button>自定义样式</button>
  </uv-tooltip>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| text | 提示文字 | String | '' |
| placement | 提示框位置，可选值：top/bottom/left/right | String | 'top' |
| bgColor | 背景颜色 | String | '#606266' |
| color | 文字颜色 | String | '#ffffff' |
| fontSize | 文字大小，单位rpx | String / Number | 24 |
| borderRadius | 圆角大小，单位rpx | String / Number | 6 |
| zIndex | 层级 | Number | 10075 |
| showArrow | 是否显示箭头 | Boolean | true |
| offset | 偏移距离，单位rpx | String / Number | 10 |
| width | 提示框宽度，单位rpx | String / Number | 'auto' |
| openType | 开启方式，可选值：hover/click | String | 'hover' |
| disabled | 是否禁用 | Boolean | false |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| open | 提示框打开时触发 | - |
| close | 提示框关闭时触发 | - |

### Slots

| 名称 | 说明 |
|------|------|
| default | 触发提示的元素 |
| content | 自定义提示内容 |

### 平台差异说明

| App（vue） | App（nvue） | H5 | 小程序 |
|------------|-------------|----|----|
| √ | √ | √ | √ |

注意：在小程序中，openType 仅支持 click 模式。 