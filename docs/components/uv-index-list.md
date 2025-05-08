# uv-index-list 索引列表

## 介绍

用于展示索引分类列表，常用于联系人列表、城市列表等场景。支持自定义索引内容、样式等特性。

## 基础用法

```vue
<template>
  <uv-index-list :indexList="indexList">
    <template v-for="(item, index) in list" :key="index">
      <uv-index-item :name="item.letter">
        <template v-for="(child, childIndex) in item.data" :key="childIndex">
          <uv-cell :title="child.name"></uv-cell>
        </template>
      </uv-index-item>
    </template>
  </uv-index-list>
</template>

<script>
export default {
  data() {
    return {
      indexList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      list: [
        {
          letter: 'A',
          data: [
            { name: '阿里巴巴' },
            { name: '阿拉斯加' }
          ]
        },
        {
          letter: 'B',
          data: [
            { name: '北京' },
            { name: '保定' }
          ]
        }
        // ... 其他数据
      ]
    }
  }
}
</script>
```

## 自定义样式

```vue
<template>
  <uv-index-list
    :indexList="indexList"
    :sticky="true"
    :stickyOffsetTop="100"
    activeColor="#1989fa"
    :customNavStyle="{ backgroundColor: '#f2f2f2' }"
  >
    <!-- 列表内容 -->
  </uv-index-list>
</template>
```

## 自定义索引列表

```vue
<template>
  <uv-index-list>
    <template #index>
      <view class="custom-index">
        <text v-for="(item, index) in indexList" :key="index">{{ item }}</text>
      </view>
    </template>
    <!-- 列表内容 -->
  </uv-index-list>
</template>
```

## API

### IndexList Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| indexList | 索引字符列表 | Array | A-Z字母表 |
| sticky | 是否开启锚点自动吸顶 | Boolean | true |
| stickyOffsetTop | 锚点自动吸顶时与顶部的距离，单位px | Number | 0 |
| activeColor | 索引字符选中时的颜色 | String | '#2979ff' |
| customNavStyle | 自定义导航栏样式 | Object | {} |
| height | 列表高度，单位px | String / Number | '100vh' |

### IndexItem Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| name | 索引字符 | String | - |
| customStyle | 自定义样式 | Object | {} |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| select | 选中字符时触发 | index: 选中字符的索引值 |
| change | 当前高亮的字符改变时触发 | index: 高亮字符的索引值 |

### Slots

| 名称 | 说明 |
|------|------|
| index | 自定义索引列表 |
| default | 列表内容 |

### 平台差异说明

| App（vue） | App（nvue） | H5 | 小程序 |
|------------|-------------|----|----|
| √ | √ | √ | √ | 