# Icon 图标

用于展示图标，支持多种图标类型。

## 基础用法

```vue
<template>
  <uv-icon name="star"></uv-icon>
  <uv-icon name="heart"></uv-icon>
  <uv-icon name="info"></uv-icon>
</template>
```

## 图标颜色

```vue
<template>
  <uv-icon name="star" color="#ff0000"></uv-icon>
  <uv-icon name="heart" color="#00ff00"></uv-icon>
  <uv-icon name="info" color="#0000ff"></uv-icon>
</template>
```

## 图标大小

```vue
<template>
  <uv-icon name="star" size="20"></uv-icon>
  <uv-icon name="star" size="30"></uv-icon>
  <uv-icon name="star" size="40"></uv-icon>
</template>
```

## 图标类型

```vue
<template>
  <uv-icon name="star" type="primary"></uv-icon>
  <uv-icon name="star" type="success"></uv-icon>
  <uv-icon name="star" type="warning"></uv-icon>
  <uv-icon name="star" type="error"></uv-icon>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| name | 图标名称 | `string` | - |
| color | 图标颜色 | `string` | - |
| size | 图标大小 | `string \| number` | `16` |
| type | 图标类型，可选值为 `primary`、`success`、`warning`、`error` | `string` | - |
| custom-prefix | 自定义图标前缀 | `string` | `uv-icon` |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击图标时触发 | event: Event |

## 图标列表

### 基础图标

- `star` - 星星
- `heart` - 心形
- `info` - 信息
- `success` - 成功
- `warning` - 警告
- `error` - 错误
- `close` - 关闭
- `check` - 对勾
- `plus` - 加号
- `minus` - 减号
- `arrow-up` - 上箭头
- `arrow-down` - 下箭头
- `arrow-left` - 左箭头
- `arrow-right` - 右箭头

### 导航图标

- `home` - 首页
- `search` - 搜索
- `user` - 用户
- `setting` - 设置
- `message` - 消息
- `notification` - 通知
- `menu` - 菜单
- `more` - 更多

### 操作图标

- `edit` - 编辑
- `delete` - 删除
- `share` - 分享
- `download` - 下载
- `upload` - 上传
- `refresh` - 刷新
- `play` - 播放
- `pause` - 暂停
- `stop` - 停止

## 注意事项

1. 可以通过 `name` 属性设置图标名称
2. 可以通过 `color` 属性设置图标颜色
3. 可以通过 `size` 属性设置图标大小
4. 可以通过 `type` 属性设置图标类型
5. 可以通过 `custom-prefix` 属性设置自定义图标前缀
6. 图标支持点击事件
7. 可以通过 CSS 自定义图标样式 