# uv-transition 过渡动画

## 介绍

过渡动画组件，用于为元素添加过渡动画效果，支持多种动画模式和自定义动画。

## 基础用法

```vue
<template>
  <uv-transition :show="show" mode="fade">
    <view class="content">淡入淡出效果</view>
  </uv-transition>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  }
}
</script>
```

## 内置动画模式

```vue
<template>
  <view>
    <uv-transition :show="show" mode="fade-up">
      <view>上滑淡入</view>
    </uv-transition>
    
    <uv-transition :show="show" mode="fade-down">
      <view>下滑淡入</view>
    </uv-transition>
    
    <uv-transition :show="show" mode="fade-left">
      <view>左滑淡入</view>
    </uv-transition>
    
    <uv-transition :show="show" mode="fade-right">
      <view>右滑淡入</view>
    </uv-transition>
    
    <uv-transition :show="show" mode="slide-up">
      <view>上滑进入</view>
    </uv-transition>
    
    <uv-transition :show="show" mode="slide-down">
      <view>下滑进入</view>
    </uv-transition>
    
    <uv-transition :show="show" mode="slide-left">
      <view>左滑进入</view>
    </uv-transition>
    
    <uv-transition :show="show" mode="slide-right">
      <view>右滑进入</view>
    </uv-transition>
    
    <uv-transition :show="show" mode="zoom">
      <view>缩放效果</view>
    </uv-transition>
  </view>
</template>
```

## 自定义动画时间

```vue
<template>
  <uv-transition
    :show="show"
    mode="fade"
    :duration="300"
    :timingFunction="ease-out"
  >
    <view>自定义动画时间</view>
  </uv-transition>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| show | 是否展示组件 | Boolean | false |
| mode | 动画模式，可选值：fade/fade-up/fade-down/fade-left/fade-right/slide-up/slide-down/slide-left/slide-right/zoom | String | 'fade' |
| duration | 动画持续时间，单位ms | String / Number | 300 |
| timingFunction | 动画曲线，可选值：linear/ease/ease-in/ease-out/ease-in-out | String | 'ease-out' |
| customStyle | 自定义样式 | Object | {} |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| before-enter | 进入前触发 | - |
| enter | 进入中触发 | - |
| after-enter | 进入后触发 | - |
| before-leave | 离开前触发 | - |
| leave | 离开中触发 | - |
| after-leave | 离开后触发 | - |

### Slots

| 名称 | 说明 |
|------|------|
| default | 需要添加动画的元素 |

### 平台差异说明

| App（vue） | App（nvue） | H5 | 小程序 |
|------------|-------------|----|----|
| √ | √ | √ | √ |

注意：在 nvue 页面中，建议使用 animation 组件代替 transition 组件，以获得更好的性能。 