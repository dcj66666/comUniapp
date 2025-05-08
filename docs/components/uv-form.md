# Form 表单

表单组件，用于数据录入和校验。

## 基础用法

```vue
<template>
  <uv-form :model="form" :rules="rules" ref="form">
    <uv-form-item label="姓名" prop="name" required>
      <uv-input v-model="form.name" placeholder="请输入姓名"></uv-input>
    </uv-form-item>
    <uv-form-item label="手机号" prop="mobile" required>
      <uv-input v-model="form.mobile" placeholder="请输入手机号"></uv-input>
    </uv-form-item>
    <view class="form-button">
      <uv-button text="提交" type="primary" @click="submit"></uv-button>
      <uv-button text="重置" @click="reset"></uv-button>
    </view>
  </uv-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        mobile: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: ['blur', 'change'] }
        ],
        mobile: [
          { required: true, message: '请输入手机号', trigger: ['blur', 'change'] },
          { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  methods: {
    submit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          console.log('表单验证通过');
          // 表单提交逻辑
        } else {
          console.log('表单验证失败');
        }
      });
    },
    reset() {
      this.$refs.form.resetFields();
    }
  }
}
</script>

<style>
.form-button {
  margin-top: 20px;
  display: flex;
  gap: 15px;
  justify-content: center;
}
</style>
```

## 标签位置

通过 `labelPosition` 属性可以设置标签的位置，可选值为 `left` 或 `top`。

```vue
<template>
  <uv-form labelPosition="top" :model="form" :rules="rules">
    <uv-form-item label="姓名" prop="name">
      <uv-input v-model="form.name" placeholder="请输入姓名"></uv-input>
    </uv-form-item>
    <uv-form-item label="手机号" prop="mobile">
      <uv-input v-model="form.mobile" placeholder="请输入手机号"></uv-input>
    </uv-form-item>
  </uv-form>
</template>
```

## 自定义标签宽度

通过 `labelWidth` 属性可以设置标签的宽度。

```vue
<template>
  <uv-form :model="form" :rules="rules" labelWidth="80">
    <uv-form-item label="收货人" prop="name">
      <uv-input v-model="form.name" placeholder="请输入收货人"></uv-input>
    </uv-form-item>
    <uv-form-item label="联系电话" prop="mobile">
      <uv-input v-model="form.mobile" placeholder="请输入联系电话"></uv-input>
    </uv-form-item>
    <uv-form-item label="收货地址" prop="address">
      <uv-input v-model="form.address" placeholder="请输入收货地址"></uv-input>
    </uv-form-item>
  </uv-form>
</template>
```

## 表单校验

Form 组件提供了表单验证功能，只需要在 `rules` 属性中设置验证规则，通过 `validate` 方法即可触发校验。

```vue
<template>
  <uv-form :model="form" :rules="rules" ref="form">
    <uv-form-item label="用户名" prop="username" required>
      <uv-input v-model="form.username" placeholder="请输入用户名"></uv-input>
    </uv-form-item>
    <uv-form-item label="密码" prop="password" required>
      <uv-input v-model="form.password" type="password" placeholder="请输入密码"></uv-input>
    </uv-form-item>
    <uv-form-item label="确认密码" prop="confirmPassword" required>
      <uv-input v-model="form.confirmPassword" type="password" placeholder="请确认密码"></uv-input>
    </uv-form-item>
    <view class="button-group">
      <uv-button text="提交" type="primary" @click="submit"></uv-button>
    </view>
  </uv-form>
</template>

<script>
export default {
  data() {
    // 自定义校验函数
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.form.confirmPassword !== '') {
          // 对确认密码进行校验
          this.$refs.form.validateField('confirmPassword');
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    
    return {
      form: {
        username: '',
        password: '',
        confirmPassword: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        confirmPassword: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          // 表单验证通过
          console.log('提交成功');
        } else {
          console.log('验证失败');
        }
      });
    }
  }
}
</script>
```

## 表单项图标

通过 `leftIcon` 和 `rightIcon` 属性可以在表单项的左右两侧设置图标。

```vue
<template>
  <uv-form :model="form">
    <uv-form-item label="用户名" leftIcon="account">
      <uv-input v-model="form.username" placeholder="请输入用户名"></uv-input>
    </uv-form-item>
    <uv-form-item label="密码" leftIcon="lock">
      <uv-input v-model="form.password" type="password" placeholder="请输入密码"></uv-input>
    </uv-form-item>
  </uv-form>
</template>
```

## API

### Form Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| model | 表单数据对象 | `object` | `{}` |
| rules | 表单验证规则 | `object \| function \| array` | `{}` |
| errorType | 错误的提示方式，可选值为 `message`、`toast`、`border-bottom`、`none` | `string` | `message` |
| borderBottom | 是否显示表单域的下划线边框 | `boolean` | `true` |
| labelPosition | 表单域标签的位置，可选值为 `left`、`top` | `string` | `left` |
| labelWidth | 表单域标签的宽度，单位px | `string \| number` | `45` |
| labelAlign | 表单域标签的对齐方式，可选值为 `left`、`center`、`right` | `string` | `left` |
| labelStyle | 表单域标签的样式 | `object` | `{}` |

### Form Methods

| 方法名 | 说明 | 参数 |
|------|------|------|
| validate | 对整个表单进行校验，返回 Promise | `function(callback)` |
| validateField | 对部分表单字段进行校验 | `function(props, callback, event)` |
| resetFields | 重置表单数据 | - |
| clearValidate | 清空校验结果 | `props` (字段名或字段名数组) |

### FormItem Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| label | 标签文本 | `string` | - |
| prop | 表单域字段名 | `string` | - |
| borderBottom | 是否显示表单域的下划线边框 | `boolean` | `false` |
| labelPosition | 表单域标签的位置，可选值为 `left`、`top` | `string` | - |
| labelWidth | 表单域标签的宽度，单位px | `string \| number` | - |
| rightIcon | 右侧图标 | `string` | - |
| leftIcon | 左侧图标 | `string` | - |
| required | 是否显示必填星号 | `boolean` | `false` |
| leftIconStyle | 左侧图标的样式 | `string \| object` | - |

### Form Events

| 事件名 | 说明 | 参数 |
|------|------|------|
| validate | 任一表单项被校验后触发 | 被校验的表单项 prop 值，校验是否通过，错误消息（如果存在） |

### FormItem Slots

| 名称 | 说明 |
|------|------|
| default | 表单项内容 | 