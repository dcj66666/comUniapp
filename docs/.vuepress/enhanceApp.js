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

  // 确保只在客户端执行
  if (typeof window !== 'undefined') {
    window.toggleDemo = function() {
      const demoContainer = document.querySelector('.demo-container');
      const demoToggle = document.querySelector('.demo-toggle');
      if (demoContainer) {
        const isHidden = demoContainer.style.display === 'none';
        demoContainer.style.display = isHidden ? 'block' : 'none';
        if (demoToggle) {
          demoToggle.textContent = isHidden ? '关闭演示' : '查看演示';
        }
      }
    }
  }
} 