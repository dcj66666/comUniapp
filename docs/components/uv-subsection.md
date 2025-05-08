# uv-subsection 分段器

## 介绍

分段器组件用于让用户在有限选项中选择其中一个，常用于表单分类、标签切换等场景。

## 基础用法

```vue
<template>
  <uv-subsection :list="list" :current="current" @change="sectionChange"></uv-subsection>
</template>

<script>
export default {
  data() {
    return {
      list: ['选项一', '选项二', '选项三'],
      current: 0
    }
  },
  methods: {
    sectionChange(index) {
      this.current = index
    }
  }
}
</script>
```

## 自定义样式

```vue
<template>
  <uv-subsection
    :list="list"
    :current="current"
    mode="subsection"
    :activeColor="#2979ff"
    :inactiveColor="#606266"
    :buttonColor="#eeeeef"
    fontSize="28"
  ></uv-subsection>
</template>
```

## 自定义选项内容

```vue
<template>
  <uv-subsection>
    <uv-subsection-item
      v-for="(item, index) in list"
      :key="index"
    >
      <view class="custom-item">
        <text>{{ item.title }}</text>
        <text class="sub-text">{{ item.subTitle }}</text>
      </view>
    </uv-subsection-item>
  </uv-subsection>
</template>

<style>
.custom-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sub-text {
  font-size: 12px;
  color: #909399;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| list | 选项数组 | Array | [] |
| current | 当前选中项的索引 | Number | 0 |
| mode | 模式选择，可选值：button/subsection | String | 'button' |
| activeColor | 激活时的主题色 | String | '#2979ff' |
| inactiveColor | 未激活时的主题色 | String | '#303133' |
| buttonColor | 按钮背景颜色 | String | '#eeeeef' |
| fontSize | 字体大小，单位rpx | String / Number | 28 |
| bold | 激活选项的字体是否加粗 | Boolean | true |
| bgColor | 组件背景颜色 | String | '#ffffff' |
| height | 组件高度，单位rpx | String / Number | 70 |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 分段器选项改变时触发 | index: 当前选中项的索引 |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义选项内容 |

### 平台差异说明

| App（vue） | App（nvue） | H5 | 小程序 |
|------------|-------------|----|----|
| √ | √ | √ | √ |
``` 