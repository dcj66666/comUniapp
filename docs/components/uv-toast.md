# Toast 轻提示

用于轻量级反馈或提示，不会打断用户操作。

## 基础用法

```vue
<template>
  <uv-button @click="showToast">显示提示</uv-button>
</template>

<script>
export default {
  methods: {
    showToast() {
      this.$refs.uToast.show({
        title: '这是一条提示',
        type: 'default'
      })
    }
  }
}
</script>
```

## 提示类型

```vue
<template>
  <uv-button @click="showDefaultToast">默认提示</uv-button>
  <uv-button @click="showSuccessToast">成功提示</uv-button>
  <uv-button @click="showWarningToast">警告提示</uv-button>
  <uv-button @click="showErrorToast">错误提示</uv-button>
  <uv-button @click="showLoadingToast">加载提示</uv-button>
  
  <uv-toast ref="uToast" />
</template>

<script>
export default {
  methods: {
    showDefaultToast() {
      this.$refs.uToast.show({
        title: '默认提示'
      })
    },
    showSuccessToast() {
      this.$refs.uToast.success('成功提示')
    },
    showWarningToast() {
      this.$refs.uToast.warning('警告提示')
    },
    showErrorToast() {
      this.$refs.uToast.error('错误提示')
    },
    showLoadingToast() {
      this.$refs.uToast.loading('加载中...')
    }
  }
}
</script>
```

## 显示位置

```vue
<template>
  <uv-button @click="showTopToast">顶部提示</uv-button>
  <uv-button @click="showCenterToast">中间提示</uv-button>
  <uv-button @click="showBottomToast">底部提示</uv-button>
  
  <uv-toast ref="uToast" />
</template>

<script>
export default {
  methods: {
    showTopToast() {
      this.$refs.uToast.show({
        title: '顶部提示',
        position: 'top'
      })
    },
    showCenterToast() {
      this.$refs.uToast.show({
        title: '中间提示',
        position: 'center'
      })
    },
    showBottomToast() {
      this.$refs.uToast.show({
        title: '底部提示',
        position: 'bottom'
      })
    }
  }
}
</script>
```

## 带图标

```vue
<template>
  <uv-button @click="showIconToast">带图标提示</uv-button>
  
  <uv-toast ref="uToast" />
</template>

<script>
export default {
  methods: {
    showIconToast() {
      this.$refs.uToast.show({
        title: '带图标提示',
        icon: 'checkmark',
        iconColor: '#ffffff'
      })
    }
  }
}
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| z-index | 层级 | `string \| number` | `10090` |
| loading | 是否加载中 | `boolean` | `false` |
| animation | 是否显示动画 | `boolean` | `true` |
| message | 显示的文本内容 | `string` | - |
| duration | 显示的时间，单位毫秒，0表示常驻 | `string \| number` | `2000` |
| type | 主题类型，可选值为 `default`、`primary`、`success`、`error`、`warning`、`loading` | `string` | `default` |
| icon | 自定义图标 | `string` | - |
| icon-color | 图标颜色 | `string` | `#ffffff` |
| size | 文字大小 | `string \| number` | `15` |
| color | 文字颜色 | `string` | `#ffffff` |
| bg-color | 背景颜色 | `string` | - |
| position | 显示位置，可选值为 `top`、`center`、`bottom` | `string` | `center` |
| border-radius | 圆角值 | `string \| number` | `8` |
| is-tab | 显示的文本内容，字节跳动小程序特有 | `boolean` | `false` |
| url | toast消失后是否跳转页面，有效值为："/pages/xxx/xxx" | `string` | - |
| callback | 执行完后的回调函数 | `Function` | - |
| complete | 执行完后的回调函数 | `Function` | - |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义内容 |

### Methods

| 方法名 | 说明 | 参数 |
|------|------|------|
| show | 显示提示 | options: Toast 参数对象 |
| success | 显示成功提示 | title: string, options?: Toast 参数对象 |
| error | 显示错误提示 | title: string, options?: Toast 参数对象 |
| warning | 显示警告提示 | title: string, options?: Toast 参数对象 |
| loading | 显示加载提示 | title: string, options?: Toast 参数对象 |
| hide | 隐藏提示 | - |
| setOptions | 设置配置 | options: Toast 参数对象 | 