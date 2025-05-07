export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/comUniapp/docs/.vuepress/.temp/pages/index.html.js"), meta: {} }],
  ["/components/datetime-picker.html", { loader: () => import(/* webpackChunkName: "components_datetime-picker.html" */"D:/comUniapp/docs/.vuepress/.temp/pages/components/datetime-picker.html.js"), meta: {} }],
  ["/components/dt-datetime-picker.html", { loader: () => import(/* webpackChunkName: "components_dt-datetime-picker.html" */"D:/comUniapp/docs/.vuepress/.temp/pages/components/dt-datetime-picker.html.js"), meta: {} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/comUniapp/docs/.vuepress/.temp/pages/404.html.js"), meta: {} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
