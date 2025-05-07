import Vue from 'vue'
import ComponentDemo from './ComponentDemo.vue'

// 注册组件
Vue.component('ComponentDemo', ComponentDemo)

// 注册示例组件
const requireComponent = require.context(
  '../components',
  false,
  /\.vue$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = fileName
    .split('/')
    .pop()
    .replace(/\.\w+$/, '')
  
  Vue.component(componentName, componentConfig.default || componentConfig)
}) 