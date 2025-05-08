# uv-collapse 折叠面板

## 介绍

折叠面板组件，可以折叠/展开的内容区域。常用于分组显示较多信息。

## 基础用法

```vue
<template>
  <uv-collapse v-model="activeNames">
    <uv-collapse-item title="标题1" name="1">
      内容1
    </uv-collapse-item>
    <uv-collapse-item title="标题2" name="2">
      内容2
    </uv-collapse-item>
    <uv-collapse-item title="标题3" name="3">
      内容3
    </uv-collapse-item>
  </uv-collapse>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ['1']
    }
  }
}
</script>
```

## 手风琴模式

```vue
<template>
  <uv-collapse v-model="activeName" accordion>
    <uv-collapse-item title="标题1" name="1">
      内容1
    </uv-collapse-item>
    <uv-collapse-item title="标题2" name="2">
      内容2
    </uv-collapse-item>
    <uv-collapse-item title="标题3" name="3">
      内容3
    </uv-collapse-item>
  </uv-collapse>
</template>

<script>
export default {
  data() {
    return {
      activeName: '1'
    }
  }
}
</script>
```

## 自定义标题内容

```vue
<template>
  <uv-collapse v-model="activeNames">
    <uv-collapse-item name="1">
      <template #title>
        <view class="title">
          <text>自定义标题</text>
          <uv-icon name="right" />
        </view>
      </template>
      内容
    </uv-collapse-item>
  </uv-collapse>
</template>
```

## API

### Collapse Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| v-model | 当前展开面板的 name | Array/String/Number | - |
| accordion | 是否开启手风琴模式 | Boolean | false |
| border | 是否显示外边框 | Boolean | true |

### Collapse Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 切换面板时触发 | activeNames: 当前展开面板的 name |

### CollapseItem Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| name | 唯一标识符，默认为索引值 | String/Number | index |
| title | 标题栏左侧内容 | String | - |
| disabled | 是否禁用面板 | Boolean | false |
| isLink | 标题栏是否显示右侧箭头 | Boolean | true |
| clickable | 是否开启点击反馈 | Boolean | true |
| border | 是否显示内边框 | Boolean | true |

### CollapseItem Slots

| 名称 | 说明 |
|------|------|
| title | 自定义标题内容 |
| value | 自定义显示内容 |
| icon | 自定义标题栏左侧图标 |
| right-icon | 自定义标题栏右侧图标 |
``` 