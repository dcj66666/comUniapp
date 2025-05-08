# uv-album 相册

## 介绍

相册组件，用于图片展示，支持单图、多图布局，可预览大图。

## 基础用法

```vue
<template>
  <uv-album :urls="images" @click="onClick" />
</template>

<script>
export default {
  data() {
    return {
      images: [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg'
      ]
    }
  },
  methods: {
    onClick(index) {
      console.log('点击图片：', index)
    }
  }
}
</script>
```

## 自定义列数

```vue
<template>
  <uv-album :urls="images" :columns="4" />
</template>
```

## 自定义间距

```vue
<template>
  <uv-album :urls="images" :spacing="10" />
</template>
```

## 自定义大小

```vue
<template>
  <uv-album
    :urls="images"
    :width="100"
    :height="100"
  />
</template>
```

## 单图模式

```vue
<template>
  <uv-album
    :urls="[image]"
    mode="single"
    :width="200"
    :height="150"
  />
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| urls | 图片地址数组 | Array | [] |
| mode | 显示模式，可选值为 grid/single | String | 'grid' |
| columns | 列数 | Number | 3 |
| spacing | 图片间距，单位px | Number | 6 |
| width | 图片宽度，单位px | Number | - |
| height | 图片高度，单位px | Number | - |
| previewFullImage | 是否开启图片预览功能 | Boolean | true |
| showIndex | 是否显示图片索引 | Boolean | true |
| round | 是否显示圆角 | Boolean | false |
| radius | 圆角大小，单位px | Number | 0 |
| maxCount | 最大显示图片数量，超出后显示剩余数量 | Number | 9 |
| lazyLoad | 是否开启图片懒加载 | Boolean | true |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击图片时触发 | index: 图片索引, url: 图片地址 |
| close | 关闭预览时触发 | index: 当前图片索引 |
| change | 预览图片切换时触发 | index: 当前图片索引 |
| delete | 删除图片时触发（需开启删除按钮） | index: 删除图片的索引 |
| oversize | 图片超出最大数量限制时触发 | - |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义内容，会覆盖整个组件 |
| preview | 自定义预览界面 |
| oversize | 自定义超出数量的提示内容 |

### 方法

| 方法名 | 说明 | 参数 |
|--------|------|------|
| preview | 预览图片 | index: 图片索引 | 