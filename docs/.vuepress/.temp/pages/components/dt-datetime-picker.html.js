import comp from "D:/comUniapp/docs/.vuepress/.temp/pages/components/dt-datetime-picker.html.vue"
const data = JSON.parse("{\"path\":\"/components/dt-datetime-picker.html\",\"title\":\"DateTimePicker 日期时间选择器\",\"lang\":\"en-US\",\"frontmatter\":{}}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
