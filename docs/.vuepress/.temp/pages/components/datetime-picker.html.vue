<template><div><h1 id="datetimepicker-日期时间选择器" tabindex="-1"><a class="header-anchor" href="#datetimepicker-日期时间选择器"><span>DateTimePicker 日期时间选择器</span></a></h1>
<p>用于选择日期和时间的组件。</p>
<h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法"><span>基础用法</span></a></h2>
<pre v-pre><code class="language-vue">&lt;template&gt;
  &lt;dt-datetime-picker
    v-model=&quot;value&quot;
    mode=&quot;datetime&quot;
    title=&quot;选择时间&quot;
  /&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value: new Date()
    }
  }
}
&lt;/script&gt;
</code></pre>
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>API</span></a></h2>
<h3 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>v-model</td>
<td>绑定值</td>
<td><code v-pre>Date</code></td>
<td>-</td>
</tr>
<tr>
<td>mode</td>
<td>选择器类型，可选值为 <code v-pre>date</code>、<code v-pre>time</code>、<code v-pre>datetime</code></td>
<td><code v-pre>string</code></td>
<td><code v-pre>datetime</code></td>
</tr>
<tr>
<td>title</td>
<td>标题</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td>min-date</td>
<td>可选的最小日期</td>
<td><code v-pre>Date</code></td>
<td>十年前</td>
</tr>
<tr>
<td>max-date</td>
<td>可选的最大日期</td>
<td><code v-pre>Date</code></td>
<td>十年后</td>
</tr>
<tr>
<td>formatter</td>
<td>选项格式化函数</td>
<td><code v-pre>(type, value) =&gt; value</code></td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="events" tabindex="-1"><a class="header-anchor" href="#events"><span>Events</span></a></h3>
<table>
<thead>
<tr>
<th>事件名</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>当值变化时触发的事件</td>
<td>当前值</td>
</tr>
<tr>
<td>confirm</td>
<td>点击完成按钮时触发的事件</td>
<td>当前值</td>
</tr>
<tr>
<td>cancel</td>
<td>点击取消按钮时触发的事件</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots"><span>Slots</span></a></h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>title</td>
<td>自定义标题</td>
</tr>
<tr>
<td>confirm</td>
<td>自定义确认按钮文字</td>
</tr>
<tr>
<td>cancel</td>
<td>自定义取消按钮文字</td>
</tr>
</tbody>
</table>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2>
<h3 id="日期选择" tabindex="-1"><a class="header-anchor" href="#日期选择"><span>日期选择</span></a></h3>
<pre v-pre><code class="language-vue">&lt;dt-datetime-picker
  v-model=&quot;date&quot;
  mode=&quot;date&quot;
  title=&quot;选择日期&quot;
/&gt;
</code></pre>
<h3 id="时间选择" tabindex="-1"><a class="header-anchor" href="#时间选择"><span>时间选择</span></a></h3>
<pre v-pre><code class="language-vue">&lt;dt-datetime-picker
  v-model=&quot;time&quot;
  mode=&quot;time&quot;
  title=&quot;选择时间&quot;
/&gt;
</code></pre>
<h3 id="自定义格式化" tabindex="-1"><a class="header-anchor" href="#自定义格式化"><span>自定义格式化</span></a></h3>
<pre v-pre><code class="language-vue">&lt;dt-datetime-picker
  v-model=&quot;value&quot;
  :formatter=&quot;formatter&quot;
  title=&quot;选择时间&quot;
/&gt;

&lt;script&gt;
export default {
  methods: {
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`
      }
      if (type === 'month') {
        return `${value}月`
      }
      if (type === 'day') {
        return `${value}日`
      }
      return value
    }
  }
}
&lt;/script&gt;
</code></pre>
</div></template>


