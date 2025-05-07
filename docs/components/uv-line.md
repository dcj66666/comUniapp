# Line 线条

用于页面分割线、装饰线条的组件。

## 基础用法

```vue
<template>
  <uv-line></uv-line>
</template>
```

## 线条颜色

```vue
<template>
  <uv-line color="#3c9cff"></uv-line>
  <uv-line color="#19be6b"></uv-line>
  <uv-line color="#fa3534"></uv-line>
</template>
```

## 线条长度

```vue
<template>
  <uv-line length="100"></uv-line>
  <uv-line length="200"></uv-line>
  <uv-line length="50%"></uv-line>
</template>
```

## 线条方向

```vue
<template>
  <uv-line direction="row"></uv-line>
  <uv-line direction="column" length="100"></uv-line>
</template>
```

## 是否显示

```vue
<template>
  <uv-line :show="true"></uv-line>
  <uv-line :show="false"></uv-line>
</template>
```

## 设置发丝线

```vue
<template>
  <uv-line hairline></uv-line>
</template>
```

## 是否虚线

```vue
<template>
  <uv-line dashed></uv-line>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| color | 线条颜色 | `string` | `#dcdfe6` |
| length | 长度，竖向时表现为高度，横向时表现为长度，可以为百分比，如`100%` | `string \| number` | `100%` |
| direction | 线条方向，可选值为 `row`、`column` | `string` | `row` |
| hairline | 是否为发丝线 | `boolean` | `true` |
| margin | 线条与上下左右元素的间距，类似css的margin，如`30`代表上下左右各30rpx，`30 20`表示上下30rpx，左右20rpx | `string \| number` | `0` |
| dashed | 是否虚线，仅在`direction = row`时有效 | `boolean` | `false` |
| show | 是否显示 | `boolean` | `true` | 