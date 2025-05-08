import './components'
import './styles/index.scss'
import ComponentDemo from './components/ComponentDemo.vue'

// 组件路径映射表
const componentMap = {
  'uv-button': '#/pages/componentsA/button/button',
  'uv-text': '#/pages/componentsA/text/text',
  'uv-icon': '#/pages/componentsA/icon/icon',
  'uv-tabs': '#/pages/componentsB/tabs/tabs',
  'uv-swiper': '#/pages/componentsB/swiper/swiper',
  'uv-rate': '#/pages/componentsB/rate/rate',
  // ... 可以继续添加其他组件映射
}

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  Vue.component('ComponentDemo', ComponentDemo)

  // 确保只在客户端执行
  if (typeof window !== 'undefined') {
    // 添加演示容器到body
    const addDemoContainer = () => {
      if (!document.querySelector('.demo-container')) {
        const container = document.createElement('div')
        container.className = 'demo-container'
        container.innerHTML = `
          <div class="demo-preview">
            <iframe src="https://h5.uvui.cn/" frameborder="0"></iframe>
          </div>
        `
        document.body.appendChild(container)

        const toggle = document.createElement('div')
        toggle.className = 'demo-toggle'
        toggle.textContent = '查看演示'
        toggle.onclick = toggleDemo
        document.body.appendChild(toggle)
      }
      return document.querySelector('.demo-preview iframe')
    }

    // 切换演示显示/隐藏
    window.toggleDemo = function() {
      const demoContainer = document.querySelector('.demo-container')
      const demoToggle = document.querySelector('.demo-toggle')
      if (demoContainer) {
        const isHidden = demoContainer.style.display === 'none'
        demoContainer.style.display = isHidden ? 'block' : 'none'
        if (demoToggle) {
          demoToggle.textContent = isHidden ? '关闭演示' : '查看演示'
        }
      }
    }

    // 移除演示容器
    const removeDemoContainer = () => {
      const container = document.querySelector('.demo-container')
      const toggle = document.querySelector('.demo-toggle')
      if (container) container.remove()
      if (toggle) toggle.remove()
    }

    // 路由变化时更新演示页面
    router.afterEach((to) => {
      // 在组件相关页面显示演示区域
      if (to.path.startsWith('/components')) {
        const iframe = addDemoContainer()
        
        if (to.path === '/components/') {
          // 在组件列表页显示首页
          if (iframe) iframe.src = 'https://h5.uvui.cn/'
        } else {
          // 在具体组件页面显示对应组件
          const componentName = to.path.split('/').pop().replace('.html', '')
          if (iframe && componentMap[componentName]) {
            const baseUrl = 'https://h5.uvui.cn/'
            iframe.src = baseUrl + componentMap[componentName]
          }
        }
      } else {
        // 在非组件页面移除演示区域
        removeDemoContainer()
      }
    })
  }
} 