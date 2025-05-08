# uv-code-input 验证码输入框

## 介绍

验证码输入框组件，用于输入验证码、密码等场景。

## 基础用法

```vue
<template>
  <uv-code-input
    v-model="code"
    :maxlength="4"
    @finish="onFinish"
  />
</template>

<script>
export default {
  data() {
    return {
      code: ''
    }
  },
  methods: {
    onFinish(value) {
      console.log('输入完成，验证码为：', value)
    }
  }
}
</script>
```

## 自定义样式

```vue
<template>
  <uv-code-input
    v-model="code"
    :maxlength="6"
    :size="40"
    :gutter="10"
    :mask="true"
    mode="box"
  />
</template>
```

## 不同模式

```vue
<template>
  <!-- 下划线模式 -->
  <uv-code-input mode="line" v-model="code" />
  
  <!-- 方框模式 -->
  <uv-code-input mode="box" v-model="code" />
  
  <!-- 圆形模式 -->
  <uv-code-input mode="circle" v-model="code" />
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| v-model | 输入值 | String | '' |
| maxlength | 最大输入长度 | Number | 4 |
| size | 输入框大小，单位px | Number | 35 |
| gutter | 输入框间距，单位px | Number | 6 |
| mode | 显示模式，可选值为 line/box/circle | String | 'box' |
| mask | 是否隐藏输入内容 | Boolean | false |
| focus | 是否自动获取焦点 | Boolean | false |
| bold | 是否加粗显示 | Boolean | false |
| color | 字体颜色 | String | '#333333' |
| fontSize | 字体大小，单位px | Number | 18 |
| disabledKeyboard | 是否禁用系统键盘 | Boolean | false |
| borderColor | 边框颜色 | String | '#cccccc' |
| borderActiveColor | 选中时的边框颜色 | String | '#2979ff' |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 输入值改变时触发 | value: 当前输入值 |
| finish | 输入完成时触发 | value: 当前输入值 |
| focus | 输入框聚焦时触发 | - |
| blur | 输入框失焦时触发 | - | 