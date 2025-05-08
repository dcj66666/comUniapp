# uv-overlay 遮罩层

## 介绍

创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。

## 基础用法

```vue
<template>
  <uv-overlay
    v-model="show"
    @click="onClick"
  />
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    onClick() {
      this.show = false
    }
  }
}
</script>
```

## 嵌入内容

```vue
<template>
  <uv-overlay v-model="show">
    <view class="wrapper">
      <text>自定义内容</text>
    </view>
  </uv-overlay>
</template>

<style>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.wrapper text {
  color: #fff;
  font-size: 16px;
}
</style>
```

## 自定义样式

```vue
<template>
  <uv-overlay
    v-model="show"
    :opacity="0.7"
    :z-index="99"
    :duration="0.3"
  />
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| v-model | 是否展示遮罩层 | Boolean | false |
| duration | 动画时长，单位秒 | Number | 0.3 |
| opacity | 不透明度 | Number | 0.5 |
| zIndex | z-index 层级 | Number | 10070 |
| customStyle | 自定义样式 | Object | {} |
| closeOnClickOverlay | 是否点击遮罩关闭 | Boolean | true |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击遮罩层时触发 | event: Event |
| open | 打开遮罩层时触发 | - |
| close | 关闭遮罩层时触发 | - |

### Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽，用于在遮罩层上方嵌入自定义内容 |
``` 