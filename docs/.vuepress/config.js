module.exports = {
  title: '移动端组件库文档',
  description: '基于 uni-app 的移动端组件库',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    repo: 'your-username/your-repo', // 替换为您的仓库地址
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/' },
      { text: '指南', link: '/guide/' }
    ],
    sidebar: {
      '/components/': [
        {
          title: '基础组件',
          collapsable: false,
          children: [
            '/components/uv-button',
            '/components/uv-cell',
            '/components/uv-icon',
            '/components/uv-image',
            '/components/uv-text',
            '/components/uv-link'
          ]
        },
        {
          title: '表单组件',
          collapsable: false,
          children: [
            '/components/uv-input',
            '/components/uv-radio',
            '/components/uv-checkbox',
            '/components/uv-switch',
            '/components/uv-datetime-picker',
            '/components/dt-datetime-picker',
            '/components/uv-picker',
            '/components/uv-form'
          ]
        },
        {
          title: '反馈组件',
          collapsable: false,
          children: [
            '/components/uv-toast',
            '/components/uv-modal',
            '/components/uv-loading-icon',
            '/components/uv-notify',
            '/components/uv-alert'
          ]
        },
        {
          title: '展示组件',
          collapsable: false,
          children: [
            '/components/uv-tabs',
            '/components/dt-tabs',
            '/components/uv-swiper',
            '/components/uv-calendar',
            '/components/uv-collapse',
            '/components/uv-list',
            '/components/uv-grid'
          ]
        },
        {
          title: '导航组件',
          collapsable: false,
          children: [
            '/components/uv-navbar',
            '/components/uv-tabbar',
            '/components/uv-back-top',
            '/components/uv-index-list'
          ]
        },
        {
          title: '其他组件',
          collapsable: false,
          children: [
            '/components/uv-upload',
            '/components/uv-waterfall',
            '/components/dt-paging',
            '/components/dt-cascader'
          ]
        }
      ]
    }
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    '@vuepress/nprogress'
  ]
} 