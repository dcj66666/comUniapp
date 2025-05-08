# uv-read-more 阅读更多

## 介绍

该组件一般用于内容较长，预先收起一部分，点击展开全部内容的场景。

## 基础用法

```vue
<template>
  <uv-read-more>
    <text>这里是长文本内容...</text>
  </uv-read-more>
</template>
```

## 自定义配置

```vue
<template>
  <uv-read-more
    :showHeight="200"
    :toggle="true"
    closeText="展开全文"
    openText="收起"
    color="#2979ff"
    :fontSize="14"
  >
    <text>这里是长文本内容...</text>
  </uv-read-more>
</template>
```

## 自定义展开收起按钮

```vue
<template>
  <uv-read-more>
    <text>这里是长文本内容...</text>
    <template #toggle>
      <view class="custom-toggle">
        <text>自定义展开/收起按钮</text>
      </view>
    </template>
  </uv-read-more>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| showHeight | 内容超出此高度才会显示展开全文按钮，单位px | String / Number | 400 |
| toggle | 展开后是否显示收起按钮 | Boolean | false |
| closeText | 关闭时的提示文字 | String | '展开阅读全文' |
| openText | 展开时的提示文字 | String | '收起' |
| color | 提示文字的颜色 | String | '#2979ff' |
| fontSize | 提示文字的大小 | String / Number | 14 |
| textIndent | 段落首行缩进的字符个数 | String | '2em' |
| shadowStyle | 阴影样式 | Object | - |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| open | 内容被展开时触发 | - |
| close | 内容被收起时触发 | - |

### Slots

| 名称 | 说明 |
|------|------|
| default | 需要显示的内容 |
| toggle | 自定义展开/收起按钮的内容 |

### 平台差异说明

| App（vue） | App（nvue） | H5 | 小程序 |
|------------|-------------|----|----|
| √ | √ | √ | √ | 