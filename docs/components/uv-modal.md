# Modal 模态框

模态框组件，常用于消息提示、消息确认，在当前页面内完成特定的交互操作。

## 基础用法

使用前需要先通过 ref 获取模态框实例，然后调用 `open()` 方法打开模态框。

```vue
<template>
  <view>
    <uv-button text="打开模态框" @click="openModal"></uv-button>
    <uv-modal 
      ref="modal" 
      title="提示" 
      content="这是一个基础的模态框"
      :show-cancel-button="true"
      @confirm="confirmHandler"
      @cancel="cancelHandler"
    ></uv-modal>
  </view>
</template>

<script>
export default {
  methods: {
    openModal() {
      this.$refs.modal.open();
    },
    confirmHandler() {
      console.log('点击了确认按钮');
    },
    cancelHandler() {
      console.log('点击了取消按钮');
    }
  }
}
</script>
```

## 只有确认按钮

通过设置 `show-cancel-button` 为 `false`（默认值）可以隐藏取消按钮。

```vue
<template>
  <uv-modal 
    ref="modal" 
    title="提示" 
    content="这是一个只有确认按钮的模态框"
    @confirm="confirmHandler"
  ></uv-modal>
</template>
```

## 异步关闭

通过设置 `async-close` 为 `true`，可以异步关闭模态框，适用于需要等待请求完成后才关闭的场景。

```vue
<template>
  <uv-modal 
    ref="modal" 
    title="异步关闭" 
    content="点击确定按钮后会等待2秒才关闭"
    :async-close="true"
    @confirm="asyncConfirm"
  ></uv-modal>
</template>

<script>
export default {
  methods: {
    asyncConfirm() {
      // 模拟异步请求
      setTimeout(() => {
        // 手动关闭模态框
        this.$refs.modal.close();
        // 关闭loading状态
        this.$refs.modal.closeLoading();
      }, 2000);
    }
  }
}
</script>
```

## 自定义内容

通过默认插槽可以自定义模态框的内容。

```vue
<template>
  <uv-modal ref="modal" title="自定义内容">
    <view style="padding: 15px;">
      <view style="text-align: center;">
        <uv-icon name="star-fill" color="#f56c6c" size="50"></uv-icon>
      </view>
      <view style="margin-top: 10px; text-align: center;">
        这是一个自定义内容的模态框
      </view>
      <uv-input 
        v-model="value" 
        placeholder="请输入内容" 
        style="margin-top: 15px;"
      ></uv-input>
    </view>
  </uv-modal>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
```

## 自定义按钮

通过 `confirmButton` 插槽可以自定义底部按钮区域。

```vue
<template>
  <uv-modal ref="modal" title="自定义按钮">
    <view style="padding: 20px;">
      这是一个带有自定义按钮的模态框
    </view>
    <template #confirmButton>
      <view style="display: flex; padding: 15px;">
        <uv-button 
          type="primary" 
          text="自定义按钮" 
          :custom-style="{flex: 1}"
          @click="customButtonClick"
        ></uv-button>
      </view>
    </template>
  </uv-modal>
</template>

<script>
export default {
  methods: {
    customButtonClick() {
      this.$refs.modal.close();
      // 其他逻辑
    }
  }
}
</script>
```

## 按钮颜色

通过 `confirm-color` 和 `cancel-color` 属性可以分别设置确认按钮和取消按钮的颜色。

```vue
<template>
  <uv-modal 
    ref="modal" 
    title="自定义按钮颜色" 
    content="这是一个自定义按钮颜色的模态框"
    confirm-color="#f56c6c"
    cancel-color="#909399"
    :show-cancel-button="true"
  ></uv-modal>
</template>
```

## 对调按钮位置

通过 `button-reverse` 属性可以对调确认和取消按钮的位置。

```vue
<template>
  <uv-modal 
    ref="modal" 
    title="对调按钮位置" 
    content="确认按钮在左侧，取消按钮在右侧"
    :show-cancel-button="true"
    :button-reverse="true"
  ></uv-modal>
</template>
```

## 文本对齐方式

通过 `align` 属性可以设置内容的对齐方式。

```vue
<template>
  <uv-modal 
    ref="modal" 
    title="文本居中" 
    content="这是一个文本居中对齐的模态框内容"
    align="center"
  ></uv-modal>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| title | 标题内容 | `string` | - |
| content | 模态框内容，如传入slot内容，则此参数无效 | `string` | - |
| confirm-text | 确认按钮的文字 | `string` | `确认` |
| cancel-text | 取消按钮的文字 | `string` | `取消` |
| show-confirm-button | 是否显示确认按钮 | `boolean` | `true` |
| show-cancel-button | 是否显示取消按钮 | `boolean` | `false` |
| confirm-color | 确认按钮的颜色 | `string` | `#2979ff` |
| cancel-color | 取消按钮的颜色 | `string` | `#606266` |
| button-reverse | 对调确认和取消的位置 | `boolean` | `false` |
| zoom | 是否开启缩放效果 | `boolean` | `true` |
| z-index | 层级 | `string \| number` | `10075` |
| async-close | 是否异步关闭，只对确定按钮有效 | `boolean` | `false` |
| close-on-click-overlay | 是否允许点击遮罩关闭该组件 | `boolean` | `true` |
| negative-top | 往上偏移的值，给一个负的margin-top，往上偏移，避免和键盘重合 | `string \| number` | `0` |
| width | 模态框宽度，不支持百分比，可以数值，px，rpx单位 | `string \| number` | `650rpx` |
| align | 文本对齐方式，可选值为 `left`、`center`、`right` | `string` | `left` |
| text-style | 文本自定义样式 | `string \| object` | - |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| confirm | 点击确认按钮时触发 | - |
| cancel | 点击取消按钮时触发 | - |
| close | 点击遮罩关闭时触发，closeOnClickOverlay为true有效 | - |

### Methods

| 方法名 | 说明 | 参数 |
|------|------|------|
| open | 打开模态框 | - |
| close | 关闭模态框 | - |
| closeLoading | 关闭加载状态，在异步关闭时使用 | - |

### Slots

| 名称 | 说明 |
|------|------|
| default | 模态框内容 |
| confirmButton | 自定义底部按钮区域 |
``` 