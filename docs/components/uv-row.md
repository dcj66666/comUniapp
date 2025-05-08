# Row 布局

布局组件，通过基础的 12 分栏，迅速简便地创建布局。

## 基础用法

Row 组件和 Col 组件配合使用，Col 组件必须放在 Row 组件内。

```vue
<template>
  <view>
    <uv-row>
      <uv-col span="6">
        <view class="demo-layout bg-purple-light">6</view>
      </uv-col>
      <uv-col span="6">
        <view class="demo-layout bg-purple">6</view>
      </uv-col>
    </uv-row>
    
    <uv-row>
      <uv-col span="4">
        <view class="demo-layout bg-purple-light">4</view>
      </uv-col>
      <uv-col span="4">
        <view class="demo-layout bg-purple">4</view>
      </uv-col>
      <uv-col span="4">
        <view class="demo-layout bg-purple-light">4</view>
      </uv-col>
    </uv-row>
  </view>
</template>

<style>
.demo-layout {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
}
.bg-purple-light {
  background: #e5e9f2;
}
.bg-purple {
  background: #d3dce6;
}
</style>
```

## 设置间距

通过 `gutter` 属性可以设置列之间的间距，默认为 0。

```vue
<template>
  <uv-row gutter="10">
    <uv-col span="6">
      <view class="demo-layout bg-purple-light">6</view>
    </uv-col>
    <uv-col span="6">
      <view class="demo-layout bg-purple">6</view>
    </uv-col>
  </uv-row>
</template>
```

## 水平对齐方式

通过 `justify` 属性可以设置主轴上的对齐方式。

```vue
<template>
  <view>
    <!-- 左对齐 -->
    <uv-row justify="start">
      <uv-col span="4">
        <view class="demo-layout bg-purple-light">4</view>
      </uv-col>
      <uv-col span="4">
        <view class="demo-layout bg-purple">4</view>
      </uv-col>
    </uv-row>
    
    <!-- 居中对齐 -->
    <uv-row justify="center">
      <uv-col span="4">
        <view class="demo-layout bg-purple-light">4</view>
      </uv-col>
      <uv-col span="4">
        <view class="demo-layout bg-purple">4</view>
      </uv-col>
    </uv-row>
    
    <!-- 右对齐 -->
    <uv-row justify="end">
      <uv-col span="4">
        <view class="demo-layout bg-purple-light">4</view>
      </uv-col>
      <uv-col span="4">
        <view class="demo-layout bg-purple">4</view>
      </uv-col>
    </uv-row>
    
    <!-- 两端对齐 -->
    <uv-row justify="space-between">
      <uv-col span="4">
        <view class="demo-layout bg-purple-light">4</view>
      </uv-col>
      <uv-col span="4">
        <view class="demo-layout bg-purple">4</view>
      </uv-col>
    </uv-row>
    
    <!-- 均匀分布 -->
    <uv-row justify="space-around">
      <uv-col span="4">
        <view class="demo-layout bg-purple-light">4</view>
      </uv-col>
      <uv-col span="4">
        <view class="demo-layout bg-purple">4</view>
      </uv-col>
    </uv-row>
  </view>
</template>
```

## 垂直对齐方式

通过 `align` 属性可以设置交叉轴上的对齐方式。

```vue
<template>
  <view>
    <!-- 顶部对齐 -->
    <uv-row align="top" customStyle="height: 80px;">
      <uv-col span="4">
        <view class="demo-layout bg-purple-light">4</view>
      </uv-col>
      <uv-col span="4">
        <view class="demo-layout bg-purple" style="height: 60px;">4</view>
      </uv-col>
    </uv-row>
    
    <!-- 居中对齐 -->
    <uv-row align="center" customStyle="height: 80px;">
      <uv-col span="4">
        <view class="demo-layout bg-purple-light">4</view>
      </uv-col>
      <uv-col span="4">
        <view class="demo-layout bg-purple" style="height: 60px;">4</view>
      </uv-col>
    </uv-row>
    
    <!-- 底部对齐 -->
    <uv-row align="bottom" customStyle="height: 80px;">
      <uv-col span="4">
        <view class="demo-layout bg-purple-light">4</view>
      </uv-col>
      <uv-col span="4">
        <view class="demo-layout bg-purple" style="height: 60px;">4</view>
      </uv-col>
    </uv-row>
  </view>
</template>
```

## API

### Row Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| gutter | 栅格间隔，左右各为此值的一半，单位px | `String \| Number` | `0` |
| justify | 水平排列方式，可选值为 `start`(或`flex-start`)、`end`(或`flex-end`)、`center`、`around`(或`space-around`)、`between`(或`space-between`) | `String` | `start` |
| align | 垂直排列方式，可选值为 `top`、`center`、`bottom` | `String` | `center` |
| customStyle | 定义需要用到的外部样式 | `Object` | - |

### Row Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | Row 被点击时触发 | - |

### Col Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| span | 栅格占据的列数，总12等份 | `String \| Number` | `12` |
| offset | 分栏左边偏移，计算方式与span相同 | `String \| Number` | `0` |
| justify | 水平排列方式，可选值为 `start`(或`flex-start`)、`end`(或`flex-end`)、`center`、`around`(或`space-around`)、`between`(或`space-between`) | `String` | `start` |
| align | 垂直对齐方式，可选值为 `top`、`center`、`bottom`、`stretch` | `String` | `stretch` |
| textAlign | 文字水平对齐方式 | `String` | `left` |
| customStyle | 定义需要用到的外部样式 | `Object` | - |

### Col Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | Col 被点击时触发 | - | 