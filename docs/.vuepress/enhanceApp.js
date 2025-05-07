import './components'
import './styles/index.scss'
import ComponentDemo from './components/ComponentDemo.vue'

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  Vue.component('ComponentDemo', ComponentDemo)
} 