# Badge 徽标

用于显示消息提醒、数字或状态标记的小型徽标。

## 基础用法

```vue
<template>
  <uv-badge :count="5"></uv-badge>
  <uv-badge :count="10"></uv-badge>
  <uv-badge :count="100"></uv-badge>
  <uv-badge :count="1000"></uv-badge>
</template>
```

## 最大值

```vue
<template>
  <uv-badge :count="105" :max="99"></uv-badge>
</template>
```

## 自定义内容

```vue
<template>
  <uv-badge text="热门"></uv-badge>
  <uv-badge text="NEW"></uv-badge>
  <uv-badge text="SALE"></uv-badge>
</template>
```

## 自定义背景色

```vue
<template>
  <uv-badge :count="5" type="primary"></uv-badge>
  <uv-badge :count="5" type="success"></uv-badge>
  <uv-badge :count="5" type="warning"></uv-badge>
  <uv-badge :count="5" type="error"></uv-badge>
  <uv-badge :count="5" bgColor="#8A2BE2"></uv-badge>
</template>
```

## 徽标形状

```vue
<template>
  <uv-badge :count="5"></uv-badge>
  <uv-badge :count="5" shape="horn"></uv-badge>
</template>
```

## 圆点徽标

```vue
<template>
  <uv-badge isDot></uv-badge>
  <uv-badge isDot type="success"></uv-badge>
  <uv-badge isDot type="warning"></uv-badge>
  <uv-badge isDot type="error"></uv-badge>
</template>
```

## 绝对定位

```vue
<template>
  <view class="box">
    <uv-badge :count="9" :absolute="true" :offset="[20, 10]"></uv-badge>
    <uv-avatar size="large" src="https://example.com/avatar.jpg"></uv-avatar>
  </view>
</template>

<style>
.box {
  position: relative;
  width: 80px;
  height: 80px;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| isDot | 不展示数字，只有一个小点 | `boolean` | `false` |
| value | 展示的数字，超过max值会显示max+，为0时默认隐藏 | `string \| number` | - |
| count | 同value | `string \| number` | `0` |
| max | 最大值，超过最大值会显示 '{max}+'，为0时不限制最大值 | `string \| number` | `999` |
| show | 是否显示徽标 | `boolean` | `true` |
| showZero | 当数值为0时，是否展示徽标 | `boolean` | `false` |
| bgColor | 徽标背景颜色 | `string` | - |
| color | 徽标字体颜色 | `string` | `#ffffff` |
| shape | 徽标形状，可选值为 `horn`（角标）、`circle`（圆形） | `string` | `circle` |
| text | 徽标内容，如设置则优先于count、value | `string` | - |
| size | 徽标尺寸，可选值为 `default`、`mini` | `string` | `default` |
| offset | 设置badge位置偏移，格式为 [x, y]，也即设置的为top和right的值，单位px | `array` | `[0, 0]` |
| type | 预置的背景颜色，可选值为 `primary`、`success`、`warning`、`error`、`info` | `string` | - |
| numberType | 设置数字的显示方式，可选值为 `overflow`（超出隐藏）、`ellipsis`（超出显示省略号）、`limit`（超出时显示封顶的数字值） | `string` | `overflow` |
| absolute | 是否绝对定位 | `boolean` | `false` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 徽标内容 | 