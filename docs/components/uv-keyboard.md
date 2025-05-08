# uv-keyboard 键盘

## 介绍

键盘组件，提供数字键盘、身份证键盘、车牌号键盘等多种键盘样式。

## 基础用法

```vue
<template>
  <uv-keyboard
    v-model="show"
    @change="onChange"
    @confirm="onConfirm"
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
    onChange(value) {
      console.log('输入值：', value)
    },
    onConfirm(value) {
      console.log('确认值：', value)
    }
  }
}
</script>
```

## 键盘类型

```vue
<template>
  <!-- 数字键盘 -->
  <uv-keyboard mode="number" v-model="show" />
  
  <!-- 身份证键盘 -->
  <uv-keyboard mode="idcard" v-model="show" />
  
  <!-- 车牌号键盘 -->
  <uv-keyboard mode="car" v-model="show" />
</template>
```

## 自定义按键

```vue
<template>
  <uv-keyboard
    v-model="show"
    :custom-key="['00', '.']"
    @press="onPress"
  />
</template>

<script>
export default {
  methods: {
    onPress(key) {
      console.log('按下按键：', key)
    }
  }
}
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| v-model | 是否显示键盘 | Boolean | false |
| mode | 键盘类型，可选值为 number/idcard/car | String | 'number' |
| title | 键盘标题 | String | '' |
| confirmText | 确认按钮文字 | String | '确定' |
| customKey | 自定义按键内容 | Array | [] |
| random | 是否随机排序键盘按键 | Boolean | false |
| mask | 是否显示遮罩层 | Boolean | true |
| zIndex | 键盘层级 | Number | 100 |
| closeOnClickOverlay | 是否点击遮罩层关闭键盘 | Boolean | true |
| safeAreaInsetBottom | 是否开启底部安全区适配 | Boolean | true |
| maxlength | 输入值最大长度 | Number | - |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 输入内容改变时触发 | value: 当前输入值 |
| confirm | 点击确认按钮时触发 | value: 当前输入值 |
| press | 点击按键时触发 | key: 按键内容 |
| close | 键盘关闭时触发 | - |
| delete | 点击删除键时触发 | - |

### Slots

| 名称 | 说明 |
|------|------|
| title | 自定义标题内容 |
| default | 自定义键盘内容 | 