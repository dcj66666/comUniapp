# 隐患类型级联选择器

一个用于选择隐患类型的树形级联选择器组件。支持多级联动选择，UI风格简洁美观。

## 安装方式

本组件符合[uni_module](https://uniapp.dcloud.io/plugin/uni_modules)规范，可直接在项目下安装。

## 基本用法

在 `template` 中使用组件

```vue
<template>
  <view class="container">
    <risk-type-cascader 
      v-model="risk.selectedRiskType" 
      :listData="riskTypeList"
    />
  </view>
</template>

<script>
export default {
  data() {
    return {
      risk: {
        selectedRiskType: '' // 选中的隐患类型ID
      },
      riskTypeList: [
        {
          id: '1',
          name: '设备隐患',
          children: [
            {
              id: '1-1',
              name: '电气设备',
              children: [
                {
                  id: '1-1-1',
                  name: '线路老化'
                },
                {
                  id: '1-1-2',
                  name: '设备过载'
                }
              ]
            },
            {
              id: '1-2',
              name: '机械设备'
            }
          ]
        },
        {
          id: '2',
          name: '环境隐患',
          children: [
            {
              id: '2-1',
              name: '自然灾害'
            },
            {
              id: '2-2',
              name: '温湿度异常'
            }
          ]
        }
      ]
    }
  }
}
</script>
```

## 属性说明

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue / v-model | String / Number / Array | '' | 当前选中的值 |
| listData | Array | [] | 级联选择器的数据源 |
| childrenField | String | 'children' | 子节点的字段名 |
| valueField | String | 'id' | 值的字段名 |
| labelField | String | 'name' | 显示标签的字段名 |
| maxLevel | Number | 3 | 最大层级数 |
| onlyLeaf | Boolean | false | 是否仅叶子节点可选 |

## 事件说明

| 事件名 | 说明 | 返回参数 |
| --- | --- | --- |
| change | 选择完成时触发 | {value: 选中值, selectedOptions: 所有选中项数组, selectedLabels: 所有选中项的标签拼接} |

## 数据格式说明

组件要求的数据格式为具有树形结构的数组，每个节点包含：
- id/value：节点的唯一标识
- name/label：节点的显示文本
- children：子节点数组（可选）

```js
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