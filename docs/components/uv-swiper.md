# Swiper 轮播图

轮播图组件，用于导航轮播、广告展示等场景。

## 基础用法

```vue
<template>
  <uv-swiper :list="list"></uv-swiper>
</template>

<script>
export default {
  data() {
    return {
      list: [
        'https://cdn.uviewui.com/uview/swiper/1.jpg',
        'https://cdn.uviewui.com/uview/swiper/2.jpg',
        'https://cdn.uviewui.com/uview/swiper/3.jpg'
      ]
    }
  }
}
</script>
```

## 对象数组

通过 `keyName` 指定对象中的图片地址属性名。

```vue
<template>
  <uv-swiper :list="list" keyName="imageUrl"></uv-swiper>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { imageUrl: 'https://cdn.uviewui.com/uview/swiper/1.jpg', title: '标题1' },
        { imageUrl: 'https://cdn.uviewui.com/uview/swiper/2.jpg', title: '标题2' },
        { imageUrl: 'https://cdn.uviewui.com/uview/swiper/3.jpg', title: '标题3' }
      ]
    }
  }
}
</script>
```

## 带指示器

通过 `indicator` 属性可以设置是否显示轮播图指示器。

```vue
<template>
  <uv-swiper :list="list" indicator></uv-swiper>
</template>
```

## 指示器类型

通过 `indicatorMode` 属性可以设置指示器类型，可选值为 `line`（线型）和 `dot`（点型）。

```vue
<template>
  <uv-swiper :list="list" indicator indicatorMode="dot"></uv-swiper>
</template>
```

## 自定义高度

通过 `height` 属性可以自定义轮播图高度。

```vue
<template>
  <uv-swiper :list="list" :height="250"></uv-swiper>
</template>
```

## 显示标题

通过 `showTitle` 属性可以显示轮播图标题（需要 list 数组中的对象包含 title 属性）。

```vue
<template>
  <uv-swiper :list="list" keyName="imageUrl" showTitle></uv-swiper>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { imageUrl: 'https://cdn.uviewui.com/uview/swiper/1.jpg', title: '这是第一张轮播图' },
        { imageUrl: 'https://cdn.uviewui.com/uview/swiper/2.jpg', title: '这是第二张轮播图' },
        { imageUrl: 'https://cdn.uviewui.com/uview/swiper/3.jpg', title: '这是第三张轮播图' }
      ]
    }
  }
}
</script>
```

## 视频轮播

支持视频轮播，自动识别视频格式（也可以通过 type 属性指定为 'video'）。

```vue
<template>
  <uv-swiper :list="list" :height="300"></uv-swiper>
</template>

<script>
export default {
  data() {
    return {
      list: [
        'https://cdn.uviewui.com/uview/resources/video.mp4',
        'https://cdn.uviewui.com/uview/swiper/1.jpg',
        { url: 'https://cdn.uviewui.com/uview/resources/video.mp4', type: 'video', poster: 'https://cdn.uviewui.com/uview/swiper/1.jpg' }
      ]
    }
  }
}
</script>
```

## 衔接滑动

轮播到最后一项后，是否衔接滑动到第一项，通过 `circular` 属性设置。

```vue
<template>
  <uv-swiper :list="list" circular></uv-swiper>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| list | 轮播图数据，可以是图片数组或对象数组 | `array` | `[]` |
| indicator | 是否显示面板指示器 | `boolean` | `false` |
| indicatorActiveColor | 指示器激活颜色 | `string` | `#fff` |
| indicatorInactiveColor | 指示器非激活颜色 | `string` | `rgba(255, 255, 255, 0.35)` |
| indicatorStyle | 指示器样式，可通过bottom，left，right进行定位 | `string \| object` | - |
| indicatorMode | 指示器模式，可选值为 `line`、`dot` | `string` | `line` |
| autoplay | 是否自动切换 | `boolean` | `true` |
| current | 当前所在滑块的 index | `string \| number` | `0` |
| currentItemId | 当前所在滑块的 item-id，不能与 current 同时指定 | `string` | - |
| interval | 滑块自动切换时间间隔，单位ms | `string \| number` | `3000` |
| duration | 滑块切换过程所需时间，单位ms | `string \| number` | `300` |
| circular | 播放到末尾后是否重新回到开头 | `boolean` | `false` |
| vertical | 滑动方向是否为纵向 | `boolean` | `false` |
| previousMargin | 前边距，可用于露出前一项的一小部分 | `string \| number` | `0` |
| nextMargin | 后边距，可用于露出后一项的一小部分 | `string \| number` | `0` |
| acceleration | 当开启时，会根据滑动速度连续滑动多屏 | `boolean` | `false` |
| displayMultipleItems | 同时显示的滑块数量 | `number` | `1` |
| easingFunction | 指定swiper切换缓动动画类型，只对微信小程序有效 | `string` | `default` |
| keyName | list数组中指定对象的图片地址属性名 | `string` | `url` |
| imgMode | 图片的裁剪模式 | `string` | `aspectFill` |
| height | 组件高度，单位px | `string \| number` | `130` |
| bgColor | 背景颜色 | `string` | `#f3f4f6` |
| radius | 组件圆角，单位px | `string \| number` | `4` |
| loading | 是否显示加载中 | `boolean` | `false` |
| showTitle | 是否显示标题，要求数组对象中有title属性 | `boolean` | `false` |
| titleStyle | 标题样式 | `string \| object` | - |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击轮播图时触发 | index: 点击的轮播图索引 |
| change | 轮播图切换时触发 | index: 切换后的轮播图索引 |

### Slots

| 名称 | 说明 |
|------|------|
| indicator | 自定义指示器 | 