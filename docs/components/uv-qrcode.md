# uv-qrcode 二维码

## 介绍

该组件用于生成二维码，支持自定义大小、颜色等属性，可用于各种需要展示二维码的场景。

## 基础用法

```vue
<template>
  <uv-qrcode
    ref="uvqrcode"
    :value="content"
    :size="200"
  ></uv-qrcode>
</template>

<script>
export default {
  data() {
    return {
      content: 'https://www.example.com'
    }
  }
}
</script>
```

## 自定义样式

```vue
<template>
  <uv-qrcode
    ref="uvqrcode"
    :value="content"
    :size="300"
    :options="{
      margin: 10,
      color: {
        dark: '#000000',
        light: '#ffffff'
      }
    }"
  ></uv-qrcode>
</template>
```

## 保存二维码

```vue
<template>
  <view>
    <uv-qrcode
      ref="uvqrcode"
      :value="content"
      :size="200"
    ></uv-qrcode>
    <button @click="saveQRCode">保存二维码</button>
  </view>
</template>

<script>
export default {
  methods: {
    saveQRCode() {
      this.$refs.uvqrcode.save()
    }
  }
}
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value | 二维码内容 | String / Number | - |
| options | 二维码配置选项 | Object | {} |
| size | 二维码大小 | String / Number | 200 |
| fileType | 导出的文件类型 | String | 'png' |
| start | 是否初始化组件后就开始生成 | Boolean | true |
| auto | 是否数据发生改变自动重绘 | Boolean | true |
| loading | loading态 | Boolean | undefined |
| h5SaveIsDownload | H5保存即自动下载 | Boolean | false |
| h5DownloadName | H5下载名称 | String | 'uvQRCode' |
| h5SaveTip | H5保存二维码时候是否显示提示 | Boolean | true |

### Methods

| 方法名 | 说明 | 参数 |
|--------|------|------|
| make | 生成二维码 | - |
| save | 保存二维码图片 | - |
| registerStyle | 注册扩展样式 | plugin |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| complete | 生成完成时触发 | - |
| change | 二维码改变时触发 | - |
| click | 点击二维码时触发 | event |

### Options 配置项说明

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| margin | 二维码边距 | Number | 2 |
| color.dark | 前景色 | String | '#000000' |
| color.light | 背景色 | String | '#ffffff' |

### 平台差异说明

| App（vue） | App（nvue） | H5 | 小程序 |
|------------|-------------|----|----|
| √ | √ | √ | √ | 