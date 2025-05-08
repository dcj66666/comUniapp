# uv-drop-down 下拉菜单

## 介绍

下拉菜单组件用于展示一组下拉选项，支持单选、多选等功能，常用于筛选、排序等场景。

## 基础用法

```vue
<template>
  <uv-drop-down>
    <uv-drop-down-item v-model="value1" :options="options1" title="分类"></uv-drop-down-item>
    <uv-drop-down-item v-model="value2" :options="options2" title="排序"></uv-drop-down-item>
  </uv-drop-down>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: 0,
      options1: [
        { text: '全部', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      options2: [
        { text: '默认排序', value: 0 },
        { text: '好评排序', value: 1 },
        { text: '销量排序', value: 2 }
      ]
    }
  }
}
</script>
```

## 自定义样式

```vue
<template>
  <uv-drop-down
    :activeColor="#2979ff"
    :borderColor="#e4e7ed"
    :titleSize="28"
    :titleColor="#606266"
  >
    <uv-drop-down-item v-model="value" :options="options"></uv-drop-down-item>
  </uv-drop-down>
</template>
```

## 多选模式

```vue
<template>
  <uv-drop-down>
    <uv-drop-down-item
      v-model="multiValue"
      :options="options"
      mode="multiple"
      @change="onChange"
    ></uv-drop-down-item>
  </uv-drop-down>
</template>

<script>
export default {
  data() {
    return {
      multiValue: [],
      options: [
        { text: '选项1', value: 1 },
        { text: '选项2', value: 2 },
        { text: '选项3', value: 3 }
      ]
    }
  },
  methods: {
    onChange(value) {
      console.log('选中的值：', value)
    }
  }
}
</script>
```

## API

### DropDown Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| activeColor | 标题和选项的激活态颜色 | String | '#2979ff' |
| borderColor | 下拉框底部边框颜色 | String | '#e4e7ed' |
| closeOnClickMask | 是否在点击遮罩层后关闭菜单 | Boolean | true |
| closeOnClickOutside | 是否在点击外部后关闭菜单 | Boolean | true |
| titleSize | 标题文字大小，单位rpx | Number | 28 |
| titleColor | 标题文字颜色 | String | '#606266' |
| zIndex | 组件层级 | Number | 10075 |

### DropDownItem Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value/v-model | 当前选中项的值 | String / Number / Array | - |
| title | 菜单项标题 | String | '' |
| options | 选项数组 | Array | [] |
| disabled | 是否禁用菜单 | Boolean | false |
| mode | 选择模式，可选值：single/multiple | String | 'single' |
| placeholder | 选择提示文字 | String | '请选择' |
| maxCount | 多选模式下最多可选个数 | Number | Number.MAX_SAFE_INTEGER |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 选项改变时触发 | value: 当前选中项的值 |
| open | 打开菜单栏时触发 | - |
| close | 关闭菜单栏时触发 | - |
| opened | 打开菜单栏动画结束时触发 | - |
| closed | 关闭菜单栏动画结束时触发 | - |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义下拉菜单内容 |
| title | 自定义菜单标题内容 |

### 平台差异说明

| App（vue） | App（nvue） | H5 | 小程序 |
|------------|-------------|----|----|
| √ | √ | √ | √ | 