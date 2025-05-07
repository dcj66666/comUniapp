module.exports = {
  title: 'uni-app 组件库',
  title: '移动端组件库文档',
  description: '基于 uni-app 的移动端组件库',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    logo: 'https://img0.baidu.com/it/u=2607645373,2223422578&fm=253&fmt=auto&app=120&f=JPEG?w=747&h=466',
    repo: 'https://github.com/dcj66666/comUniapp.git', // 替换为您的仓库地址
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
            '/components/uv-link',
            '/components/uv-avatar',
            '/components/uv-badge',
            '/components/uv-tags',
            '/components/uv-line',
            '/components/uv-gap'
          ]
        },
        {
          title: '表单组件',
          collapsable: false,
          children: [
            '/components/uv-input',
            '/components/uv-textarea',
            '/components/uv-radio',
            '/components/uv-checkbox',
            '/components/uv-switch',
            '/components/uv-datetime-picker',
            '/components/dt-datetime-picker',
            '/components/uv-picker',
            '/components/uv-form',
            '/components/uv-code-input',
            '/components/uv-number-box',
            '/components/uv-rate',
            '/components/uv-slider',
            '/components/uv-keyboard'
          ]
        },
        {
          title: '反馈组件',
          collapsable: false,
          children: [
            '/components/uv-toast',
            '/components/uv-modal',
            '/components/uv-loading-icon',
            '/components/uv-loading-page',
            '/components/uv-notify',
            '/components/uv-alert',
            '/components/uv-action-sheet',
            '/components/uv-popup',
            '/components/uv-overlay'
          ]
        },
        {
          title: '展示组件',
          collapsable: false,
          children: [
            '/components/uv-tabs',
            '/components/dt-tabs',
            '/components/uv-vtabs',
            '/components/uv-swiper',
            '/components/uv-calendar',
            '/components/uv-collapse',
            '/components/uv-list',
            '/components/uv-grid',
            '/components/uv-steps',
            '/components/uv-skeleton',
            '/components/uv-skeletons',
            '/components/uv-empty',
            '/components/uv-count-down',
            '/components/uv-count-to',
            '/components/uv-line-progress',
            '/components/uv-read-more',
            '/components/uv-parse',
            '/components/uv-qrcode',
            '/components/uv-album'
          ]
        },
        {
          title: '导航组件',
          collapsable: false,
          children: [
            '/components/uv-navbar',
            '/components/uv-tabbar',
            '/components/uv-back-top',
            '/components/uv-index-list',
            '/components/uv-drop-down',
            '/components/uv-subsection',
            '/components/uv-sticky',
            '/components/uv-safe-bottom',
            '/components/uv-status-bar'
          ]
        },
        {
          title: '其他组件',
          collapsable: false,
          children: [
            '/components/uv-upload',
            '/components/uv-waterfall',
            '/components/dt-paging',
            '/components/dt-cascader',
            '/components/uv-search',
            '/components/uv-scroll-list',
            '/components/uv-row',
            '/components/uv-divider',
            '/components/uv-tooltip',
            '/components/uv-toolbar',
            '/components/uv-transition',
            '/components/uv-no-network'
          ]
        }
      ]
    }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/plugin-nprogress'
  ],
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        return {
          ...options,
          compilerOptions: {
            isCustomElement: tag => tag.startsWith('uv-')
          }
        }
      })
  }
} 