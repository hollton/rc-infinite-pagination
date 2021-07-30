/**
  * 相关参数文档请参考
  * https://doc.gem-mine.tech/#/zh-cn/toolkit/api/gms
  */
const { defineConfig } = require('@gem-mine/script')

module.exports = defineConfig({
  /**
   * dev模式下注入右下角的开发菜单
   */
  showDevEntry: false,
  /**
   * `extract: false`不解压独立CSS入口，则引用者只需要引入`js`入口文件即可
   * 当然可以选择不设置`extract`，则引用者的时候需要额外导入CSS文件(<libName>.css)
   */
  css: {
    extract: false
  }
})
