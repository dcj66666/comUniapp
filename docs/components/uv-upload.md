# uv-upload 文件上传

## 介绍

文件上传组件，支持单张和多张上传，支持预览、进度条、删除等功能。

## 基础用法

```vue
<template>
  <uv-upload
    :fileList="fileList"
    :action="uploadUrl"
    @afterRead="afterRead"
    @delete="deletePic"
  ></uv-upload>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      uploadUrl: 'http://example.com/upload'
    }
  },
  methods: {
    // 文件读取后的处理
    afterRead(event) {
      const { file } = event.detail
      this.fileList.push({
        url: file.url,
        status: 'uploading',
        message: '上传中'
      })
      // 执行上传
      this.uploadFile(file)
    },
    // 删除图片
    deletePic(event) {
      const index = event.detail.index
      this.fileList.splice(index, 1)
    },
    // 执行上传
    async uploadFile(file) {
      // 这里编写上传逻辑
    }
  }
}
</script>
```

## 多图上传

```vue
<template>
  <uv-upload
    :fileList="fileList"
    multiple
    :maxCount="5"
    @afterRead="afterRead"
  ></uv-upload>
</template>
```

## 自定义上传样式

```vue
<template>
  <uv-upload
    :fileList="fileList"
    :previewSize="80"
    :deletable="true"
    :maxCount="4"
    uploadIcon="camera-fill"
    uploadText="拍照上传"
  >
    <template #default>
      <view class="custom-upload">
        <uv-icon name="camera-fill" size="30"></uv-icon>
        <text>自定义上传区域</text>
      </view>
    </template>
  </uv-upload>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| fileList | 文件列表 | Array | [] |
| action | 必选参数，上传的地址 | String | - |
| name | 上传文件的字段名 | String | 'file' |
| maxSize | 文件大小限制，单位为byte | Number | Number.MAX_VALUE |
| maxCount | 文件上传数量限制 | Number | 99 |
| uploadIcon | 上传区域图标 | String | 'camera' |
| uploadText | 上传区域提示文字 | String | '' |
| width | 预览图片宽度，单位rpx | String / Number | 200 |
| height | 预览图片高度，单位rpx | String / Number | 200 |
| previewSize | 预览图片大小，单位rpx | String / Number | 120 |
| deletable | 是否显示删除按钮 | Boolean | true |
| multiple | 是否开启图片多选 | Boolean | false |
| disabled | 是否禁用文件上传 | Boolean | false |
| imageMode | 预览图片的裁剪模式 | String | 'aspectFill' |
| formData | 附加上传的信息 | Object | {} |
| headers | 设置上传的请求头部 | Object | {} |
| customStyle | 自定义样式 | Object | {} |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| afterRead | 文件读取完成后的回调 | event.detail = { file } |
| oversize | 文件大小超出限制时触发 | event.detail = { file } |
| delete | 删除文件时触发 | event.detail = { index, file } |
| progress | 文件上传进度回调 | event.detail = { index, progress } |
| success | 文件上传成功回调 | event.detail = { index, response } |
| fail | 文件上传失败回调 | event.detail = { index, error } |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义上传区域的内容 |
| preview | 自定义预览区域的内容 |

### 平台差异说明

| App（vue） | App（nvue） | H5 | 小程序 |
|------------|-------------|----|----|
| √ | √ | √ | √ |

注意：在小程序中，文件上传大小限制为10MB。 