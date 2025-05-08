# uv-skeleton 骨架屏

## 介绍

在页面数据加载完成前，先展示与实际内容结构相似的占位图形，让用户对页面有大致了解。

## 基础用法

```vue
<template>
  <uv-skeleton
    :loading="loading"
    :avatar="true"
    :rows="3"
  >
    <div>实际内容</div>
  </uv-skeleton>
</template>

<script>
export default {
  data() {
    return {
      loading: true
    }
  }
}
</script>
```

## 显示头像

```vue
<template>
  <uv-skeleton
    :loading="loading"
    :avatar="true"
    avatarSize="large"
  />
</template>
```

## 显示标题

```vue
<template>
  <uv-skeleton
    :loading="loading"
    :title="true"
    :rows="3"
  />
</template>
```

## 自定义行宽度

```vue
<template>
  <uv-skeleton
    :loading="loading"
    :rows="3"
    :rowsWidth="['60%', '80%', '100%']"
  />
</template>
```

## 动画效果

```vue
<template>
  <uv-skeleton
    :loading="loading"
    :rows="3"
    animate
  />
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| loading | 是否显示骨架屏 | Boolean | true |
| animate | 是否开启动画 | Boolean | false |
| avatar | 是否显示头像占位图 | Boolean | false |
| avatarSize | 头像占位图大小，可选值为 large/medium/small | String | 'medium' |
| avatarShape | 头像占位图形状，可选值为 square/circle | String | 'circle' |
| title | 是否显示标题占位图 | Boolean | false |
| titleWidth | 标题占位图宽度 | String/Number | '40%' |
| rows | 段落占位图行数 | Number | 0 |
| rowsWidth | 段落占位图宽度，可传数组来设置每一行的宽度 | Array/String/Number | '100%' |
| rowsHeight | 段落占位图高度 | String/Number | '16px' |
| backgroundColor | 骨架屏背景色 | String | '#f2f3f5' |
| activeColor | 动画中的闪光色 | String | '#e6e6e6' |

### Slots

| 名称 | 说明 |
|------|------|
| default | 骨架屏结束后显示的内容 |
| template | 自定义骨架屏内容 | 