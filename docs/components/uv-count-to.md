# uv-count-to 数字滚动

## 介绍

该组件用于数字的滚动效果，支持自定义数值范围、滚动时间、小数位数等，常用于展示数据增长等场景。

## 基础用法

```vue
<template>
  <uv-count-to :endVal="value"></uv-count-to>
</template>

<script>
export default {
  data() {
    return {
      value: 3000
    }
  }
}
</script>
```

## 自定义配置

```vue
<template>
  <uv-count-to
    :startVal="0"
    :endVal="2000"
    :duration="3000"
    :decimals="2"
    :autoplay="true"
    @end="onEnd"
  ></uv-count-to>
</template>

<script>
export default {
  methods: {
    onEnd() {
      console.log('动画结束')
    }
  }
}
</script>
```

## 自定义数字显示

```vue
<template>
  <uv-count-to
    :endVal="value"
    :color="'#909399'"
    :fontSize="46"
  >
    <template #default="{ current }">
      {{ current }}%
    </template>
  </uv-count-to>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| startVal | 起始值 | Number | 0 |
| endVal | 结束值 | Number | 0 |
| duration | 滚动过渡时间，单位毫秒 | Number | 2000 |
| autoplay | 是否自动开始滚动 | Boolean | true |
| decimals | 要显示的小数位数 | Number | 0 |
| decimal | 小数点分隔符 | String | '.' |
| separator | 千位分隔符 | String | ',' |
| prefix | 前缀 | String | '' |
| suffix | 后缀 | String | '' |
| useEasing | 是否使用缓动效果 | Boolean | true |
| color | 数字颜色 | String | '#303133' |
| fontSize | 数字字体大小，单位px | Number | 22 |
| bold | 是否加粗 | Boolean | false |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| start | 开始滚动时触发 | - |
| end | 滚动结束时触发 | - |
| progress | 滚动过程中触发 | current: 当前值 |

### Methods

| 方法名 | 说明 | 参数 |
|--------|------|------|
| start | 开始滚动 | - |
| pause | 暂停滚动 | - |
| reset | 重置滚动 | - |

### Slots

| 名称 | 说明 | 参数 |
|------|------|------|
| default | 自定义数字显示内容 | current: 当前值 |

### 平台差异说明

| App（vue） | App（nvue） | H5 | 小程序 |
|------------|-------------|----|----|
| √ | √ | √ | √ | 