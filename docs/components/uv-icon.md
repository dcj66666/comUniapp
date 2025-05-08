# Icon 图标

基于字体的图标集，包含了大多数常见场景的图标。

## 基础用法

```vue
<template>
  <uv-icon name="photo"></uv-icon>
  <uv-icon name="camera" color="#2979ff"></uv-icon>
  <uv-icon name="trash" size="28"></uv-icon>
</template>
```

## 图标颜色

```vue
<template>
  <uv-icon name="heart" color="#ff0000"></uv-icon>
  <uv-icon name="star" color="primary"></uv-icon>
  <uv-icon name="share" color="success"></uv-icon>
  <uv-icon name="warning" color="warning"></uv-icon>
  <uv-icon name="error-circle" color="error"></uv-icon>
</template>
```

## 图标尺寸

```vue
<template>
  <uv-icon name="map" size="16"></uv-icon>
  <uv-icon name="map" size="24"></uv-icon>
  <uv-icon name="map" size="32"></uv-icon>
  <uv-icon name="map" size="40"></uv-icon>
</template>
```

## 自定义图标

```vue
<template>
  <!-- 使用图片作为图标 -->
  <uv-icon name="/static/logo.png" width="30" height="30"></uv-icon>
  
  <!-- 自定义图标库 -->
  <uv-icon name="my-icon" customPrefix="custom-icon"></uv-icon>
</template>
```

## 图标文本

```vue
<template>
  <uv-icon name="map" label="位置"></uv-icon>
  <uv-icon name="map" label="位置" labelPos="bottom"></uv-icon>
</template>
```

## 图标列表

以下是部分内置图标的列表，完整图标请参考官方文档或者查看icons.js文件：

<div class="icon-list">
  <div class="icon-item">
    <uv-icon name="home" size="30"></uv-icon>
    <div class="icon-name">home</div>
  </div>
  <div class="icon-item">
    <uv-icon name="photo" size="30"></uv-icon>
    <div class="icon-name">photo</div>
  </div>
  <div class="icon-item">
    <uv-icon name="search" size="30"></uv-icon>
    <div class="icon-name">search</div>
  </div>
  <div class="icon-item">
    <uv-icon name="share" size="30"></uv-icon>
    <div class="icon-name">share</div>
  </div>
  <div class="icon-item">
    <uv-icon name="star" size="30"></uv-icon>
    <div class="icon-name">star</div>
  </div>
  <div class="icon-item">
    <uv-icon name="trash" size="30"></uv-icon>
    <div class="icon-name">trash</div>
  </div>
</div>

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| name | 图标名称或图片路径 | `string` | - |
| color | 图标颜色，可接受主题色 | `string` | `#606266` |
| size | 图标大小，单位px | `string \| number` | `16px` |
| bold | 是否显示粗体 | `boolean` | `false` |
| index | 点击图标时传递的索引 | `string \| number` | - |
| hoverClass | 图标按下去的样式类 | `string` | - |
| customPrefix | 自定义图标前缀，方便用户扩展自己的图标库 | `string` | `uvicon` |
| label | 图标右侧或下方的文字 | `string \| number` | - |
| labelPos | label相对于图标的位置，可选值为`right`、`bottom` | `string` | `right` |
| labelSize | label的字体大小，单位px | `string \| number` | `15px` |
| labelColor | label的颜色 | `string` | `#606266` |
| space | label与图标的距离，单位px | `string \| number` | `3px` |
| imgMode | 图片的mode，当name为图片路径时生效 | `string` | `aspectFit` |
| width | 显示图片图标时的宽度 | `string \| number` | - |
| height | 显示图片图标时的高度 | `string \| number` | - |
| top | 图标在垂直方向上的定位 | `string \| number` | `0` |
| stop | 是否阻止事件传播 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击图标时触发 | index |

<style>
.icon-list {
  display: flex;
  flex-wrap: wrap;
}
.icon-item {
  width: 90px;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5px;
  border: 1px solid #eee;
  border-radius: 4px;
}
.icon-name {
  font-size: 12px;
  color: #666;
  margin-top: 5px;
}
</style> 