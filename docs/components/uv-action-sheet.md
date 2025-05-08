# uv-action-sheet 操作菜单

## 介绍

操作菜单组件，从底部弹出的模态框，提供一组操作按钮供用户选择。

## 基础用法

```vue
<template>
  <uv-action-sheet
    v-model="show"
    :actions="actions"
    @select="onSelect"
  />
</template>

<script>
export default {
  data() {
    return {
      show: false,
      actions: [
        { name: '选项一' },
        { name: '选项二' },
        { name: '选项三' }
      ]
    }
  },
  methods: {
    onSelect(item) {
      console.log('选中', item.name)
    }
  }
}
</script>
```

## 展示取消按钮

```vue
<template>
  <uv-action-sheet
    v-model="show"
    :actions="actions"
    cancel-text="取消"
    @cancel="onCancel"
  />
</template>
```

## 展示描述信息

```vue
<template>
  <uv-action-sheet
    v-model="show"
    :actions="actions"
    description="这是一段描述信息"
  />
</template>

<script>
export default {
  data() {
    return {
      actions: [
        { name: '选项一', subname: '描述信息' },
        { name: '选项二', subname: '描述信息' }
      ]
    }
  }
}
</script>
```

## 选项状态

```vue
<template>
  <uv-action-sheet
    v-model="show"
    :actions="actions"
  />
</template>

<script>
export default {
  data() {
    return {
      actions: [
        { name: '着色选项', color: '#ee0a24' },
        { name: '禁用选项', disabled: true },
        { name: '加载选项', loading: true }
      ]
    }
  }
}
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| v-model | 是否显示动作面板 | Boolean | false |
| actions | 面板选项列表 | Array | [] |
| title | 标题 | String | '' |
| description | 选项上方的描述信息 | String | '' |
| cancelText | 取消按钮文字 | String | '' |
| closeOnClickAction | 是否在点击选项后关闭 | Boolean | true |
| closeOnClickOverlay | 是否在点击遮罩层后关闭 | Boolean | true |
| round | 是否显示圆角 | Boolean | true |
| safeAreaInsetBottom | 是否开启底部安全区适配 | Boolean | true |
| overlay | 是否显示遮罩层 | Boolean | true |
| zIndex | 面板层级 | Number | 100 |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| select | 选中选项时触发 | item: 选项对应的对象, index: 选中选项的索引 |
| cancel | 点击取消按钮时触发 | - |
| close | 面板关闭时触发 | - |
| click-overlay | 点击遮罩层时触发 | - |

### Action 数据结构

| 键名 | 说明 | 类型 |
|------|------|------|
| name | 标题 | String |
| subname | 二级标题 | String |
| color | 选项文字颜色 | String |
| loading | 是否为加载状态 | Boolean |
| disabled | 是否为禁用状态 | Boolean |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义面板内容 |
| description | 自定义描述文案 |
| cancel | 自定义取消按钮内容 | 