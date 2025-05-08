# Button 按钮

按钮用于触发一个操作，如提交表单。

## 基础用法

```vue
<template>
  <uv-button text="默认按钮"></uv-button>
  <uv-button type="primary" text="主要按钮"></uv-button>
  <uv-button type="success" text="成功按钮"></uv-button>
  <uv-button type="error" text="危险按钮"></uv-button>
  <uv-button type="warning" text="警告按钮"></uv-button>
</template>
```

## 镂空按钮

```vue
<template>
  <uv-button text="镂空按钮" plain></uv-button>
  <uv-button type="primary" text="镂空按钮" plain></uv-button>
  <uv-button type="success" text="镂空按钮" plain></uv-button>
  <uv-button type="error" text="镂空按钮" plain></uv-button>
  <uv-button type="warning" text="镂空按钮" plain></uv-button>
</template>
```

## 禁用状态

```vue
<template>
  <uv-button text="禁用按钮" disabled></uv-button>
  <uv-button type="primary" text="禁用按钮" disabled></uv-button>
</template>
```

## 按钮形状

```vue
<template>
  <uv-button text="方形按钮" shape="square"></uv-button>
  <uv-button text="圆形按钮" shape="circle"></uv-button>
</template>
```

## 按钮尺寸

```vue
<template>
  <uv-button text="大型按钮" size="large"></uv-button>
  <uv-button text="普通按钮" size="normal"></uv-button>
  <uv-button text="小型按钮" size="small"></uv-button>
  <uv-button text="迷你按钮" size="mini"></uv-button>
</template>
```

## 加载状态

```vue
<template>
  <uv-button text="加载中" loading></uv-button>
  <uv-button text="加载中" type="primary" loading></uv-button>
  <uv-button text="加载中" loadingText="加载中..." loading></uv-button>
</template>
```

## 按钮图标

```vue
<template>
  <uv-button text="图标按钮" icon="search"></uv-button>
  <uv-button text="图标按钮" type="primary" icon="photo"></uv-button>
</template>
```

## 自定义颜色

```vue
<template>
  <uv-button text="自定义颜色" color="#8A2BE2"></uv-button>
  <uv-button text="渐变颜色" color="linear-gradient(to right, #ff3366, #ff6533)"></uv-button>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| hairline | 是否显示按钮的细边框 | `boolean` | `true` |
| type | 按钮的预置样式，可选值为 `info`、`primary`、`error`、`warning`、`success` | `string` | `info` |
| size | 按钮尺寸，可选值为 `large`、`normal`、`small`、`mini` | `string` | `normal` |
| shape | 按钮形状，可选值为 `circle`(两边为半圆)、`square`(带圆角) | `string` | `square` |
| plain | 按钮是否镂空，背景色透明 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| loading | 按钮名称前是否带 loading 图标 | `boolean` | `false` |
| loadingText | 加载中提示文字 | `string \| number` | - |
| loadingMode | 加载状态图标类型 | `string` | `spinner` |
| loadingSize | 加载图标大小 | `string \| number` | `14` |
| openType | 开放能力，具体请参考uniapp官方文档 | `string` | - |
| formType | 用于 form 组件，可选值为 `submit`、`reset` | `string` | - |
| appParameter | 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效 | `string` | - |
| hoverStopPropagation | 指定是否阻止本节点的祖先节点出现点击态 | `boolean` | `true` |
| lang | 指定返回用户信息的语言 | `string` | `en` |
| sessionFrom | 会话来源，open-type="contact"时有效 | `string` | - |
| sendMessageTitle | 会话内消息卡片标题，open-type="contact"时有效 | `string` | - |
| sendMessagePath | 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效 | `string` | - |
| sendMessageImg | 会话内消息卡片图片，open-type="contact"时有效 | `string` | - |
| showMessageCard | 是否显示会话内消息卡片，open-type="contact"时有效 | `boolean` | `true` |
| dataName | 额外传参参数，用于小程序的data-xxx属性 | `string` | - |
| throttleTime | 节流，一定时间内只能触发一次 | `string \| number` | `0` |
| hoverStartTime | 按住后多久出现点击态，单位毫秒 | `string \| number` | `0` |
| hoverStayTime | 手指松开后点击态保留时间，单位毫秒 | `string \| number` | `200` |
| text | 按钮文字 | `string \| number` | - |
| icon | 按钮图标 | `string` | - |
| iconSize | 按钮图标大小 | `string \| number` | - |
| iconColor | 按钮图标颜色 | `string` | `#000000` |
| color | 按钮颜色，支持传入linear-gradient渐变色 | `string` | - |
| customTextStyle | 自定义按钮文本样式 | `object \| string` | - |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 按钮点击事件 | event: Event |
| getphonenumber | 获取用户手机号回调 | event: Event |
| getuserinfo | 获取用户信息回调 | event: Event |
| error | 当使用开放能力时，发生错误的回调 | event: Event |
| opensetting | 在打开授权设置页后回调 | event: Event |
| launchapp | 打开 APP 成功的回调 | event: Event |
| contact | 客服消息回调 | event: Event |
| chooseavatar | 获取用户头像回调 | event: Event |

### Slots

| 名称 | 说明 |
|------|------|
| default | 按钮内容 |
| suffix | 按钮后置内容 |
``` 