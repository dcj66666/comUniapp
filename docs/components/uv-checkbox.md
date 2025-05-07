# Checkbox 复选框

用于在一组可选项中进行多项选择。

## 基础用法

```vue
<template>
  <uv-checkbox-group v-model="value">
    <uv-checkbox label="苹果"></uv-checkbox>
    <uv-checkbox label="香蕉"></uv-checkbox>
    <uv-checkbox label="橙子"></uv-checkbox>
  </uv-checkbox-group>
</template>

<script>
export default {
  data() {
    return {
      value: ['苹果']
    }
  }
}
</script>
```

## 禁用状态

```vue
<template>
  <uv-checkbox-group v-model="value">
    <uv-checkbox label="苹果"></uv-checkbox>
    <uv-checkbox label="香蕉" disabled></uv-checkbox>
    <uv-checkbox label="橙子"></uv-checkbox>
  </uv-checkbox-group>
</template>
```

## 复选框形状

```vue
<template>
  <uv-checkbox-group v-model="value" shape="square">
    <uv-checkbox label="苹果"></uv-checkbox>
    <uv-checkbox label="香蕉"></uv-checkbox>
    <uv-checkbox label="橙子"></uv-checkbox>
  </uv-checkbox-group>
</template>
```

## 自定义颜色

```vue
<template>
  <uv-checkbox-group v-model="value" activeColor="#3c9cff">
    <uv-checkbox label="苹果"></uv-checkbox>
    <uv-checkbox label="香蕉"></uv-checkbox>
    <uv-checkbox label="橙子"></uv-checkbox>
  </uv-checkbox-group>
</template>
```

## 限制最大可选数

```vue
<template>
  <uv-checkbox-group v-model="value" :max="2">
    <uv-checkbox label="苹果"></uv-checkbox>
    <uv-checkbox label="香蕉"></uv-checkbox>
    <uv-checkbox label="橙子"></uv-checkbox>
    <uv-checkbox label="梨子"></uv-checkbox>
  </uv-checkbox-group>
</template>
```

## 横向排列

```vue
<template>
  <uv-checkbox-group v-model="value" placement="row">
    <uv-checkbox label="苹果"></uv-checkbox>
    <uv-checkbox label="香蕉"></uv-checkbox>
    <uv-checkbox label="橙子"></uv-checkbox>
  </uv-checkbox-group>
</template>
```

## 配合单元格使用

```vue
<template>
  <uv-checkbox-group v-model="value">
    <uv-cell-group>
      <uv-cell title="苹果" clickable @click="toggle('苹果')">
        <template #right-icon>
          <uv-checkbox label="苹果" :name="'苹果'"></uv-checkbox>
        </template>
      </uv-cell>
      <uv-cell title="香蕉" clickable @click="toggle('香蕉')">
        <template #right-icon>
          <uv-checkbox label="香蕉" :name="'香蕉'"></uv-checkbox>
        </template>
      </uv-cell>
      <uv-cell title="橙子" clickable @click="toggle('橙子')">
        <template #right-icon>
          <uv-checkbox label="橙子" :name="'橙子'"></uv-checkbox>
        </template>
      </uv-cell>
    </uv-cell-group>
  </uv-checkbox-group>
</template>

<script>
export default {
  data() {
    return {
      value: []
    }
  },
  methods: {
    toggle(item) {
      const index = this.value.indexOf(item)
      if (index >= 0) {
        this.value.splice(index, 1)
      } else {
        this.value.push(item)
      }
    }
  }
}
</script>
```

## API

### Checkbox Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| name | 标识符 | `string \| number` | - |
| shape | 形状，可选值为 `square`、`circle` | `string` | `square` |
| size | 整体大小，单位默认为rpx | `string \| number` | `34` |
| value | 是否选中，如果使用了CheckboxGroup，此值将失效 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| activeColor | 选中时的颜色 | `string` | `#2979ff` |
| inactiveColor | 未选中时的颜色 | `string` | `#c8c9cc` |
| label | 标签文本内容 | `string \| number` | - |
| labelSize | 标签文本大小，单位默认为rpx | `string \| number` | `28` |
| labelColor | 标签文本颜色 | `string` | `#606266` |
| labelDisabled | 是否禁止点击文本切换状态 | `boolean` | `false` |
| iconColor | 图标颜色 | `string` | - |
| iconSize | 图标大小，单位默认为rpx | `string \| number` | `20` |
| iconPlacement | 图标与文字的对齐方式，可选值为 `left`、`right` | `string` | `left` |

### CheckboxGroup Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model | 绑定的值 | `array` | - |
| shape | 形状，可选值为 `square`、`circle` | `string` | `square` |
| disabled | 是否禁用所有复选框 | `boolean` | `false` |
| activeColor | 选中时的颜色 | `string` | `#2979ff` |
| inactiveColor | 未选中时的颜色 | `string` | `#c8c9cc` |
| size | 整体大小 | `string \| number` | `34` |
| labelSize | 标签大小 | `string \| number` | `28` |
| labelColor | 标签颜色 | `string` | `#606266` |
| labelDisabled | 是否禁止点击文本切换状态 | `boolean` | `false` |
| max | 最大可选数量 | `string \| number` | - |
| placement | 排列方向，可选值为 `row`、`column` | `string` | `column` |
| iconSize | 图标大小，单位默认为rpx | `string \| number` | `20` |
| iconColor | 图标颜色 | `string` | - |
| borderBottom | 是否显示下边框 | `boolean` | `false` |
| iconPlacement | 图标与文字的对齐方式，可选值为 `left`、`right` | `string` | `left` |

### Checkbox Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 复选框状态发生变化时触发 | name: string \| number |

### CheckboxGroup Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 复选框组状态发生变化时触发 | names: array | 