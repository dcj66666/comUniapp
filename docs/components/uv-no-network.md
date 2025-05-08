# uv-no-network 无网络提示

## 介绍

无网络提示组件，用于在设备网络连接断开时给予用户提示和建议。

## 基础用法

```vue
<template>
  <uv-no-network></uv-no-network>
</template>
```

## 自定义提示内容

```vue
<template>
  <uv-no-network
    tips="网络连接已断开"
    zIndex="100"
    @retry="retry"
  ></uv-no-network>
</template>

<script>
export default {
  methods: {
    retry() {
      console.log('点击重试')
    }
  }
}
</script>
```

## 自定义样式

```vue
<template>
  <uv-no-network>
    <template #default>
      <view class="custom-content">
        <image src="/static/no-network.png"></image>
        <text>网络出现问题啦</text>
        <uv-button type="primary" @click="retry">重新连接</uv-button>
      </view>
    </template>
  </uv-no-network>
</template>

<style>
.custom-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30rpx;
}
.custom-content image {
  width: 200rpx;
  height: 200rpx;
  margin-bottom: 20rpx;
}
.custom-content text {
  font-size: 28rpx;
  color: #909399;
  margin-bottom: 20rpx;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| tips | 提示文字 | String | '哎呀，网络信号丢失' |
| zIndex | 组件层级 | String / Number | 10080 |
| image | 图标图片 | String | - |
| showTips | 是否显示提示文字 | Boolean | true |
| marginTop | 距离顶部的距离，单位rpx | String / Number | 0 |
| bgColor | 背景颜色 | String | '#ffffff' |
| darkMode | 是否开启暗黑模式 | Boolean | false |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| retry | 点击重试按钮时触发 | - |
| connected | 网络恢复连接时触发 | - |
| disconnected | 网络连接断开时触发 | - |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义整个组件的内容 |
| error | 自定义错误提示内容 |

### 平台差异说明

| App（vue） | App（nvue） | H5 | 小程序 |
|------------|-------------|----|----|
| √ | √ | √ | √ |

注意：
1. 在 H5 平台，需要根据 navigator.onLine 状态来判断网络状态。
2. 在 App 平台，需要配置 manifest.json 的 permission 权限。
3. 在小程序平台，需要声明 wx.getNetworkType 接口权限。 