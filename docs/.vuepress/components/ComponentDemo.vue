<template>
  <div class="component-demo">
    <div class="demo-title">{{ title }}</div>
    <div class="demo-content">
      <slot></slot>
    </div>
    <div class="demo-code" v-if="code">
      <pre><code>{{ code }}</code></pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentDemo',
  props: {
    title: {
      type: String,
      default: ''
    },
    code: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.component-demo {
  margin: 20px 0;
  border: 1px solid #eee;
  border-radius: 4px;
  
  .demo-title {
    padding: 12px 16px;
    border-bottom: 1px solid #eee;
    font-size: 16px;
    font-weight: 500;
  }
  
  .demo-content {
    padding: 16px;
    min-height: 100px;
  }
  
  .demo-code {
    padding: 16px;
    background: #f5f7fa;
    border-top: 1px solid #eee;
    
    pre {
      margin: 0;
      code {
        font-family: Consolas, Monaco, 'Andale Mono', monospace;
      }
    }
  }
}
</style> 