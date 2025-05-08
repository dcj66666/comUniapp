# uv-line-progress 线形进度条

## 介绍

展示操作或任务的当前进度，比如上传文件，是一个线形的进度条。

## 基础用法

```vue
<template>
  <uv-line-progress :percentage="30"></uv-line-progress>
</template>
```

## 自定义颜色和高度

```vue
<template>
  <uv-line-progress 
    :percentage="50"
    activeColor="#ff0000"
    inactiveColor="#e0e0e0"
    :height="20"
  ></uv-line-progress>
</template>
```

## 显示进度文字

```vue
<template>
  <uv-line-progress 
    :percentage="80"
    :showText="true"
  ></uv-line-progress>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| activeColor | 激活部分的颜色 | String | '#19be6b' |
| inactiveColor | 背景色 | String | '#ececec' |
| percentage | 进度百分比，数值 | String / Number | 0 |
| showText | 是否在进度条内部显示百分比的值 | Boolean | true |
| height | 进度条的高度，单位px | String / Number | 12 |

### 平台差异说明

| App（vue） | App（nvue） | H5 | 小程序 |
|------------|-------------|----|----|
| √ | √ | √ | √ |
</rewritten_file> 