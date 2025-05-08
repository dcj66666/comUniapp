# Rate 评分

评分组件，用于对事物进行评级操作，或者展示评分结果。

## 基础用法

基础的评分组件用法。

```vue
<template>
  <uv-rate v-model="value"></uv-rate>
</template>

<script>
export default {
  data() {
    return {
      value: 3
    }
  }
}
</script>
```

## 自定义图标

通过 `icon` 和 `activeIcon` 自定义评分组件的图标。

```vue
<template>
  <uv-rate 
    v-model="value" 
    icon="star-fill" 
    activeIcon="star-fill"
  ></uv-rate>
</template>

<script>
export default {
  data() {
    return {
      value: 3
    }
  }
}
</script>
```

## 自定义数量

通过 `count` 属性自定义评分总数。

```vue
<template>
  <uv-rate v-model="value" :count="6"></uv-rate>
</template>

<script>
export default {
  data() {
    return {
      value: 3
    }
  }
}
</script>
```

## 自定义颜色

通过 `activeColor` 和 `inactiveColor` 属性自定义评分的颜色。

```vue
<template>
  <uv-rate 
    v-model="value" 
    activeColor="#f56c6c" 
    inactiveColor="#cecece"
  ></uv-rate>
</template>

<script>
export default {
  data() {
    return {
      value: 3
    }
  }
}
</script>
```

## 设置尺寸

通过 `size` 属性设置评分组件的大小。

```vue
<template>
  <uv-rate v-model="value" size="24"></uv-rate>
</template>

<script>
export default {
  data() {
    return {
      value: 3
    }
  }
}
</script>
```

## 禁用状态

通过 `disabled` 属性禁用评分组件。

```vue
<template>
  <uv-rate v-model="value" disabled></uv-rate>
</template>

<script>
export default {
  data() {
    return {
      value: 3
    }
  }
}
</script>
```

## 半星模式

通过 `allowHalf` 属性开启半星模式。

```vue
<template>
  <uv-rate v-model="value" :allowHalf="true"></uv-rate>
</template>

<script>
export default {
  data() {
    return {
      value: 3.5
    }
  }
}
</script>
```

## 触摸滑动评分

通过 `touchable` 属性可以开启触摸滑动修改评分。

```vue
<template>
  <uv-rate v-model="value" :touchable="true"></uv-rate>
</template>

<script>
export default {
  data() {
    return {
      value: 3
    }
  }
}
</script>
```

## 卡片模式

结合卡片模式的示例。

```vue
<template>
  <view class="card">
    <view class="card-header">
      <text class="card-title">商品评价</text>
    </view>
    <view class="card-content">
      <view class="rate-item">
        <text>商品质量</text>
        <uv-rate v-model="quality"></uv-rate>
      </view>
      <view class="rate-item">
        <text>物流速度</text>
        <uv-rate v-model="logistics"></uv-rate>
      </view>
      <view class="rate-item">
        <text>服务态度</text>
        <uv-rate v-model="service"></uv-rate>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      quality: 5,
      logistics: 4,
      service: 5
    }
  }
}
</script>

<style>
.card {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 15px;
  margin: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
.card-header {
  margin-bottom: 15px;
}
.card-title {
  font-size: 16px;
  font-weight: bold;
}
.card-content {
  padding: 5px 0;
}
.rate-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model | 双向绑定选中的星星数量 | `Number` | `0` |
| count | 星星数量 | `Number` | `5` |
| disabled | 是否禁用 | `Boolean` | `false` |
| readonly | 是否为只读状态 | `Boolean` | `false` |
| size | 星星的大小，单位px | `String \| Number` | `18` |
| activeColor | 选中时的颜色 | `String` | `#FA3534` |
| inactiveColor | 未选中时的颜色 | `String` | `#B2B2B2` |
| gutter | 星星之间的距离，单位px | `String \| Number` | `4` |
| minCount | 最少选中星星的个数 | `Number` | `1` |
| allowHalf | 是否允许半星选择 | `Boolean` | `false` |
| activeIcon | 选中时的图标名，或图片链接 | `String` | `star-fill` |
| inactiveIcon | 未选中时的图标名，或图片链接 | `String` | `star` |
| touchable | 是否可以通过滑动手势选择评分 | `Boolean` | `true` |
| customStyle | 自定义样式，对象形式 | `Object` | `{}` |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 选中星星数量发生变化时触发 | value: 当前选中的星星数量 | 