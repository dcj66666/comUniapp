# uv-count-down 倒计时

## 介绍

该组件用于实现倒计时功能，支持自定义格式、样式等，常用于秒杀、活动倒计时等场景。

## 基础用法

```vue
<template>
  <uv-count-down :timestamp="timestamp"></uv-count-down>
</template>

<script>
export default {
  data() {
    return {
      timestamp: 30 * 60 * 1000 // 30分钟
    }
  }
}
</script>
```

## 自定义格式

```vue
<template>
  <uv-count-down 
    :timestamp="timestamp"
    format="DD天HH时mm分ss秒"
    :show-days="true"
  ></uv-count-down>
</template>
```

## 自定义样式

```vue
<template>
  <uv-count-down 
    :timestamp="timestamp"
    :show-colon="true"
    separator-color="#FF0000"
    text-color="#303133"
    bg-color="#FFFFFF"
  >
    <template #default="{ timeData }">
      <text class="time">{{ timeData.hours }}</text>
      <text class="split">:</text>
      <text class="time">{{ timeData.minutes }}</text>
      <text class="split">:</text>
      <text class="time">{{ timeData.seconds }}</text>
    </template>
  </uv-count-down>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| timestamp | 倒计时时长，单位毫秒 | String / Number | 0 |
| format | 时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒 | String | 'HH:mm:ss' |
| autoStart | 是否自动开始倒计时 | Boolean | true |
| millisecond | 是否开启毫秒级渲染 | Boolean | false |
| showDays | 是否显示天数 | Boolean | false |
| showHours | 是否显示小时 | Boolean | true |
| showColon | 是否以冒号为分隔符 | Boolean | true |
| separatorColor | 分隔符颜色 | String | '#333' |
| textColor | 文字颜色 | String | '#333' |
| bgColor | 背景色 | String | 'transparent' |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| start | 开始倒计时时触发 | - |
| end | 倒计时结束时触发 | - |
| change | 倒计时变化时触发 | timeData |

### Methods

| 方法名 | 说明 | 参数 |
|--------|------|------|
| start | 开始倒计时 | - |
| pause | 暂停倒计时 | - |
| reset | 重置倒计时 | - |

### Slots

| 名称 | 说明 | 参数 |
|------|------|------|
| default | 自定义内容 | timeData: { days, hours, minutes, seconds, milliseconds } |

### 平台差异说明

| App（vue） | App（nvue） | H5 | 小程序 |
|------------|-------------|----|----|
| √ | √ | √ | √ | 