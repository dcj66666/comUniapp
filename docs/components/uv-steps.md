# uv-steps 步骤条

## 介绍

步骤条组件，用于展示操作流程的进度，引导用户按流程完成任务。

## 基础用法

```vue
<template>
  <uv-steps :current="current">
    <uv-step title="步骤1" desc="第一步的描述" />
    <uv-step title="步骤2" desc="第二步的描述" />
    <uv-step title="步骤3" desc="第三步的描述" />
  </uv-steps>
</template>

<script>
export default {
  data() {
    return {
      current: 1
    }
  }
}
</script>
```

## 竖向步骤条

```vue
<template>
  <uv-steps :current="current" direction="vertical">
    <uv-step title="步骤1" desc="第一步的描述" />
    <uv-step title="步骤2" desc="第二步的描述" />
    <uv-step title="步骤3" desc="第三步的描述" />
  </uv-steps>
</template>
```

## 自定义图标

```vue
<template>
  <uv-steps :current="current">
    <uv-step title="步骤1" icon="home" />
    <uv-step title="步骤2" icon="photo" />
    <uv-step title="步骤3" icon="star" />
  </uv-steps>
</template>
```

## 自定义状态

```vue
<template>
  <uv-steps>
    <uv-step title="步骤1" status="finish" />
    <uv-step title="步骤2" status="error" />
    <uv-step title="步骤3" status="process" />
    <uv-step title="步骤4" status="wait" />
  </uv-steps>
</template>
```

## API

### Steps Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| current | 当前步骤 | Number | 0 |
| direction | 显示方向，可选值为 horizontal/vertical | String | 'horizontal' |
| activeColor | 激活状态颜色 | String | '#2979ff' |
| inactiveColor | 未激活状态颜色 | String | '#969799' |
| activeIcon | 激活状态图标 | String | 'checkbox-mark' |
| inactiveIcon | 未激活状态图标 | String | 'circle' |
| errorIcon | 错误状态图标 | String | 'close' |
| finishIcon | 完成状态图标 | String | 'checkbox-mark' |

### Step Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| title | 标题 | String | '' |
| desc | 描述 | String | '' |
| icon | 图标名称，优先级高于 status 定义的图标 | String | '' |
| status | 步骤状态，可选值为 wait/process/finish/error | String | 'wait' |
| clickable | 是否可点击 | Boolean | false |

### Step Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击步骤时触发 | index: 步骤索引 |

### Step Slots

| 名称 | 说明 |
|------|------|
| icon | 自定义图标 |
| title | 自定义标题 |
| desc | 自定义描述 |
``` 