<template><div><h1 id="移动端组件库" tabindex="-1"><a class="header-anchor" href="#移动端组件库"><span>移动端组件库</span></a></h1>
<p>一个基于 uni-app 的移动端组件库，提供丰富的 UI 组件和交互功能。</p>
<h2 id="特性" tabindex="-1"><a class="header-anchor" href="#特性"><span>特性</span></a></h2>
<ul>
<li>🚀 基于 uni-app 开发，支持多端运行</li>
<li>📦 提供 60+ 个高质量组件</li>
<li>🎨 支持主题定制</li>
<li>📱 支持 H5、App、小程序等多端</li>
<li>📖 详细的文档和示例</li>
<li>🔧 支持 TypeScript</li>
</ul>
<h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始"><span>快速开始</span></a></h2>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3>
<p>组件已内置在项目中，位于 <code v-pre>uni_modules</code> 目录下，无需额外安装。</p>
<h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h3>
<pre v-pre><code class="language-vue">&lt;template&gt;
  &lt;uv-button type=&quot;primary&quot;&gt;按钮&lt;/uv-button&gt;
  &lt;dt-datetime-picker v-model=&quot;date&quot; mode=&quot;date&quot; /&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      date: new Date()
    }
  }
}
&lt;/script&gt;
</code></pre>
<h2 id="组件分类" tabindex="-1"><a class="header-anchor" href="#组件分类"><span>组件分类</span></a></h2>
<ul>
<li>基础组件：按钮、单元格、图标等</li>
<li>表单组件：输入框、单选框、复选框等</li>
<li>反馈组件：轻提示、弹窗、加载等</li>
<li>展示组件：标签页、轮播图、日历等</li>
<li>导航组件：导航栏、标签栏、返回顶部等</li>
<li>其他组件：上传、瀑布流、分页等</li>
</ul>
<h2 id="文档" tabindex="-1"><a class="header-anchor" href="#文档"><span>文档</span></a></h2>
<ul>
<li><RouteLink to="/components/">组件文档</RouteLink></li>
<li><RouteLink to="/guide/">使用指南</RouteLink></li>
<li><RouteLink to="/changelog/">更新日志</RouteLink></li>
</ul>
</div></template>


