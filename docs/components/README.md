# 组件示例

## 在线演示

<div class="demo-container">
  <div class="demo-preview">
    <iframe 
      src="https://h5.uvui.cn/"
      frameborder="0"
      style="width: 375px; height: 667px;"
    ></iframe>
  </div>
  <div class="demo-qrcode">
    <div class="qrcode-text">
      <p>扫描二维码在手机上查看</p>
      <p>或访问：<a href="https://h5.uvui.cn/" target="_blank">https://h5.uvui.cn/</a></p>
    </div>
  </div>
</div>

## 组件列表

这里是我们提供的所有组件，点击可以查看详细说明和示例。

### 基础组件
- [Button 按钮](/components/uv-button.html)
- [Icon 图标](/components/uv-icon.html)
- [Image 图片](/components/uv-image.html)
- [Cell 单元格](./uv-cell.md)
- [Text 文本](./uv-text.md)
- [Link 链接](./uv-link.md)
- [Avatar 头像](./uv-avatar.md)
- [Badge 徽标](./uv-badge.md)
- [Tag 标签](./uv-tags.md)
- [Line 线条](./uv-line.md)
- [Gap 间隔](./uv-gap.md)

## 表单组件

- [Input 输入框](./uv-input.md)
- [Textarea 文本域](./uv-textarea.md)
- [Radio 单选框](./uv-radio.md)
- [Checkbox 复选框](./uv-checkbox.md)
- [Switch 开关](./uv-switch.md)
- [Datetime Picker 日期时间选择器](./uv-datetime-picker.md)
- [Picker 选择器](./uv-picker.md)
- [Form 表单](./uv-form.md)
- [Code Input 验证码输入框](./uv-code-input.md)
- [Number Box 数字输入框](./uv-number-box.md)
- [Rate 评分](./uv-rate.md)
- [Slider 滑块](./uv-slider.md)
- [Keyboard 键盘](./uv-keyboard.md)
- [DatetimePicker 日期时间选择器](./dt-datetime-picker.md)
- [Cascader 级联选择器](./dt-cascader.md)

## 反馈组件

- [Toast 轻提示](./uv-toast.md)
- [Modal 模态框](./uv-modal.md)
- [Loading Icon 加载图标](./uv-loading-icon.md)
- [Loading Page 加载页](./uv-loading-page.md)
- [Notify 通知](./uv-notify.md)
- [Alert 警告框](./uv-alert.md)
- [Action Sheet 操作菜单](./uv-action-sheet.md)
- [Popup 弹出层](./uv-popup.md)
- [Overlay 遮罩层](./uv-overlay.md)

## 展示组件

- [Tabs 标签页](./uv-tabs.md)
- [DTTabs 纵向标签页](./dt-tabs.md)
- [Vertical Tabs 纵向标签页](./uv-vtabs.md)
- [Swiper 轮播图](./uv-swiper.md)
- [Calendar 日历](./uv-calendar.md)
- [Collapse 折叠面板](./uv-collapse.md)
- [List 列表](./uv-list.md)
- [Grid 宫格](./uv-grid.md)
- [Steps 步骤条](./uv-steps.md)
- [Skeleton 骨架屏](./uv-skeleton.md)
- [Empty 空状态](./uv-empty.md)
- [Count Down 倒计时](./uv-count-down.md)
- [Count To 数字滚动](./uv-count-to.md)
- [Line Progress 线形进度条](./uv-line-progress.md)
- [Read More 阅读更多](./uv-read-more.md)
- [Parse 富文本解析](./uv-parse.md)
- [QR Code 二维码](./uv-qrcode.md)
- [Album 相册](./uv-album.md)
- [Paging 分页](./dt-paging.md)

## 导航组件

- [Navbar 导航栏](./uv-navbar.md)
- [Tabbar 底部导航栏](./uv-tabbar.md)
- [Back Top 回到顶部](./uv-back-top.md)
- [Index List 索引列表](./uv-index-list.md)
- [Drop Down 下拉菜单](./uv-drop-down.md)
- [Subsection 分段器](./uv-subsection.md)
- [Sticky 吸顶](./uv-sticky.md)
- [Safe Bottom 安全区域](./uv-safe-bottom.md)
- [Status Bar 状态栏](./uv-status-bar.md)

## 其他组件

- [Upload 上传](./uv-upload.md)
- [Waterfall 瀑布流](./uv-waterfall.md)
- [Search 搜索](./uv-search.md)
- [Scroll List 滚动列表](./uv-scroll-list.md)
- [Row 行布局](./uv-row.md)
- [Divider 分割线](./uv-divider.md)
- [Tooltip 文字提示](./uv-tooltip.md)
- [Toolbar 工具栏](./uv-toolbar.md)
- [Transition 过渡动画](./uv-transition.md)
- [No Network 无网络提示](./uv-no-network.md)

<style>
.demo-container {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin: 40px 0;
  height: 80vh;
  padding: 30px;
  flex-wrap: wrap;
}

.demo-preview {
  border: 1px solid #dcdfe6;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  overflow: hidden;
}

.demo-qrcode {
  text-align: center;
  margin: 20px;
}

.demo-qrcode img {
  width: 180px;
  height: 180px;
  margin-bottom: 10px;
}

.demo-qrcode p {
  font-size: 14px;
  color: #666;
}

@media screen and (max-width: 768px) {
  .demo-preview {
    transform: scale(0.8);
    transform-origin: top center;
  }
}
</style> 