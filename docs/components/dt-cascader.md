# Cascader 级联选择器

级联选择器组件，支持多级联动选择，用于省市区、组织架构等层级结构数据的选择。

## 基础用法

基础的级联选择器用法。

```vue
<template>
  <view class="container">
    <dt-cascader 
      v-model="selectedValue" 
      :listData="options"
      @change="handleChange"
    />
  </view>
</template>

<script>
export default {
  data() {
    return {
      selectedValue: '',
      options: [
        {
          id: '1',
          name: '选项一',
          children: [
            {
              id: '1-1',
              name: '选项一-1',
              children: [
                {
                  id: '1-1-1',
                  name: '选项一-1-1'
                },
                {
                  id: '1-1-2',
                  name: '选项一-1-2'
                }
              ]
            },
            {
              id: '1-2',
              name: '选项一-2'
            }
          ]
        },
        {
          id: '2',
          name: '选项二',
          children: [
            {
              id: '2-1',
              name: '选项二-1'
            },
            {
              id: '2-2',
              name: '选项二-2'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleChange(e) {
      console.log('选中的值:', e.value);
      console.log('选中的选项:', e.selectedOptions);
      console.log('选中的标签:', e.selectedLabels);
    }
  }
}
</script>
```

## 自定义字段名

通过 `valueField`、`labelField` 和 `childrenField` 属性可以自定义数据中的字段名称。

```vue
<template>
  <view class="container">
    <dt-cascader 
      v-model="selectedValue" 
      :listData="options"
      valueField="value"
      labelField="label"
      childrenField="items"
    />
  </view>
</template>

<script>
export default {
  data() {
    return {
      selectedValue: '',
      options: [
        {
          value: '1',
          label: '选项一',
          items: [
            {
              value: '1-1',
              label: '选项一-1',
              items: [
                {
                  value: '1-1-1',
                  label: '选项一-1-1'
                }
              ]
            }
          ]
        },
        {
          value: '2',
          label: '选项二',
          items: [
            {
              value: '2-1',
              label: '选项二-1'
            }
          ]
        }
      ]
    }
  }
}
</script>
```

## 限制层级

通过 `maxLevel` 属性限制最大可选择的层级数量。

```vue
<template>
  <view class="container">
    <dt-cascader 
      v-model="selectedValue" 
      :listData="options"
      :maxLevel="2"
    />
  </view>
</template>
```

## 仅叶子节点可选

通过设置 `onlyLeaf` 属性为 `true`，可以限制只有叶子节点（没有子节点的选项）才能被选中。

```vue
<template>
  <view class="container">
    <dt-cascader 
      v-model="selectedValue" 
      :listData="options"
      :onlyLeaf="true"
    />
  </view>
</template>
```

## 省市区选择示例

一个实际的省市区选择器示例。

```vue
<template>
  <view class="container">
    <dt-cascader 
      v-model="selectedArea" 
      :listData="areaData"
      @change="handleAreaChange"
    />
  </view>
</template>

<script>
export default {
  data() {
    return {
      selectedArea: '',
      areaData: [
        {
          id: '110000',
          name: '北京市',
          children: [
            {
              id: '110100',
              name: '北京市',
              children: [
                {
                  id: '110101',
                  name: '东城区'
                },
                {
                  id: '110102',
                  name: '西城区'
                },
                // 更多区县...
              ]
            }
          ]
        },
        {
          id: '120000',
          name: '天津市',
          children: [
            {
              id: '120100',
              name: '天津市',
              children: [
                {
                  id: '120101',
                  name: '和平区'
                },
                {
                  id: '120102',
                  name: '河东区'
                },
                // 更多区县...
              ]
            }
          ]
        },
        // 更多省份...
      ]
    }
  },
  methods: {
    handleAreaChange(e) {
      const { selectedOptions } = e;
      let address = '';
      
      if (selectedOptions.length >= 1) {
        address += selectedOptions[0].name;
      }
      
      if (selectedOptions.length >= 2) {
        address += '-' + selectedOptions[1].name;
      }
      
      if (selectedOptions.length >= 3) {
        address += '-' + selectedOptions[2].name;
      }
      
      console.log('选中的地址:', address);
    }
  }
}
</script>
```

## 组织架构选择示例

一个组织架构选择器示例。

```vue
<template>
  <view class="container">
    <dt-cascader 
      v-model="selectedDept" 
      :listData="deptData"
      :onlyLeaf="true"
    />
  </view>
</template>

<script>
export default {
  data() {
    return {
      selectedDept: '',
      deptData: [
        {
          id: '1',
          name: '总公司',
          children: [
            {
              id: '1-1',
              name: '技术部',
              children: [
                {
                  id: '1-1-1',
                  name: '前端组'
                },
                {
                  id: '1-1-2',
                  name: '后端组'
                },
                {
                  id: '1-1-3',
                  name: '测试组'
                }
              ]
            },
            {
              id: '1-2',
              name: '产品部',
              children: [
                {
                  id: '1-2-1',
                  name: '设计组'
                },
                {
                  id: '1-2-2',
                  name: '策划组'
                }
              ]
            },
            {
              id: '1-3',
              name: '市场部'
            }
          ]
        }
      ]
    }
  }
}
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| modelValue/v-model | 当前选中的值 | `String \| Number \| Array` | - |
| listData | 级联选择器的数据源 | `Array` | `[]` |
| childrenField | 子节点的字段名 | `String` | `children` |
| valueField | 值的字段名 | `String` | `id` |
| labelField | 显示标签的字段名 | `String` | `name` |
| maxLevel | 最大层级数 | `Number` | `3` |
| onlyLeaf | 是否仅叶子节点可选 | `Boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 选择完成时触发 | `{value: 选中值, selectedOptions: 所有选中项数组, selectedLabels: 所有选中项的标签拼接}` |
| update:modelValue | 更新v-model值时触发 | 当前选中的值 |

### 数据格式

组件要求的数据格式为具有树形结构的数组，默认每个节点包含：
- id/value：节点的唯一标识
- name/label：节点的显示文本
- children：子节点数组（可选）

```javascript
[
  {
    id: '1',
    name: '一级选项1',
    children: [
      {
        id: '1-1',
        name: '二级选项1-1',
        children: [
          {
            id: '1-1-1',
            name: '三级选项1-1-1'
          }
        ]
      }
    ]
  }
]
``` 