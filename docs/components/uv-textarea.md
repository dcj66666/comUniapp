# Textarea 文本域

用于多行文本的输入。

## 基础用法

```vue
<template>
  <uv-textarea v-model="content" placeholder="请输入内容"></uv-textarea>
</template>

<script>
export default {
  data() {
    return {
      content: ''
    }
  }
}
</script>
```

## 显示字数统计

```vue
<template>
  <uv-textarea v-model="content" placeholder="请输入内容" count maxlength="200"></uv-textarea>
</template>
```

## 自动高度增长

```vue
<template>
  <uv-textarea v-model="content" placeholder="请输入内容" autoHeight></uv-textarea>
</template>
```

## 禁用状态

```vue
<template>
  <uv-textarea v-model="content" placeholder="请输入内容" disabled></uv-textarea>
</template>
```

## 自定义样式

```vue
<template>
  <uv-textarea v-model="content" placeholder="请输入内容" :customStyle="{backgroundColor: '#f8f8f8'}"></uv-textarea>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model | 输入框的内容 | `string \| number` | - |
| placeholder | 输入框为空时的占位符 | `string` | - |
| height | 高度，单位默认为rpx | `string \| number` | `70` |
| confirmType | 设置键盘右下角按钮的文字，仅微信小程序有效 | `string` | `done` |
| disabled | 是否禁用 | `boolean` | `false` |
| count | 是否显示统计字数 | `boolean` | `false` |
| focus | 是否自动获取焦点 | `boolean` | `false` |
| autoHeight | 是否自动增加高度 | `boolean` | `false` |
| fixed | 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true | `boolean` | `false` |
| cursorSpacing | 指定光标与键盘的距离，单位 px | `number` | `0` |
| cursor | 指定focus时的光标位置 | `number` | `-1` |
| showConfirmBar | 是否显示键盘上方带有"完成"按钮那一栏 | `boolean` | `true` |
| selectionStart | 光标起始位置，自动聚焦时有效，需与selection-end搭配使用 | `number` | `-1` |
| selectionEnd | 光标结束位置，自动聚焦时有效，需与selection-start搭配使用 | `number` | `-1` |
| adjustPosition | 键盘弹起时，是否自动上推页面 | `boolean` | `true` |
| disableDefaultPadding | 是否去掉 iOS 下的默认内边距，只对 iOS 有效 | `boolean` | `false` |
| holdKeyboard | focus时，点击页面的时候不收起键盘，微信小程序有效 | `boolean` | `false` |
| maxlength | 最大输入长度，设置为 -1 的时候不限制最大长度 | `string \| number` | `140` |
| border | 边框类型，可选值为 `surround`（四周）、`bottom`（底部）、`none`（无边框） | `string` | `surround` |
| placeholderStyle | placeholder的样式，字符串形式，如`color: red` | `string` | `color: #c0c4cc` |
| formatter | 内容式化函数 | `Function` | - |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| focus | 输入框聚焦时触发 | event: Event |
| blur | 输入框失去焦点时触发 | event: Event |
| linechange | 输入框行数变化时触发 | event: Event |
| confirm | 点击完成时触发 | value: string |
| input | 输入框内容发生变化时触发 | value: string |
| keyboardheightchange | 键盘高度变化时触发 | event: Event | 