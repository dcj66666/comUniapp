# Radio 单选框

用于在一组备选项中进行单选。

## 基础用法

```vue
<template>
  <uv-radio-group v-model="value">
    <uv-radio label="苹果"></uv-radio>
    <uv-radio label="香蕉"></uv-radio>
    <uv-radio label="橙子"></uv-radio>
  </uv-radio-group>
</template>

<script>
export default {
  data() {
    return {
      value: '苹果'
    }
  }
}
</script>
```

## 禁用状态

```vue
<template>
  <uv-radio-group v-model="value">
    <uv-radio label="苹果"></uv-radio>
    <uv-radio label="香蕉" disabled></uv-radio>
    <uv-radio label="橙子"></uv-radio>
  </uv-radio-group>
</template>
```

## 单选框形状

```vue
<template>
  <uv-radio-group v-model="value" shape="square">
    <uv-radio label="苹果"></uv-radio>
    <uv-radio label="香蕉"></uv-radio>
    <uv-radio label="橙子"></uv-radio>
  </uv-radio-group>
</template>
```

## 自定义颜色

```vue
<template>
  <uv-radio-group v-model="value" activeColor="#3c9cff">
    <uv-radio label="苹果"></uv-radio>
    <uv-radio label="香蕉"></uv-radio>
    <uv-radio label="橙子"></uv-radio>
  </uv-radio-group>
</template>
```

## 横向排列

```vue
<template>
  <uv-radio-group v-model="value" placement="row">
    <uv-radio label="苹果"></uv-radio>
    <uv-radio label="香蕉"></uv-radio>
    <uv-radio label="橙子"></uv-radio>
  </uv-radio-group>
</template>
```

## 配合单元格使用

```vue
<template>
  <uv-radio-group v-model="value">
    <uv-cell-group>
      <uv-cell title="苹果" clickable @click="value = '苹果'">
        <template #right-icon>
          <uv-radio label="苹果"></uv-radio>
        </template>
      </uv-cell>
      <uv-cell title="香蕉" clickable @click="value = '香蕉'">
        <template #right-icon>
          <uv-radio label="香蕉"></uv-radio>
        </template>
      </uv-cell>
      <uv-cell title="橙子" clickable @click="value = '橙子'">
        <template #right-icon>
          <uv-radio label="橙子"></uv-radio>
        </template>
      </uv-cell>
    </uv-cell-group>
  </uv-radio-group>
</template>
```

## API

### Radio Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| name | 组件标识符 | `string \| number` | - |
| shape | 形状，可选值为 `circle`、`square` | `string` | `circle` |
| disabled | 是否禁用 | `boolean` | `false` |
| labelDisabled | 是否禁止点击文本操作单选框 | `boolean` | `false` |
| activeColor | 选中状态下的颜色，如果设置了此值，将会覆盖RadioGroup的activeColor值 | `string` | `#2979ff` |
| inactiveColor | 未选中状态下的颜色 | `string` | `#c8c9cc` |
| iconSize | 图标大小，单位默认为rpx | `string \| number` | `20` |
| labelSize | 文字大小，单位默认为rpx | `string \| number` | `14` |
| label | 文本内容 | `string \| number` | - |
| size | 整体大小，对应的labelSize和iconSize都会相应增大或减小，单位默认为rpx | `string \| number` | - |

### RadioGroup Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model | 绑定的值 | `string \| number` | - |
| disabled | 是否禁用所有单选框 | `boolean` | `false` |
| shape | 形状，可选值为 `circle`、`square` | `string` | `circle` |
| activeColor | 选中状态下的颜色 | `string` | `#2979ff` |
| inactiveColor | 未选中状态下的颜色 | `string` | `#c8c9cc` |
| name | 组件标识符，用来在RadioGroup中获取选中项时的返回值 | `string` | - |
| size | 整体大小 | `string \| number` | `18` |
| placement | 单选框组排列方式，可选值为 `row`、`column` | `string` | `column` |
| label | 文本内容 | `string \| number` | - |
| labelDisabled | 是否禁止点击文本操作单选框 | `boolean` | `false` |
| iconSize | 图标大小，单位默认为rpx | `string \| number` | `20` |
| labelSize | 文字大小，单位默认为rpx | `string \| number` | `14` |
| borderBottom | 是否显示下边框 | `boolean` | `false` |
| iconPlacement | 图标和文字的对齐方式，可选值为 `left`、`right` | `string` | `left` |

### Radio Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 某个单选框状态发生变化时触发(选中状态) | name: string \| number |

### RadioGroup Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 任一单选框状态变化时触发 | name: string \| number | 