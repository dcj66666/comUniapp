# Input 输入框

通过键盘输入字符，用于表单输入。

## 基础用法

```vue
<template>
  <uv-input v-model="value" placeholder="请输入内容"></uv-input>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
```

## 输入框类型

```vue
<template>
  <uv-input v-model="text" placeholder="文本输入框" type="text"></uv-input>
  <uv-input v-model="password" placeholder="密码输入框" type="password"></uv-input>
  <uv-input v-model="number" placeholder="数字输入框" type="number"></uv-input>
  <uv-input v-model="idcard" placeholder="身份证输入框" type="idcard"></uv-input>
  <uv-input v-model="digit" placeholder="带小数点的数字输入框" type="digit"></uv-input>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      password: '',
      number: '',
      idcard: '',
      digit: ''
    }
  }
}
</script>
```

## 禁用状态

```vue
<template>
  <uv-input v-model="value" placeholder="禁用状态" disabled></uv-input>
</template>
```

## 显示图标

```vue
<template>
  <uv-input v-model="value" placeholder="请输入内容" prefixIcon="search"></uv-input>
  <uv-input v-model="value" placeholder="请输入内容" suffixIcon="search"></uv-input>
</template>
```

## 可清除内容

```vue
<template>
  <uv-input v-model="value" placeholder="可清除内容" clearable></uv-input>
</template>
```

## 输入框形状

```vue
<template>
  <uv-input v-model="value" placeholder="圆角输入框" shape="circle"></uv-input>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model | 输入框内容 | `string \| number` | - |
| type | 输入框类型，可选值为 `text`、`number`、`idcard`、`digit`、`password` | `string` | `text` |
| disabled | 是否禁用 | `boolean` | `false` |
| readonly | 是否只读 | `boolean` | `false` |
| clearable | 是否显示清除按钮 | `boolean` | `false` |
| password-icon | 是否显示密码图标 | `boolean` | `true` |
| placeholder | 输入框占位文本 | `string` | - |
| placeholder-style | placeholder 样式，字符串形式 | `string` | - |
| placeholder-class | placeholder 样式，类名形式 | `string` | `input-placeholder` |
| focus | 是否自动获得焦点 | `boolean` | `false` |
| confirm-type | 设置键盘右下角按钮的文字，仅在 `type="text"` 时生效 | `string` | `done` |
| confirm-hold | 点击键盘右下角按钮时是否保持键盘不收起 | `boolean` | `false` |
| cursor-spacing | 指定光标与键盘的距离，单位 px | `number` | `0` |
| selection-start | 光标起始位置，自动聚焦时有效，需与 `selection-end` 搭配使用 | `number` | `-1` |
| selection-end | 光标结束位置，自动聚焦时有效，需与 `selection-start` 搭配使用 | `number` | `-1` |
| adjust-position | 键盘弹起时是否自动上推页面 | `boolean` | `true` |
| auto-blur | 键盘收起时是否自动失去焦点 | `boolean` | `false` |
| input-align | 输入框内容对齐方式，可选值为 `left`、`center`、`right` | `string` | `left` |
| font-size | 输入框字体大小 | `string \| number` | `15` |
| color | 输入框字体颜色 | `string` | `#303133` |
| prefix-icon | 输入框前置图标 | `string` | - |
| suffix-icon | 输入框后置图标 | `string` | - |
| trim | 是否自动去除两端空格 | `boolean` | `true` |
| cursor | 指定 focus 时的光标位置 | `number` | - |
| maxlength | 最大输入长度，设置为 -1 的时候不限制最大长度 | `string \| number` | `140` |
| shape | 输入框形状，可选值为 `square`、`circle` | `string` | `square` |
| formatter | 输入内容格式化函数 | `(value: string) => string` | - |
| border | 边框类型，可选值为 `surround`、`bottom`、`none` | `string` | `surround` |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| input | 输入框内容变化时触发 | value: string \| number |
| focus | 输入框聚焦时触发 | event: Event |
| blur | 输入框失去焦点时触发 | event: Event |
| confirm | 点击完成按钮时触发 | value: string \| number |
| clear | 点击清除按钮时触发 | - |
| click | 点击输入框时触发 | event: Event |
| click-prefix-icon | 点击前置图标时触发 | event: Event |
| click-suffix-icon | 点击后置图标时触发 | event: Event |

### Slots

| 名称 | 说明 |
|------|------|
| prefix | 输入框前置内容 |
| suffix | 输入框后置内容 | 