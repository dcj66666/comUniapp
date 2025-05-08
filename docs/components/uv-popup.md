# Popup 弹出层

弹出层组件，为了解决遮罩弹层的问题。

## 基础用法

```vue
<template>
  <view>
    <uv-button text="打开弹窗" @click="open"></uv-button>
    
    <uv-popup :show="show" @close="close">
      <view class="popup-content">
        这是一个弹出层
      </view>
    </uv-popup>
  </view>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    open() {
      this.show = true
    },
    close() {
      this.show = false
    }
  }
}
</script>

<style>
.popup-content {
  padding: 30px;
  background-color: #fff;
}
</style>
```

## 弹出方式

Popup 支持多种弹出方式，通过 `mode` 属性设置。

```vue
<template>
  <view>
    <uv-button text="顶部弹出" @click="openTop"></uv-button>
    <uv-button text="底部弹出" @click="openBottom"></uv-button>
    <uv-button text="左侧弹出" @click="openLeft"></uv-button>
    <uv-button text="右侧弹出" @click="openRight"></uv-button>
    <uv-button text="中间弹出" @click="openCenter"></uv-button>
    
    <uv-popup :show="topShow" mode="top" @close="closeTop">
      <view class="popup-content">顶部弹出内容</view>
    </uv-popup>
    
    <uv-popup :show="bottomShow" mode="bottom" @close="closeBottom">
      <view class="popup-content">底部弹出内容</view>
    </uv-popup>
    
    <uv-popup :show="leftShow" mode="left" @close="closeLeft">
      <view class="popup-content">左侧弹出内容</view>
    </uv-popup>
    
    <uv-popup :show="rightShow" mode="right" @close="closeRight">
      <view class="popup-content">右侧弹出内容</view>
    </uv-popup>
    
    <uv-popup :show="centerShow" mode="center" @close="closeCenter">
      <view class="popup-content">中间弹出内容</view>
    </uv-popup>
  </view>
</template>

<script>
export default {
  data() {
    return {
      topShow: false,
      bottomShow: false,
      leftShow: false,
      rightShow: false,
      centerShow: false
    }
  },
  methods: {
    openTop() {
      this.topShow = true
    },
    closeTop() {
      this.topShow = false
    },
    openBottom() {
      this.bottomShow = true
    },
    closeBottom() {
      this.bottomShow = false
    },
    openLeft() {
      this.leftShow = true
    },
    closeLeft() {
      this.leftShow = false
    },
    openRight() {
      this.rightShow = true
    },
    closeRight() {
      this.rightShow = false
    },
    openCenter() {
      this.centerShow = true
    },
    closeCenter() {
      this.centerShow = false
    }
  }
}
</script>
```

## 关闭图标

通过 `closeable` 属性可以显示关闭图标，通过 `closeIconPos` 属性可以设置图标位置。

```vue
<template>
  <uv-popup 
    :show="show" 
    closeable 
    closeIconPos="top-right"
    @close="close"
  >
    <view class="popup-content">
      这是一个带关闭图标的弹出层
    </view>
  </uv-popup>
</template>
```

## 圆角弹窗

通过 `round` 属性可以设置弹窗的圆角值。

```vue
<template>
  <uv-popup 
    :show="show" 
    mode="bottom"
    :round="10"
    @close="close"
  >
    <view class="popup-content">
      这是一个带圆角的底部弹出层
    </view>
  </uv-popup>
</template>
```

## 自定义样式

通过 `customStyle` 属性可以自定义弹出层的样式。

```vue
<template>
  <uv-popup 
    :show="show" 
    mode="center"
    :customStyle="{padding: '20px', backgroundColor: '#f8f8f8'}"
    @close="close"
  >
    <view>自定义样式的弹出层</view>
  </uv-popup>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| mode | 弹出方式，可选值为 `top`、`center`、`bottom`、`left`、`right` | `string` | `center` |
| show | 是否显示弹出层 | `boolean` | `false` |
| duration | 动画时长，单位ms | `string \| number` | `300` |
| overlay | 是否显示遮罩 | `boolean` | `true` |
| overlayOpacity | 遮罩透明度，0-1之间 | `string \| number` | `0.4` |
| overlayStyle | 自定义遮罩样式 | `object \| string` | - |
| closeOnClickOverlay | 点击遮罩是否关闭弹窗 | `boolean` | `true` |
| zIndex | 弹出层的z-index | `string \| number` | H5: 997, 其他: 10075 |
| safeAreaInsetTop | 是否留出顶部安全区域（状态栏高度） | `boolean` | `false` |
| safeAreaInsetBottom | 是否留出底部安全区域 | `boolean` | `true` |
| closeable | 是否显示关闭图标 | `boolean` | `false` |
| closeIconPos | 关闭图标位置，可选值为 `top-left`、`top-right`、`bottom-left`、`bottom-right` | `string` | `top-right` |
| bgColor | 主窗口背景色 | `string` | `#ffffff` |
| round | 圆角值 | `string \| number` | `0` |
| zoom | mode=center时，是否启用缩放动画 | `boolean` | `true` |
| customStyle | 自定义弹出层样式 | `object \| string` | - |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 弹出层状态发生变化时触发 | show: boolean |
| maskClick | 点击遮罩层时触发 | - |
| close | 弹出层关闭时触发 | - |

### Slots

| 名称 | 说明 |
|------|------|
| default | 弹出层内容 | 